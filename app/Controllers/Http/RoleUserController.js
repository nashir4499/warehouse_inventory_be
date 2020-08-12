'use strict'
const RoleUser = use("App/Models/RoleUser")

class RoleUserController {
  async store({ request, response }) {
    const dataRoleUser = request.only(['nama'])
    const roleUserBaru = new RoleUser
    roleUserBaru.nama = dataRoleUser.nama
    await roleUserBaru.save()

    return response.status(200).json({
      message: 'Role User Berhasil Disimpan'
    })
  }

  async index({ request, response }) {
    const roleUser = await RoleUser.all()
    return response.status(200).json(roleUser)
  }

  async show({ request, response, params }) {
    const roleUser = await RoleUser.find(request.params.id)
    return response.status(200).json(roleUser)
  }

  async update({ request, response, params }) {
    const dataRoleUser = request.only(['nama'])
    const roleUser = await RoleUser.find(request.params.id)
    roleUser.nama = dataRoleUser.nama
    await roleUser.save()

    return response.status(200).json(roleUser)
  }

  async delete({ request, response, params, session }) {
    const roleUser = await RoleUser.find(request.params.id)
    await roleUser.delete()

    return response.status(200).json({
      message: 'Role User Berhasil Dihapus'
    })
  }
}

module.exports = RoleUserController
