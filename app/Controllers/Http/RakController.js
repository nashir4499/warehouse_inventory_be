"use strict";

const Rak = use("App/Models/Rak");

class RakController {
  async store({ request, response }) {
    const dataRak = request.only([
      "id",
      "nama",
      "volume_rak",
      "panjang",
      "lebar",
      "tinggi",
    ]);
    const rakBaru = new Rak();
    rakBaru.id = dataRak.id;
    rakBaru.nama = dataRak.nama;
    rakBaru.volume_rak = dataRak.volume_rak;
    rakBaru.panjang = dataRak.panjang;
    rakBaru.lebar = dataRak.lebar;
    rakBaru.tinggi = dataRak.tinggi;
    await rakBaru.save();

    return response.status(200).json({
      message: "Data Rak Berhasil Disimpan",
    });
  }

  async index({ request, response }) {
    const rak = await Rak.query().fetch();
    return response.status(200).json(rak);
  }

  async show({ request, response, params }) {
    const rak = await Rak.find(request.params.id);
    return response.status(200).json(rak);
  }

  async update({ request, response, params }) {
    const dataRak = request.only([
      "id",
      "nama",
      "volume_rak",
      "panjang",
      "lebar",
      "tinggi",
    ]);
    const rak = await Rak.find(request.params.id);
    rak.id = dataRak.id;
    rak.nama = dataRak.nama;
    rak.volume_rak = dataRak.volume_rak;
    rak.panjang = dataRak.panjang;
    rak.lebar = dataRak.lebar;
    rak.tinggi = dataRak.tinggi;

    await rak.save();

    return response.status(200).json(rak);
  }

  async delete({ request, response, params, session }) {
    const rak = await Rak.find(request.params.id);
    await rak.delete();

    return response.status(200).json({
      message: "Data Rak Berhasil Dihapus",
    });
  }

  async sumstok({ request, response }) {
    const volume_rak = await Rak.query().getSum("volume_rak");
    return response.status(200).json(volume_rak);
  }
}

module.exports = RakController;
