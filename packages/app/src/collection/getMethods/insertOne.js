import {validate, clean} from '@recylink/orion-js-schema'
import isPlainObject from 'lodash/isPlainObject'
import generateId from '../../helpers/generateId'
import fromDot from '../../database/dot/fromDot'
import runHooks from './runHooks'

export default ({rawCollection, schema, collection}) =>
  async function insertOne(doc, options, ...args) {
    let [viewer, ...otherArgs] = args

    if (!doc || !isPlainObject(doc)) {
      throw new Error('Insert must receive a document')
    }
    if (!doc._id) {
      doc._id = generateId()
    }

    await runHooks(collection, 'before.insert', doc, options, viewer, ...otherArgs)

    if (schema) {
      doc = await clean(schema, fromDot(doc))
      await validate(schema, doc, viewer)
    }

    await rawCollection.insertOne(doc, options, viewer)
    await runHooks(collection, 'after.insert', doc, options, viewer, ...otherArgs)
    return doc._id
  }
