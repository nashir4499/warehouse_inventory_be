'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarangKeluarSchema extends Schema {
  up() {
    this.create('barang_keluars', (table) => {
      table.increments()
      table.integer('stock_bk')
      table.text('deskripsi')
      table.integer('barang_id')
      table.timestamps()
    })
  }

  down() {
    this.drop('barang_keluars')
  }
}

module.exports = BarangKeluarSchema
