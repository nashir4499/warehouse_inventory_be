"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RakSchema extends Schema {
  up() {
    this.create("raks", (table) => {
      table.string("id").primary();
      table.string("nama");
      // table.integer("stok_maks");
      table.integer("volume_rak");
      table.integer("panjang");
      table.integer("lebar");
      table.integer("tinggi");
      table.timestamps();
    });
  }

  down() {
    this.drop("raks");
  }
}

module.exports = RakSchema;
