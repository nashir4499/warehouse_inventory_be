"use strict";

const Barang = use("App/Models/Barang");

class BarangController {
  async store({ request, response }) {
    const dataBarang = request.only([
      "id",
      "produk",
      "suplier_id",
      "kategori_id",
      "stok",
      "volume_barang",
      "panjang",
      "lebar",
      "tinggi",
      "deskripsi",
    ]);
    const barangBaru = new Barang();
    barangBaru.id = dataBarang.id;
    barangBaru.produk = dataBarang.produk;
    barangBaru.suplier_id = dataBarang.suplier_id;
    barangBaru.kategori_id = dataBarang.kategori_id;
    barangBaru.stok = dataBarang.stok;
    barangBaru.volume_barang = dataBarang.volume_barang;
    barangBaru.panjang = dataBarang.panjang;
    barangBaru.lebar = dataBarang.lebar;
    barangBaru.tinggi = dataBarang.tinggi;
    barangBaru.deskripsi = dataBarang.deskripsi;

    await barangBaru.save();
    return response.status(200).json({
      message: "Data Barang Berhasil Disimpan",
    });
  }

  async index({ request, response }) {
    const barang = await Barang.query()
      .with("suplier")
      .with("kategori")
      .fetch();
    return response.status(200).json(barang);
  }

  async show({ request, response, params }) {
    const barang = await Barang.find(request.params.id);
    await barang.loadMany(["suplier", "kategori"]);
    return response.status(200).json(barang);
  }

  async update({ request, response, params }) {
    const dataBarang = request.only([
      "id",
      "produk",
      "suplier_id",
      "kategori_id",
      "stok",
      "volume_barang",
      "panjang",
      "lebar",
      "tinggi",
      "deskripsi",
    ]);
    const barang = await Barang.find(request.params.id);
    barang.id = dataBarang.id;
    barang.produk = dataBarang.produk;
    barang.suplier_id = dataBarang.suplier_id;
    barang.kategori_id = dataBarang.kategori_id;
    barang.stok = dataBarang.stok;
    barang.volume_barang = dataBarang.volume_barang;
    barang.panjang = dataBarang.panjang;
    barang.lebar = dataBarang.lebar;
    barang.tinggi = dataBarang.tinggi;
    barang.deskripsi = dataBarang.deskripsi;

    await barang.save();

    return response.status(200).json(barang);
  }

  async delete({ request, response, params, session }) {
    const barang = await Barang.find(request.params.id);
    await barang.delete();

    return response.status(200).json({
      message: "Data Barang Berhasil Dihapus",
    });
  }
}

module.exports = BarangController;
