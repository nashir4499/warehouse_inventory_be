'use strict'

const Rak = use("App/Models/Rak")

class RakController {
  async store({ request, response }) {
    const dataRak = request.only(['rak_id', 'stock_rak', 'min_stock', 'nama_rak', 'barang_series'])
    const rakBaru = new Rak
    rakBaru.rak_id = dataRak.rak_id
    rakBaru.stock_bk = dataRak.stock_bk
    rakBaru.min_stock = dataRak.min_stock
    rakBaru.nama_rak = dataRak.nama_rak
    rakBaru.barang_series = dataRak.barang_series

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
    const rak = await Rak.find(request.params.rak_id)
    await rak.loadMany(['barang'])
    return response.status(200).json(rak)
  }

  async update({ request, response, params }) {
    const dataRak = request.only(['rak_id', 'stock_rak', 'min_stock', 'nama_rak', 'barang_series'])
    const rak = await Rak.find(request.params.rak_id)
    rak.rak_id = dataRak.rak_id
    rak.stock_bk = dataRak.stock_bk
    rak.min_stock = dataRak.min_stock
    rak.nama_rak = dataRak.nama_rak
    rak.barang_series = dataRak.barang_series

    await rak.save()

    return response.status(200).json(rak)
  }

  async delete({ request, response, params, session }) {
    const rak = await Rak.find(request.params.rak_id)
    await rak.delete()

    return response.status(200).json({
      message: 'Data Rak Berhasil Dihapus'
    })
  }
}

module.exports = RakController
