"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BarangMasukSchema extends Schema {
  up() {
    this.create("barang_masuks", (table) => {
      table.increments();
      table.integer("stok_bm");
      table.text("deskripsi");
      table.string("barang_id");
      // ada perubahan di bawah
      // table.date("tgl_kadaluarsa");
      // table.string('suplier_id', 10)
      table.timestamps();
    });
  }

  down() {
    this.drop("barang_masuks");
  }
}

module.exports = BarangMasukSchema;
