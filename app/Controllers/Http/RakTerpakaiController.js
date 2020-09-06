"use strict";

const RakTerpakai = use("App/Models/RakTerpakai");

class RakTerpakaiController {
  async store({ request, response }) {
    const dataRakTerpakai = request.only(["stock", "rak_id", "barang_id"]);
    const rakTerpakaiBaru = new RakTerpakai();
    rakTerpakaiBaru.stock = dataRakTerpakai.stock;
    rakTerpakaiBaru.rak_id = dataRakTerpakai.rak_id;
    rakTerpakaiBaru.barang_id = dataRakTerpakai.barang_id;
    await rakTerpakaiBaru.save();

    return response.status(200).json({
      message: "Data berhasil disimpan",
    });
  }

  async index({ request, response }) {
    const rakTerpakai = await RakTerpakai.query()
      .with("rak")
      .with("barang")
      .fetch();
    return response.status(200).json(rakTerpakai);
  }

  async show({ request, response, params }) {
    const rakTerpakai = await RakTerpakai.find(request.params.id);
    await rakTerpakai.loadMany(["rak", "barang"]);
    return response.status(200).json(rakTerpakai);
  }

  async update({ request, response, params }) {
    const dataRakTerpakai = request.only(["stock", "rak_id", "barang_id"]);
    const rakTerpakai = await RakTerpakai.find(request.params.id);
    rakTerpakai.stock = dataRakTerpakai.stock;
    rakTerpakai.rak_id = dataRakTerpakai.rak_id;
    rakTerpakai.barang_id = dataRakTerpakai.barang_id;
    rakTerpakai.anggota_id = dataRakTerpakai.anggota_id;
    await rakTerpakai.save();

    return response.status(200).json(rakTerpakai);
  }

  async delete({ request, response, params, session }) {
    const rakTerpakai = await RakTerpakai.find(request.params.id);
    await rakTerpakai.delete();

    return response.status(200).json({
      message: "Data berhasil dihapus",
    });
  }

  async sumStock({ request, response }) {
    const stock = await RakTerpakai.query().getSum("stock");
    return response.status(200).json(stock);
  }

  async getByBarAndRak({ request, response }) {
    const rakTerpakai = await RakTerpakai.query()
      .where("rak_id", request.params.rak_id)
      .andWhere("barang_id", request.params.barang_id)
      .with("rak")
      .with("barang")
      .fetch();
    return response.status(200).json(rakTerpakai);
  }
}

module.exports = RakTerpakaiController;
