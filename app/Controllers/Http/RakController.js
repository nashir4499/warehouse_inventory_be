'use strict'

const Rak = use("App/Models/Rak")

class RakController {
  async store({ request, response }) {
    const dataRak = request.only(['id', 'nama', 'stock_max'])
    const rakBaru = new Rak
    rakBaru.id = dataRak.id
    rakBaru.nama = dataRak.nama
    rakBaru.stock_max = dataRak.stock_max
    await rakBaru.save()

    return response.status(200).json({
      message: "Data Rak Berhasil Disimpan"
    })
  }

  async index({ request, response }) {
    const rak = await Rak.query().fetch()
    return response.status(200).json(rak)
  }

  async show({ request, response, params }) {
    const rak = await Rak.find(request.params.id)
    return response.status(200).json(rak)
  }

  async update({ request, response, params }) {
    const dataRak = request.only(['id', 'nama', 'stock_max'])
    const rak = await Rak.find(request.params.id)
    rak.id = dataRak.id
    rak.nama = dataRak.nama
    rak.stock_max = dataRak.stock_max

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

  async sumStock({ request, response }) {
    const stock_max = await Rak.query().getSum('stock_max')
    return response.status(200).json(stock_max)
  }
}

module.exports = RakController
