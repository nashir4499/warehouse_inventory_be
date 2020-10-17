"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SuplierSchema extends Schema {
  up() {
    this.create("supliers", (table) => {
      table.string("id", 50).primary();
      table.text("alamat");
      table.string("no_tlp");
      table.text("deskripsi");
      table.timestamps();
    });
  }

  down() {
    this.drop("supliers");
  }
}

module.exports = SuplierSchema;
