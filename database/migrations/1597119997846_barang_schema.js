'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarangSchema extends Schema {
  up() {
    this.create('barangs', (table) => {
      table.integer('series').primary()
      table.string('produk')
      table.integer('suplier_id')
      table.integer('kategori_id')
      table.integer('stock')
      table.text('deskripsi')
      table.timestamps()
    })
  }

  down() {
    this.drop('barangs')
  }
}

module.exports = BarangSchema