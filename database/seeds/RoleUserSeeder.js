"use strict";

/*
|--------------------------------------------------------------------------
| RoleUserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const RoleUser = use("App/Models/RoleUser");
const Factory = use("Factory");

class RoleUserSeeder {
  async run() {
    const role1 = new RoleUser();
    role1.nama = "Admin";
    await role1.save();

    const role2 = new RoleUser();
    role2.nama = "User";
    await role2.save();
  }
}

module.exports = RoleUserSeeder;
