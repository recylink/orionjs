import {config, UserError} from '@recylink/orion-js-app'
import crypto from 'crypto'

export default function errorHandler(error, data) {
  const {logger} = config()
  console.log(
    JSON.stringify(
      {
        error,
        data
      },
      null,
      2
    )
  )
  const message = `Error in resolver "${data.name}" ${
    data.model ? `of model "${data.model.name}"` : ''
  }`
  if (
    error
    // && error.isOrionError
  ) {
    logger.warn(message, error)
  } else {
    const hash = crypto
      .createHash('sha1')
      .update(error.message, 'utf8')
      .digest('hex')
      .substring(0, 10)
    error.hash = hash
    logger.error(message, error)
    throw new UserError(message, error, {hash})
    // throw new UserError('INTERNAL_SERVER_ERROR', 'Internal server error', {hash})
  }
}
