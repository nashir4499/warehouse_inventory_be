'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Barang extends Model {
  kategori() {
    return this.belongsTo('App/Models/Kategori')
  }
  suplier() {
    return this.belongsTo('App/Models/Suplier')
  }
}

module.exports = Barang
