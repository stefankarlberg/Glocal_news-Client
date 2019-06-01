import { generateAuthActions } from 'redux-token-auth'

const config = {
  authUrl: "http://localhost:3002/api/vi/auth",
  userAttributes: {
    uid: 'uid'
  }
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}