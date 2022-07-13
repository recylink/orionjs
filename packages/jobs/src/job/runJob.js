import JobsCollection from '../JobsCollection'
import {generateId, config} from '@recylink/orion-js-app'

export default async function (
  params,
  {identifier, waitToRun, ignoreDuplicationError = false} = {}
) {
  const {logger} = config()
  const getJobId = maxRetries =>
    new Promise((resolve, reject) => {
      if (this.identifier) return resolve(this.identifier)
      if (maxRetries <= 0)
        return reject(new Error('Job must be initialized in "start()" to be able to run'))
      setTimeout(() => {
        resolve(getJobId(maxRetries - 1))
      }, 1000)
    })

  await getJobId(5)

  const eventId = identifier || generateId()

  if (this.type !== 'event') {
    throw new Error('You can only call event jobs, not ' + this.type)
  }

  let runAfter = new Date()
  if (waitToRun) {
    runAfter = new Date(Date.now() + waitToRun)
  }
  await JobsCollection.await()
  try {
    await JobsCollection.insert({
      job: this.identifier,
      identifier: eventId,
      params,
      runAfter,
      timesExecuted: 0
    })
  } catch (error) {
    if (!ignoreDuplicationError) throw error

    if (error.isValidationError && Object.values(error.validationErrors).includes('notUnique')) {
      logger.warn('The job already exists in database, ignoring this error', {
        error,
        job: {job: this.identifier, identifier: eventId}
      })
      return eventId
    }
  }

  return eventId
}
