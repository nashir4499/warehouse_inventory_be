'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SuplierSchema extends Schema {
  up() {
    this.create('supliers', (table) => {
      table.string('suplier_id', 10).primary()
      table.text('alamat')
      table.string('phone')
      table.text('deskripsi')
      table.timestamps()
    })
  }

  down() {
    this.drop('supliers')
  }
}

module.exports = SuplierSchema
