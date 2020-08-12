'use strict'

const BarangKeluar = use("App/Models/BarangKeluar")

class BarangKeluarController {
  async store({ request, response }) {
    const dataBarangKeluar = request.only(['no_fakturbk', 'stock_bk', 'deskripsi', 'barang_series'])
    const barangKeluarBaru = new BarangKeluar
    barangKeluarBaru.no_fakturbk = dataBarangKeluar.no_fakturbk
    barangKeluarBaru.stock_bk = dataBarangKeluar.stock_bk
    barangKeluarBaru.deskripsi = dataBarangKeluar.deskripsi
    barangKeluarBaru.barang_series = dataBarangKeluar.barang_series

    await barangKeluarBaru.save()
    return response.status(200).json({
      message: "Data Barang Keluar Berhasil Disimpan"
    })
  }

  async index({ request, response }) {
    const barangKeluar = await BarangKeluar.query().with('barang').fetch()
    return response.status(200).json(barangKeluar)
  }

  async show({ request, response, params }) {
    const barangKeluar = await BarangKeluar.find(request.params.no_fakturbk)
    await barangKeluar.loadMany(['barang'])
    return response.status(200).json(barangKeluar)
  }

  async update({ request, response, params }) {
    const dataBarangKeluar = request.only(['no_fakturbk', 'stock_bk', 'deskripsi', 'barang_series'])
    const barangKeluar = await BarangKeluar.find(request.params.no_fakturbk)
    barangKeluar.no_fakturbk = dataBarangKeluar.no_fakturbk
    barangKeluar.stock_bk = dataBarangKeluar.stock_bk
    barangKeluar.deskripsi = dataBarangKeluar.deskripsi
    barangKeluar.barang_series = dataBarangKeluar.barang_series

    await barangKeluar.save()

    return response.status(200).json(barangKeluar)
  }

  async delete({ request, response, params, session }) {
    const barangKeluar = await BarangKeluar.find(request.params.no_fakturbk)
    await barangKeluar.delete()

    return response.status(200).json({
      message: 'Data Barang Keluar Berhasil Dihapus'
    })
  }
}

module.exports = BarangKeluarController
