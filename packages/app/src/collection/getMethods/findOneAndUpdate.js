import getSelector from './getSelector'
import validateModifier from './validateModifier'
import cleanModifier from './cleanModifier'

export default ({initItem, rawCollection, model, schema}) =>
  async function findOneAndUpdate(...args) {
    const selector = getSelector(args)
    let modifier = args[1]
    const options = args[2] || {}
    const viewer = args[3] || {}

    if (!modifier) {
      throw new Error('Modifier is required when making an update')
    }

    if (schema) {
      modifier = options.clean !== false ? await cleanModifier(schema, modifier) : modifier
      if (options.validate !== false) await validateModifier(schema, modifier, options, viewer)
    }

    const result = await rawCollection.findOneAndUpdate(selector, modifier, options, viewer)
    if (!result || !result.value) return null
    return initItem(result.value)
  }
