"use strict";

const RakTerpakai = use("App/Models/RakTerpakai");

class RakTerpakaiController {
  async store({ request, response }) {
    const dataRakTerpakai = request.only([
      "stok",
      "volume_terpakai",
      "rak_id",
      "barang_id",
    ]);
    const rakTerpakaiBaru = new RakTerpakai();
    rakTerpakaiBaru.stok = dataRakTerpakai.stok;
    rakTerpakaiBaru.volume_terpakai = dataRakTerpakai.volume_terpakai;
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
    const dataRakTerpakai = request.only([
      "stok",
      "volume_terpakai",
      "rak_id",
      "barang_id",
    ]);
    const rakTerpakai = await RakTerpakai.find(request.params.id);
    rakTerpakai.stok = dataRakTerpakai.stok;
    rakTerpakai.volume_terpakai = dataRakTerpakai.volume_terpakai;
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

  async sumstok({ request, response }) {
    const stok = await RakTerpakai.query().getSum("stok");
    return response.status(200).json(stok);
  }

  async sumVolume({ request, response }) {
    const stok = await RakTerpakai.query().getSum("volume_terpakai");
    return response.status(200).json(stok);
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

  async sumOneBarang({ request, response }) {
    const rakTerpakai = await RakTerpakai.query()
      .where("barang_id", request.params.barang_id)
      .getSum("stok");
    return response.status(200).json(rakTerpakai);
  }

  async oneForAll({ request, response }) {
    const rakTerpakai = await RakTerpakai.query()
      .groupBy("barang_id")
      .with("barang")
      .fetch();
    return response.status(200).json(rakTerpakai);
  }
}

module.exports = RakTerpakaiController;
