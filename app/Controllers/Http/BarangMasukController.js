'use strict'

const BarangMasuk = use("App/Models/BarangMasuk")

class BarangMasukController {
  async store({ request, response }) {
    const dataBarangMasuk = request.only(['no_fakturbm', 'stock_bm', 'deskripsi', 'barang_series'])
    const barangMasukBaru = new BarangMasuk
    barangMasukBaru.no_fakturbm = dataBarangMasuk.no_fakturbm
    barangMasukBaru.stock_bm = dataBarangMasuk.stock_bm
    barangMasukBaru.deskripsi = dataBarangMasuk.deskripsi
    barangMasukBaru.barang_series = dataBarangMasuk.barang_series

    await barangMasukBaru.save()
    return response.status(200).json({
      message: "Data Barang Masuk Berhasil Disimpan"
    })
  }

  async index({ request, response }) {
    const barangMasuk = await BarangMasuk.query().with('barang').fetch()
    return response.status(200).json(barangMasuk)
  }

  async show({ request, response, params }) {
    const barangMasuk = await BarangMasuk.find(request.params.no_fakturbm)
    await barangMasuk.loadMany(['barang'])
    return response.status(200).json(barangMasuk)
  }

  async update({ request, response, params }) {
    const dataBarangMasuk = request.only(['no_fakturbm', 'stock_bm', 'deskripsi', 'barang_series'])
    const barangMasuk = await BarangMasuk.find(request.params.no_fakturbm)
    barangMasuk.no_fakturbm = dataBarangMasuk.no_fakturbm
    barangMasuk.stock_bm = dataBarangMasuk.stock_bm
    barangMasuk.deskripsi = dataBarangMasuk.deskripsi
    barangMasuk.barang_series = dataBarangMasuk.barang_series

    await barangMasuk.save()

    return response.status(200).json(barangMasuk)
  }

  async delete({ request, response, params, session }) {
    const barangMasuk = await BarangMasuk.find(request.params.no_fakturbm)
    await barangMasuk.delete()

    return response.status(200).json({
      message: 'Data Barang Masuk Berhasil Dihapus'
    })
  }
}

module.exports = BarangMasukController
