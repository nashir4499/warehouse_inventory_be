'use strict'

const Barang = use("App/Models/Barang")

class BarangController {
  async store({ request, response }) {
    const dataBarang = request.only(['series', 'produk', 'suplier_id', 'kategori_id', 'stock', 'deskripsi'])
    const barangBaru = new Barang
    barangBaru.series = dataBarang.series
    barangBaru.produk = dataBarang.produk
    barangBaru.suplier_id = dataBarang.suplier_id
    barangBaru.kategori_id = dataBarang.kategori_id
    barangBaru.stock = dataBarang.stock
    barangBaru.deskripsi = dataBarang.deskripsi

    await barangBaru.save()
    return response.status(200).json({
      message: "Data Barang Berhasil Disimpan"
    })
  }

  async index({ request, response }) {
    const barang = await Barang.query().with('suplier').with('kategori').fetch()
    return response.status(200).json(barang)
  }

  async show({ request, response, params }) {
    const barang = await Barang.find(request.params.series)
    await barang.loadMany(['suplier', 'kategori'])
    return response.status(200).json(barang)
  }

  async update({ request, response, params }) {
    const dataBarang = request.only(['series', 'produk', 'suplier_id', 'kategori_id', 'stock', 'deskripsi'])
    const barang = await Barang.find(request.params.series)
    barang.series = dataBarang.series
    barang.produk = dataBarang.produk
    barang.suplier_id = dataBarang.suplier_id
    barang.kategori_id = dataBarang.kategori_id
    barang.stock = dataBarang.stock
    barang.deskripsi = dataBarang.deskripsi
    await barang.save()

    return response.status(200).json(barang)
  }

  async delete({ request, response, params, session }) {
    const barang = await Barang.find(request.params.series)
    await barang.delete()

    return response.status(200).json({
      message: 'Data Barang Berhasil Dihapus'
    })
  }

}

module.exports = BarangController