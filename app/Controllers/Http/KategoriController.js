'use strict'

const Kategori = use("App/Models/Kategori")

class KategoriController {
  async store({ request, response }) {
    const dataKategori = request.only(['nama'])
    const kategoriBaru = new Kategori
    kategoriBaru.nama = dataKategori.nama
    await kategoriBaru.save()

    return response.status(200).json({
      message: 'Data Kategori Berhasil Disimpan'
    })
  }

  async index({ request, response }) {
    const kategori = await Kategori.all()
    return response.status(200).json(kategori)
  }

  async show({ request, response, params }) {
    const kategori = await Kategori.find(request.params.id)
    return response.status(200).json(kategori)
  }

  async update({ request, response, params }) {
    const dataKategori = request.only(['nama'])
    const kategori = await Kategori.find(request.params.id)
    kategori.nama = dataKategori.nama
    await kategori.save()

    return response.status(200).json(kategori)
  }

  async delete({ request, response, params, session }) {
    const kategori = await Kategori.find(request.params.id)
    await kategori.delete()

    return response.status(200).json({
      message: 'Data Berhasil Dihapus'
    })
  }

}

module.exports = KategoriController
