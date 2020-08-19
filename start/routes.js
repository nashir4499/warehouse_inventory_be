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
Route.post('api/api/login', 'AuthController.postLoginApi').as('loginApi')
Route.post('api/api/signup', 'AuthController.signup').as('signupnApi')
Route.group(() => {

  //menggunakan API
  Route.post('api/api/logout', 'AuthController.postLogoutApi').as('logoutApi')
  Route.post('api/api/logoutAll', 'AuthController.postLogoutApiAll').as('logoutApiAll')
  Route.delete('api/api/deleteAllToken', 'AuthController.deleteAllToken').as('deleteAllToken')
  Route.get('api/api/profile', 'AuthController.getProfileApi').as('profileApi')
  Route.get('api/api/alluser', 'AuthController.getAllUser').as('allUserApi')
  Route.get('api/api/token', 'AuthController.getListToken').as('listTokenApi')
  Route.get('api/api/check', 'AuthController.checkToken').as('checkApi')
  Route.post('api/api/generateUser/:id', 'AuthController.generateUser').as('generateUser')
  Route.put('api/api/changepass', 'AuthController.changePassword').as('changePassword')

  //Route ke barang
  Route.get('/barang', 'BarangController.index')
  Route.post('/barang', 'BarangController.store')
  Route.get('/barang/:id', 'BarangController.show')
  Route.post('/barang/:id', 'BarangController.update')
  Route.delete('/barang/:id', 'BarangController.delete')

  //Route ke barang keluar
  Route.get('/bkeluar', 'BarangKeluarController.index')
  Route.get('/bkeluar/jumlah', 'BarangKeluarController.sumStock')
  Route.post('/bkeluar', 'BarangKeluarController.store')
  Route.get('/bkeluar/:id', 'BarangKeluarController.show')
  Route.post('/bkeluar/:id', 'BarangKeluarController.update')
  Route.delete('/bkeluar/:id', 'BarangKeluarController.delete')

  //Route ke barang masuk
  Route.get('/bmasuk', 'BarangMasukController.index')
  Route.get('/bmasuk/jumlah', 'BarangMasukController.sumStock')
  Route.post('/bmasuk', 'BarangMasukController.store')
  Route.get('/bmasuk/:id', 'BarangMasukController.show')
  Route.post('/bmasuk/:id', 'BarangMasukController.update')
  Route.delete('/bmasuk/:id', 'BarangMasukController.delete')

  //Route ke kategori
  Route.get('/kategori', 'KategoriController.index')
  Route.post('/kategori', 'KategoriController.store')
  Route.get('/kategori/:id', 'KategoriController.show')
  Route.post('/kategori/:id', 'KategoriController.update')
  Route.delete('/kategori/:id', 'KategoriController.delete')

  //Route ke rak
  Route.get('/rak', 'RakController.index')
  Route.get('/rak/jumlah', 'RakController.sumStock')
  Route.post('/rak', 'RakController.store')
  Route.get('/rak/:id', 'RakController.show')
  Route.post('/rak/:id', 'RakController.update')
  Route.delete('/rak/:id', 'RakController.delete')

  //Route ke rak terpakai
  Route.get('/rakterpakai', 'RakTerpakaiController.index')
  Route.get('/rakterpakai/jumlah', 'RakTerpakaiController.sumStock')
  Route.post('/rakterpakai', 'RakTerpakaiController.store')
  Route.get('/rakterpakai/:id', 'RakTerpakaiController.show')
  Route.post('/rakterpakai/:id', 'RakTerpakaiController.update')
  Route.delete('/rakterpakai/:id', 'RakTerpakaiController.delete')

  //Route ke role user
  Route.get('/role', 'RoleUserController.index')
  Route.post('/role', 'RoleUserController.store')
  Route.get('/role/:id', 'RoleUserController.show')
  Route.post('/role/:id', 'RoleUserController.update')
  Route.delete('/role/:id', 'RoleUserController.delete')

  //Route ke suplier
  Route.get('/suplier', 'SuplierController.index')
  Route.get('/suplier/jumlah', 'SuplierController.suplierCount')
  Route.post('/suplier', 'SuplierController.store')
  Route.get('/suplier/:id', 'SuplierController.show')
  Route.post('/suplier/:id', 'SuplierController.update')
  Route.delete('/suplier/:id', 'SuplierController.delete')
}).middleware(['auth'])




