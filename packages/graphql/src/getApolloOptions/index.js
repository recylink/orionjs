import buildSchema from '../buildSchema'
import formatError from './formatError'

export default async function (options) {
  const schema = await buildSchema(options)

  return {
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
}
