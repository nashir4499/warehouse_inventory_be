'use strict'

const Rak = use("App/Models/Rak")

class RakController {
  async store({ request, response }) {
    const dataRak = request.only(['id', 'stock_rak', 'min_stock', 'nama_rak', 'barang_id'])
    const rakBaru = new Rak
    rakBaru.id = dataRak.id
    rakBaru.stock_rak = dataRak.stock_rak
    rakBaru.min_stock = dataRak.min_stock
    rakBaru.nama_rak = dataRak.nama_rak
    rakBaru.barang_id = dataRak.barang_id

    await rakBaru.save()
    return response.status(200).json({
      message: "Data Rak Berhasil Disimpan"
    })
  }

  async index({ request, response }) {
    const rak = await Rak.query().with('barang').fetch()
    return response.status(200).json(rak)
  }

  async show({ request, response, params }) {
    const rak = await Rak.find(request.params.id)
    await rak.loadMany(['barang'])
    return response.status(200).json(rak)
  }

  async update({ request, response, params }) {
    const dataRak = request.only(['id', 'stock_rak', 'min_stock', 'nama_rak', 'barang_id'])
    const rak = await Rak.find(request.params.id)
    rak.id = dataRak.id
    rak.stock_rak = dataRak.stock_rak
    rak.min_stock = dataRak.min_stock
    rak.nama_rak = dataRak.nama_rak
    rak.barang_id = dataRak.barang_id

    await rak.save()

    return response.status(200).json(rak)
  }

  async delete({ request, response, params, session }) {
    const rak = await Rak.find(request.params.id)
    await rak.delete()

    return response.status(200).json({
      message: 'Data Rak Berhasil Dihapus'
    })
  }
}

module.exports = RakController
