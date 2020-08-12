'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RakSchema extends Schema {
  up() {
    this.create('raks', (table) => {
      table.integer('rak_id').primary()
      table.integer('stock_rak')
      table.integer('min_stock')
      table.string('nama_rak')
      table.integer('barang_series')
      table.timestamps()
    })
  }

  down() {
    this.drop('raks')
  }
}

module.exports = RakSchema