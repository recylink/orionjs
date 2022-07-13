import {validate} from '@recylink/orion-js-schema'
import fromDot from '../../../database/dot/fromDot'

/**
 * Validates $push and $addToSet
 */
export default async function ({schema, operationDoc, operation}) {
  for (const key of Object.keys(operationDoc)) {
    const value = operationDoc[key]
    let toValidate = null
    if (operation === '$push' || operation === '$addToSet') {
      if (typeof value === 'object' && '$each' in value) {
        toValidate = value.$each
      } else {
        toValidate = [value]
      }
    }
    const validationObject = fromDot({[key]: toValidate})
    await validate(schema, validationObject, {omitRequired: true})
  }
}
