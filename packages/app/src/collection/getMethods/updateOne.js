import getSelector from './getSelector'
import validateModifier from './validateModifier'
import cleanModifier from './cleanModifier'
import runHooks from './runHooks'
import cleanResult from './cleanResult'

export default ({rawCollection, schema, collection}) =>
  async function update(...args) {
    const selector = getSelector(args)
    // eslint-disable-next-line
    let [_, modifier, options, viewer, ...otherArgs] = args
    if (!options) options = {}

    if (!modifier) {
      throw new Error('Modifier is required when making an update')
    }

    if (schema) {
      modifier = options.clean !== false ? await cleanModifier(schema, modifier) : modifier
      if (options.validate !== false) await validateModifier(schema, modifier, options, viewer)
    }

    await runHooks(collection, 'before.update', selector, modifier, options, viewer, ...otherArgs)
    const result = await rawCollection.updateOne(selector, modifier, options, viewer, ...otherArgs)
    await runHooks(collection, 'after.update', selector, modifier, options, viewer, ...otherArgs)

    return cleanResult(result)
  }
