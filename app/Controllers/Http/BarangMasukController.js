"use strict";

const BarangMasuk = use("App/Models/BarangMasuk");

class BarangMasukController {
  async store({ request, response }) {
    const dataBarangMasuk = request.only(["stok_bm", "deskripsi", "barang_id"]);
    const barangMasukBaru = new BarangMasuk();
    barangMasukBaru.stok_bm = dataBarangMasuk.stok_bm;
    barangMasukBaru.deskripsi = dataBarangMasuk.deskripsi;
    barangMasukBaru.barang_id = dataBarangMasuk.barang_id;

    await barangMasukBaru.save();
    return response.status(200).json({
      message: "Data Barang Masuk Berhasil Disimpan",
    });
  }

  async index({ request, response }) {
    const barangMasuk = await BarangMasuk.query().with("barang").fetch();
    return response.status(200).json(barangMasuk);
  }

  async show({ request, response, params }) {
    const barangMasuk = await BarangMasuk.find(request.params.id);
    await barangMasuk.loadMany(["barang"]);
    return response.status(200).json(barangMasuk);
  }

  async update({ request, response, params }) {
    const dataBarangMasuk = request.only(["stok_bm", "deskripsi", "barang_id"]);
    const barangMasuk = await BarangMasuk.find(request.params.id);
    barangMasuk.stok_bm = dataBarangMasuk.stok_bm;
    barangMasuk.deskripsi = dataBarangMasuk.deskripsi;
    barangMasuk.barang_id = dataBarangMasuk.barang_id;

    await barangMasuk.save();

    return response.status(200).json(barangMasuk);
  }

  async delete({ request, response, params, session }) {
    const barangMasuk = await BarangMasuk.find(request.params.id);
    await barangMasuk.delete();

    return response.status(200).json({
      message: "Data Barang Masuk Berhasil Dihapus",
    });
  }

  async sumstok({ request, response }) {
    const stok_bm = await BarangMasuk.query().getSum("stok_bm");
    return response.status(200).json(stok_bm);
  }

  async sumOneBarang({ request, response }) {
    const barangMasuk = await BarangMasuk.query()
      .where("barang_id", request.params.barang_id)
      .getSum("stok_bm");
    return response.status(200).json(barangMasuk);
  }
  async oneForAll({ request, response }) {
    const barangMasuk = await BarangMasuk.query()
      .groupBy("barang_id")
      .with("barang")
      .fetch();
    return response.status(200).json(barangMasuk);
  }
}

module.exports = BarangMasukController;
