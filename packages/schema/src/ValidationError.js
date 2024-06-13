import isPlainObject from 'lodash/isPlainObject'

export default class ValidationError extends Error {
  constructor(validationErrors, status = 400) {
    if (!isPlainObject(validationErrors)) {
      throw new Error('ValidationError must be initialized with an errors object')
    }

    const printableErrors = Object.keys(validationErrors)
      .map(key => {
        return `${key}: ${validationErrors[key]}`
      })
      .join(', ')

    const message = printableErrors

    super(message)

    Error.captureStackTrace(this, this.constructor)

    this.isOrionError = true
    this.code = ValidationError
    this.isValidationError = true
    this.validationErrors = validationErrors
    this.status = status
    this.error = 'ValidationError'
    this.type = 'ValidationError'

    this.getErrorData = () => {
      return {
        error: 'ValidationError',
        message: 'Validation Error',
        type: 'ValidationError',
        validationErrors: validationErrors,
        status
      }
    }

    this.prependKey = prepend => {
      const newErrors = {}

      const keys = Object.keys(this.validationErrors)

      for (const key of keys) {
        newErrors[`${prepend}.${key}`] = this.validationErrors[key]
      }

      return new ValidationError(newErrors)
    }
  }

  getStatus() {
    return 400
  }
}
