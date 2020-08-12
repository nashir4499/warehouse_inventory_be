'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BarangKeluar extends Model {
  barang() {
    return this.belongsTo('App/Models/Barang')
  }
}

module.exports = BarangKeluar
