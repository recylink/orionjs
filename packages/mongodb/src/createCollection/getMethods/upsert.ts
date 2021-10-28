import getSelector from './getSelector'
import validateUpsert from './validateModifier/validateUpsert'
import cleanModifier from './cleanModifier'
import {generateId} from '@orion-js/helpers'
import {OrionCollection} from '../Types'

export default <DocumentType>(collection: OrionCollection.Collection) => {
  const upsert: OrionCollection.Upsert<DocumentType> = async (
    selectorArg,
    modifierArg,
    options = {}
  ) => {
    let modifier = modifierArg as any
    let selector = getSelector(selectorArg)

    if (collection.model) {
      const schema = collection.model.getSchema()

      if (options.clean !== false) {
        selector = (await cleanModifier(schema, {$set: selector})).$set
        modifier = await cleanModifier(schema, modifier)
      }
      if (options.validate !== false) await validateUpsert(schema, selector, modifier)
    }

    modifier.$setOnInsert = {...modifier.$setOnInsert, _id: generateId()}

    const result = await collection.rawCollection.updateOne(selector, modifier, {upsert: true})

    return result
  }

  return upsert
}