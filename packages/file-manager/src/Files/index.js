import {Collection} from '@recylink/orion-js-app'
import File from '../File'

export default new Collection({
  name: 'filemanager_files',
  model: File,
  indexes: [
    {
      keys: {
        key: 1,
        bucket: 1
      }
    },
    {
      keys: {
        hash: 1
      }
    }
  ]
})
