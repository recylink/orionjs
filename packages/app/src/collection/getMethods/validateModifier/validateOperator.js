import validatePush from './validatePush'
import validateUnset from './validateUnset'
import validateInc from './validateInc'
import validateSet from './validateSet'

const shouldCheck = function (key) {
  if (key === '$pushAll') throw new Error('$pushAll is not supported, use $push + $each')
  return ['$pull', '$pullAll', '$pop', '$slice'].indexOf(key) === -1
}

export default async function ({schema, operationDoc, operation, options, viewer}) {
  if (!shouldCheck(operation)) return

  if (operation === '$set') {
    await validateSet({schema, operationDoc, operation, options, viewer})
  } else if (operation === '$unset') {
    await validateUnset({schema, operationDoc, operation, options, viewer})
  } else if (operation === '$inc') {
    await validateInc({schema, operationDoc, operation, options, viewer})
  } else if (operation === '$push' || operation === '$addToSet') {
    await validatePush({schema, operationDoc, operation, options, viewer})
  } else {
    throw new Error(operation + ' operation is not supported yet')
  }
}
