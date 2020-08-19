'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RakTerpakai extends Model {
  barang() {
    return this.belongsTo('App/Models/Barang')
  }
  rak() {
    return this.belongsTo('App/Models/Rak')
  }
}

module.exports = RakTerpakai
