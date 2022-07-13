import {route} from '@recylink/orion-js-app'
import {ApolloServer} from 'apollo-server-micro'
import startGraphiQL from './startGraphiQL'
import startWebsocket from './startWebsocket'
import micro from 'micro'
import {runHttpQuery} from 'apollo-server-core'
import buildSchema from './buildSchema'
import formatError from './formatError'

global.globalMicro = micro

export default async function (options) {
  const schema = await buildSchema(options)

  const serverCleanup = startWebsocket({schema}, options)

  const apolloOptions = {
    endpointURL: '/graphql',
    subscriptionsEndpoint: `/subscriptions`,
    schema,
    formatError,
    useGraphiql: options.useGraphiql || true,
    context: integrationContext => {
      return integrationContext.req._orionjsViewer
    },
    ...options,
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose()
            }
          }
        }
      }
    ]
  }

  startGraphiQL(apolloOptions, options)

  const apolloServer = new ApolloServer(apolloOptions)
  await apolloServer.start()
  const handler = apolloServer.createHandler() // highlight-line

  route('/graphql', async function (params) {
    const {request, response, viewer, getBodyJSON} = params

    if (options.executeGraphQLCache) {
      try {
        // this returns the original not-cached answer
        const fallback = async () => {
          const data = await getBodyJSON()

          const gqlResponse = await runHttpQuery([request, response], {
            method: request.method,
            options: {...apolloOptions, context: viewer},
            query: data
          })

          return gqlResponse.graphqlResponse
        }

        const result = await options.executeGraphQLCache(params, fallback)
        if (result) {
          return result
        }
      } catch (error) {
        console.log('Error executing GraphQL cache:', error)
      }
    }
    request._orionjsViewer = viewer
    handler(request, response)
  })
}
