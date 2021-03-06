"use strict";

const BarangKeluar = use("App/Models/BarangKeluar");

class BarangKeluarController {
  async store({ request, response }) {
    const dataBarangKeluar = request.only([
      "stok_bk",
      "deskripsi",
      "barang_id",
    ]);
    const barangKeluarBaru = new BarangKeluar();
    barangKeluarBaru.stok_bk = dataBarangKeluar.stok_bk;
    barangKeluarBaru.deskripsi = dataBarangKeluar.deskripsi;
    barangKeluarBaru.barang_id = dataBarangKeluar.barang_id;

    await barangKeluarBaru.save();
    return response.status(200).json({
      message: "Data Barang Keluar Berhasil Disimpan",
    });
  }

  async index({ request, response }) {
    const barangKeluar = await BarangKeluar.query().with("barang").fetch();
    return response.status(200).json(barangKeluar);
  }

  async show({ request, response, params }) {
    const barangKeluar = await BarangKeluar.find(request.params.id);
    await barangKeluar.loadMany(["barang"]);
    return response.status(200).json(barangKeluar);
  }

  async update({ request, response, params }) {
    const dataBarangKeluar = request.only([
      "stok_bk",
      "deskripsi",
      "barang_id",
    ]);
    const barangKeluar = await BarangKeluar.find(request.params.id);
    barangKeluar.stok_bk = dataBarangKeluar.stok_bk;
    barangKeluar.deskripsi = dataBarangKeluar.deskripsi;
    barangKeluar.barang_id = dataBarangKeluar.barang_id;

    await barangKeluar.save();

    return response.status(200).json(barangKeluar);
  }

  async delete({ request, response, params, session }) {
    const barangKeluar = await BarangKeluar.find(request.params.id);
    await barangKeluar.delete();

    return response.status(200).json({
      message: "Data Barang Keluar Berhasil Dihapus",
    });
  }

  async sumstok({ request, response }) {
    const stok_bk = await BarangKeluar.query().getSum("stok_bk");
    return response.status(200).json(stok_bk);
  }

  async sumOneBarang({ request, response }) {
    const barangKeluar = await BarangKeluar.query()
      .where("barang_id", request.params.barang_id)
      .getSum("stok_bk");
    return response.status(200).json(barangKeluar);
  }
}

module.exports = BarangKeluarController;
