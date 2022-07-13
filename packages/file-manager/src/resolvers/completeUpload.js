import {resolver} from '@recylink/orion-js-app'
import File from '../File'
import Files from '../Files'

export default resolver({
  params: {
    fileId: {
      type: 'ID'
    }
  },
  returns: File,
  mutation: true,
  async resolve({fileId}, viewer) {
    const file = await Files.findOne({createdBy: viewer.userId, _id: fileId})
    await file.update({$set: {status: 'uploaded'}})
    return file
  }
})
