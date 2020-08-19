'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarangMasukSchema extends Schema {
  up() {
    this.create('barang_masuks', (table) => {
      table.increments()
      table.integer('stock_bm')
      table.text('deskripsi')
      table.integer('barang_id')
      // table.string('suplier_id', 10)
      table.timestamps()
    })
  }

  down() {
    this.drop('barang_masuks')
  }
}

module.exports = BarangMasukSchema
