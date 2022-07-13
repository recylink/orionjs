import {resolver} from '@recylink/orion-js-app'

export default options =>
  resolver({
    private: true,
    params: {
      userId: {
        type: 'ID'
      }
    },
    returns: options.Users.model,
    mutation: false,
    resolve: async function ({userId}) {
      return await options.Users.findOne(userId)
    }
  })
