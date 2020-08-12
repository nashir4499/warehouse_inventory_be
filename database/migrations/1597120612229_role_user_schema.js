'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoleUserSchema extends Schema {
  up() {
    this.create('role_users', (table) => {
      table.increments()
      table.string('nama')
      table.timestamps()
    })
  }

  down() {
    this.drop('role_users')
  }
}

module.exports = RoleUserSchema
