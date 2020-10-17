"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BarangSchema extends Schema {
  up() {
    this.create("barangs", (table) => {
      table.string("id").primary();
      table.string("produk");
      table.string("suplier_id", 50);
      table.integer("kategori_id");
      table.integer("stok");
      table.integer("volume_barang");
      table.integer("panjang");
      table.integer("lebar");
      table.integer("tinggi");
      table.text("deskripsi");
      table.timestamps();
    });
  }

  down() {
    this.drop("barangs");
  }
}

module.exports = BarangSchema;
