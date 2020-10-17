"use strict";
const Suplier = use("App/Models/Suplier");

class SuplierController {
  async store({ request, response }) {
    const dataSuplier = request.only(["id", "alamat", "no_tlp", "deskripsi"]);
    const suplierBaru = new Suplier();
    suplierBaru.id = dataSuplier.id;
    suplierBaru.alamat = dataSuplier.alamat;
    suplierBaru.no_tlp = dataSuplier.no_tlp;
    suplierBaru.deskripsi = dataSuplier.deskripsi;
    await suplierBaru.save();

    return response.status(200).json({
      message: "Role User Berhasil Disimpan",
    });
  }

  async index({ request, response }) {
    const suplier = await Suplier.all();
    return response.status(200).json(suplier);
  }

  async show({ request, response, params }) {
    const suplier = await Suplier.find(request.params.id);
    return response.status(200).json(suplier);
  }

  async update({ request, response, params }) {
    const dataSuplier = request.only(["id", "alamat", "no_tlp", "deskripsi"]);
    const suplier = await Suplier.find(request.params.id);
    suplier.id = dataSuplier.id;
    suplier.alamat = dataSuplier.alamat;
    suplier.no_tlp = dataSuplier.no_tlp;
    suplier.deskripsi = dataSuplier.deskripsi;
    await suplier.save();

    return response.status(200).json(suplier);
  }

  async delete({ request, response, params, session }) {
    const suplier = await Suplier.find(request.params.id);
    await suplier.delete();

    return response.status(200).json({
      message: "Role User Berhasil Dihapus",
    });
  }

  async suplierCount({ request, response }) {
    const suplier = await Suplier.query().getCount();
    return response.status(200).json(suplier);
  }
}

module.exports = SuplierController;
