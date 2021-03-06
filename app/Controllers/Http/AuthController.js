'use strict'
const Token = use('App/Models/Token')
const User = use('App/Models/User')
const Hash = use('Hash')
const Helpers = use('Helpers');


class AuthController {

  async getLogin({ view }) {
    return view.render('login')
  }


  async signup({ request, auth, response }) {
    const userData = request.only(['username', 'email', 'password', 'role_user_id'])
    try {
      // save user to database
      const user = await User.create(userData)
      // await User.create(userData)
      // generate JWT token for user
      const token = await auth.generate(user)

      return response.json({
        status: 'success',
        data: token
      })
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: 'User Telah Terdaftar'
      })
    }
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
  async getAllUser({ response, auth }) {
    const user = await User.query().setHidden(['password']).with('role').fetch()
    return response.send(user)
  }
  async getListToken({ response, auth }) {
    const token = await Token.query().with('user').fetch()
    return response.send(token)
  }


  async changePassword({ request, auth, response }) {
    //Dapatkan dulu user yang udah auth
    const user = auth.current.user

    //verifikasi password
    const verifyPassword = await Hash.verify(
      request.input('password'),
      user.password
    )

    if (!verifyPassword) {
      return response.status(400).json({
        status: 'error',
        message: 'Current password could not be verified! Please try again.'
      })
    }

    user.password = request.input('newPassword')
    await user.save()

    return response.json({
      status: 'success',
      message: 'Password update'
    })

  }


  async uploadFoto({request, auth, response}){
    const user = auth.current.user

    const profilePic = request.file('profile_pic', {
      types: ['image'],
      size: '2mb'
    })

    await profilePic.move(Helpers.tmpPath('uploads'), {
      name: `fotoUser${user.id}.jpg`,
      overwrite: true
    })

    user.foto = `fotoUser${user.id}.jpg`;
    await user.save();

    if (!profilePic.moved()) {
      return profilePic.error()
    }
    return 'File moved'
  }

  async fotoProfile({request, auth, response}){
    const user = auth.current.user

    try {
      const user = request.params.id
      // return user
      const path = Helpers.tmpPath(
        // `uploads/factions/${request.input('imageName')}`
        `uploads/fotoUser${user}.jpg`
        // `uploads/fotoUser1.jpg`
      )

      return response.download(path)
    } catch (error) {
      const user = request.params.id
      // return user
      const path = Helpers.tmpPath(
        // `uploads/factions/${request.input('imageName')}`
        `uploads/fotoUserdefault.jpg`
        // `uploads/fotoUser1.jpg`
      )

      return response.download(path)
    }
  }


  async postLogoutApi({ auth, response }) {
    const apiToken = auth.getAuthHeader()
    await auth.revokeTokens([apiToken])
    return response.send({ message: 'Logout successfully!' })
  }

  async postLogoutApiAll({ auth, response }) {
    await auth
      .authenticator('api')
      .revokeTokens()
    return response.send({ message: 'Logout successfully!' })
  }
  async deleteAllToken({ auth, response }) {
    await Token.query().delete()
    return response.send({ message: 'Logout successfully!' })
  }

}

module.exports = AuthController
