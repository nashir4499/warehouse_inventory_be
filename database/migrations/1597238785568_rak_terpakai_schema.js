"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RakTerpakaiSchema extends Schema {
  up() {
    this.create("rak_terpakais", (table) => {
      table.increments();
      table.integer("stok");
      table.integer("volume_terpakai");
      table.string("rak_id");
      table.string("barang_id");
      table.timestamps();
    });
  }

  down() {
    this.drop("rak_terpakais");
  }
}

module.exports = RakTerpakaiSchema;
