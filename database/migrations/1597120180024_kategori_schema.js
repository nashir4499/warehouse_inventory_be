'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class KategoriSchema extends Schema {
  up() {
    this.create('kategoris', (table) => {
      table.increments()
      table.string('nama')
      table.timestamps()
    })
  }

  down() {
    this.drop('kategoris')
  }
}

module.exports = KategoriSchema
