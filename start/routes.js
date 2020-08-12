'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index')


Route.get('login', 'AuthController.getLogin').as('login')
//menggunakan API
Route.post('api/api/login', 'AuthController.postLoginApi').as('loginApi')
Route.post('api/api/logout', 'AuthController.postLogoutApi').as('logoutApi').middleware(['auth'])
Route.post('api/api/logoutAll', 'AuthController.postLogoutApiAll').as('logoutApiAll').middleware(['auth'])
Route.get('api/api/profile', 'AuthController.getProfileApi').as('profileApi').middleware(['auth'])
Route.get('api/api/check', 'AuthController.checkToken').as('checkApi').middleware(['auth'])
Route.post('api/api/generateUser/:id', 'AuthController.generateUser').as('generateUser').middleware(['auth'])

//Route ke barang
Route.get('/barang', 'BarangController.index')
Route.post('/barang', 'BarangController.store')
Route.get('/barang/:series', 'BarangController.show')
Route.post('/barang/:series', 'BarangController.update')
Route.delete('/barang/:series', 'BarangController.delete')

//Route ke barang keluar
Route.get('/barang/keluar', 'BarangKeluarController.index')
Route.post('/barang/keluar', 'BarangKeluarController.store')
Route.get('/barang/keluar/:no_fakturbk', 'BarangKeluarController.show')
Route.post('/barang/keluar/:no_fakturbk', 'BarangKeluarController.update')
Route.delete('/barang/keluar/:no_fakturbk', 'BarangKeluarController.delete')

//Route ke barang masuk
Route.get('/barang/masuk', 'BarangMasukController.index')
Route.post('/barang/masuk', 'BarangMasukController.store')
Route.get('/barang/masuk/:no_fakturbm', 'BarangMasukController.show')
Route.post('/barang/masuk/:no_fakturbm', 'BarangMasukController.update')
Route.delete('/barang/masuk/:no_fakturbm', 'BarangMasukController.delete')

//Route ke kategori
Route.get('/kategori', 'KategoriController.index')
Route.post('/kategori', 'KategoriController.store')
Route.get('/kategori/:id', 'KategoriController.show')
Route.post('/kategori/:id', 'KategoriController.update')
Route.delete('/kategori/:id', 'KategoriController.delete')

//Route ke rak
Route.get('/rak', 'RakController.index')
Route.post('/rak', 'RakController.store')
Route.get('/rak/:rak_id', 'RakController.show')
Route.post('/rak/:rak_id', 'RakController.update')
Route.delete('/rak/:rak_id', 'RakController.delete')

//Route ke role user
Route.get('/role', 'RoleUserController.index')
Route.post('/role', 'RoleUserController.store')
Route.get('/role/:id', 'RoleUserController.show')
Route.post('/role/:id', 'RoleUserController.update')
Route.delete('/role/:id', 'RoleUserController.delete')

//Route ke suplier
Route.get('/suplier', 'SuplierController.index')
Route.post('/suplier', 'SuplierController.store')
Route.get('/suplier/:suplier_id', 'SuplierController.show')
Route.post('/suplier/:suplier_id', 'SuplierController.update')
Route.delete('/suplier/:suplier_id', 'SuplierController.delete')




