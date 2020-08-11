'use strict'
const Token = use('App/Models/Token')
const User = use('App/Models/User')
class AuthController {

  async getLogin({ view }) {
    return view.render('login')
  }

  //Menggunakan Pake API
  async postLoginApi({ request, auth, response }) {
    const { email, password } = request.all()
    return auth.attempt(email, password)
  }

  async checkToken({ auth, response, request, params }) {
    try {
      return auth.check()
    } catch (error) {
      response.send('Missing or invalid api token')
    }
  }

  async generateUser({ request, auth, response, params }) {
    const user = await User.find(request.params.id)
    await auth.generate(user)
  }

  async getProfileApi({ response, auth }) {
    return response.send(auth.current.user)
  }

  async postLogoutApi({ auth, response }) {
    const apiToken = auth.getAuthHeader()
    await auth.revokeTokens([apiToken])
    return response.send({ message: 'Logout successfullt!' })
  }

  async postLogoutApiAll({ auth, response }) {
    await auth.revokeTokens()
    return response.send({ message: 'Logout successfully!' })
  }

}

module.exports = AuthController
