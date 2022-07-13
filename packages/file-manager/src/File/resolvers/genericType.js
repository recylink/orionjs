import {resolver} from '@recylink/orion-js-app'

export default resolver({
  returns: String,
  async resolve(file, viewer) {
    const {type} = file
    if (!type) return 'unknown'
    if (type.startsWith('image/')) return 'image'
    if (type.startsWith('application/pdf')) return 'pdf'
    return 'unknown'
  }
})
