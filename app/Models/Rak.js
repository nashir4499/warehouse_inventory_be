'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Rak extends Model {
  barang() {
    return this.belongsTo('App/Models/Barang')
  }
}

module.exports = Rak
