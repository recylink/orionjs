import {getServer, getViewer} from '@recylink/orion-js-app'
import {PubSub} from 'graphql-subscriptions'
import {setPubsub} from './pubsub'
import {WebSocketServer} from 'ws'
import {useServer} from 'graphql-ws/lib/use/ws'

export default function ({schema}, options) {
  setPubsub(options.pubsub || new PubSub())

  const server = getServer()

  if (!server) {
    throw new Error(
      'Error starting GraphQL WebSocket. You must start http server before starting GraphQL WebSocket'
    )
  }

  const path = '/subscriptions'

  const wsServer = new WebSocketServer({
    // This is the `httpServer` returned by createServer(app);
    server,
    // Pass a different path here if your ApolloServer serves at
    // a different path.
    path
  })

  const serverCleanup = useServer(
    {
      schema,
      context: async (ctx, msg, args) => {
        const {connectionParams} = ctx
        try {
          const params = {
            headers: {
              'x-orion-nonce': connectionParams.nonce,
              'x-orion-publickey': connectionParams.publicKey,
              'x-orion-signature': connectionParams.signature,
              'x-orion-jwt': connectionParams.jwt
            },
            getBody: () => 'websockethandshake',
            nonceName: 'graphqlsubs'
          }
          const viewer = await getViewer(params)
          return viewer
        } catch (error) {
          const viewer = await getViewer()
          return viewer
        }
      }
    },
    wsServer
  )

  return serverCleanup
}
