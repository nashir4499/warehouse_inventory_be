'use strict'
const Suplier = use("App/Models/Suplier")

class SuplierController {
  async store({ request, response }) {
    const dataSuplier = request.only(['suplier_id', 'alamat', 'phone', 'deskripsi'])
    const suplierBaru = new Suplier
    suplierBaru.suplier_id = dataSuplier.suplier_id
    suplierBaru.alamat = dataSuplier.alamat
    suplierBaru.phone = dataSuplier.phone
    suplierBaru.deskripsi = dataSuplier.deskripsi
    await suplierBaru.save()

    return response.status(200).json({
      message: 'Role User Berhasil Disimpan'
    })
  }

  async index({ request, response }) {
    const suplier = await Suplier.all()
    return response.status(200).json(suplier)
  }

  async show({ request, response, params }) {
    const suplier = await Suplier.find(request.params.suplier_id)
    return response.status(200).json(suplier)
  }

  async update({ request, response, params }) {
    const dataSuplier = request.only(['suplier_id', 'alamat', 'phone', 'deskripsi'])
    const suplier = await Suplier.find(request.params.suplier_id)
    suplier.suplier_id = dataSuplier.suplier_id
    suplier.alamat = dataSuplier.alamat
    suplier.phone = dataSuplier.phone
    suplier.deskripsi = dataSuplier.deskripsi
    await suplier.save()

    return response.status(200).json(suplier)
  }

  async delete({ request, response, params, session }) {
    const suplier = await Suplier.find(request.params.suplier_id)
    await suplier.delete()

    return response.status(200).json({
      message: 'Role User Berhasil Dihapus'
    })
  }
}

module.exports = SuplierController
