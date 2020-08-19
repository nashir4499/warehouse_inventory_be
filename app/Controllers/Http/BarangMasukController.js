'use strict'

const BarangMasuk = use("App/Models/BarangMasuk")

class BarangMasukController {
  async store({ request, response }) {
    const dataBarangMasuk = request.only(['stock_bm', 'deskripsi', 'barang_id'])
    const barangMasukBaru = new BarangMasuk
    barangMasukBaru.stock_bm = dataBarangMasuk.stock_bm
    barangMasukBaru.deskripsi = dataBarangMasuk.deskripsi
    barangMasukBaru.barang_id = dataBarangMasuk.barang_id

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
    const barangMasuk = await BarangMasuk.find(request.params.id)
    await barangMasuk.loadMany(['barang'])
    return response.status(200).json(barangMasuk)
  }

  async update({ request, response, params }) {
    const dataBarangMasuk = request.only(['stock_bm', 'deskripsi', 'barang_id'])
    const barangMasuk = await BarangMasuk.find(request.params.id)
    barangMasuk.stock_bm = dataBarangMasuk.stock_bm
    barangMasuk.deskripsi = dataBarangMasuk.deskripsi
    barangMasuk.barang_id = dataBarangMasuk.barang_id

    await barangMasuk.save()

    return response.status(200).json(barangMasuk)
  }

  async delete({ request, response, params, session }) {
    const barangMasuk = await BarangMasuk.find(request.params.id)
    await barangMasuk.delete()

    return response.status(200).json({
      message: 'Data Barang Masuk Berhasil Dihapus'
    })
  }

  async sumStock({ request, response }) {
    const stock_bm = await BarangMasuk.query().getSum('stock_bm')
    return response.status(200).json(stock_bm)
  }
}

module.exports = BarangMasukController
