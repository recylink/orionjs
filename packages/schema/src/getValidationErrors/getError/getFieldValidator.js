import isPlainObject from 'lodash/isPlainObject'
import isArray from 'lodash/isArray'
import isString from 'lodash/isString'
import fieldTypes from '../../fieldTypes'
import has from 'lodash/has'

export default function (type) {
  // if (!isString(type) && (type.__isModel = true)) {
  //   console.log('isModel')
  //   console.log(JSON.stringify({type}, null, 2))
  //   console.log(JSON.stringify(type, null, 2))
  // }
  // if (!isString(type) && isPlainObject(type)) {
  //   console.log('isPlainObject')
  //   console.log(JSON.stringify({type}, null, 2))
  //   console.log(JSON.stringify(type, null, 2))
  // }
  if (isPlainObject(type)) {
    if (type._isFieldType) return 'custom'
    return 'plainObject'
  }
  if (isArray(type)) return 'array'
  if (type === String) return 'string'
  if (type === Date) return 'date'
  if (type === Number) return 'number'
  if (type === Boolean) return 'boolean'

  if (!isString(type)) {
    console.log(JSON.stringify(type, null, 2))
    throw new Error('Field type is invalid. Pass a string or a custom field type. Got ' + type)
  }

  const exists = has(fieldTypes, type)

  if (!exists) {
    throw new Error('Field type does not exist')
  }

  return type
}
