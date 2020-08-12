'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarangKeluarSchema extends Schema {
  up() {
    this.create('barang_keluars', (table) => {
      table.string('no_fakturbk').primary()
      table.integer('stock_bk')
      table.text('deskripsi')
      table.integer('barang_series')
      table.timestamps()
    })
  }

  down() {
    this.drop('barang_keluars')
  }
}

module.exports = BarangKeluarSchema
