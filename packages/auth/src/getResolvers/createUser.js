import {resolver} from '@recylink/orion-js-app'
import hashPassword from '../helpers/hashPassword'
import createSession from '../helpers/createSession'
import generateVerifyEmailToken from '../helpers/generateVerifyEmailToken'

export default ({Session, Users, Sessions, onCreateUser, sendEmailVerificationToken}) => {
  let profile = Users.model.schema.profile || null
  return resolver({
    name: 'createUser',
    params: {
      email: {
        type: 'email',
        label: 'Email',
        async custom(email) {
          email = email.toLowerCase()
          const count = await Users.find({'emails.address': email}).count()
          if (count) {
            return 'emailExists'
          }
        }
      },
      password: {
        type: String,
        min: 8,
        label: 'Password',
        optional: true
      },
      ...({profile} || {})
    },
    returns: Session,
    mutation: true,
    resolve: async function ({email, password, profile}, viewer) {
      const newUser = {
        emails: [
          {
            address: email.toLowerCase(),
            verified: false
          }
        ],
        services: {},
        profile: profile || {},
        createdAt: new Date()
      }

      if (password) {
        newUser.services.password = {
          bcrypt: hashPassword(password),
          createdAt: new Date()
        }
      }

      const userId = await Users.insert(newUser)
      const user = await Users.findOne(userId)
      if (onCreateUser) {
        await onCreateUser(user)
      }

      if (sendEmailVerificationToken) {
        const token = await generateVerifyEmailToken(user)
        await sendEmailVerificationToken(user, token)
      }

      return await createSession(user, viewer)
    }
  })
}
