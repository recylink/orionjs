import {onError} from 'apollo-link-error'
import onNetworkError from './onNetworkError'
import handleTwoFactor from './handleTwoFactor'

export default options =>
  onError(({graphQLErrors, networkError, response, operation, forward}) => {
    // console.error('on error')
    if (graphQLErrors) {
      for (const graphQLError of graphQLErrors) {
        if (
          graphQLError.error === 'PermissionsError' &&
          graphQLError.type === 'needsTwoFactorCode'
        ) {
          if (options.promptTwoFactorCode) {
            return handleTwoFactor({
              options,
              graphQLErrors,
              networkError,
              response,
              operation,
              forward
            })
          }
        }
      }
      // console.error(graphQLErrors)
    }

    if (networkError) {
      const result = onNetworkError({graphQLErrors, networkError, response, operation, forward})
      if (result) return result
    }

    return options.onError({graphQLErrors, networkError, response, operation, forward})
  })
