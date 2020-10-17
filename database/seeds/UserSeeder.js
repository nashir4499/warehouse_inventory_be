"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use("App/Models/User");
const Factory = use("Factory");

class UserSeeder {
  async run() {
    const u1 = new User();
    u1.username = "user1";
    u1.password = "pass-u1";
    u1.email = "u1@gmail.com";
    u1.role_user_id = 1;
    await u1.save();

    const u2 = new User();
    u2.username = "user2";
    u2.password = "pass-u2";
    u2.email = "u2@gmail.com";
    u2.role_user_id = 2;
    await u2.save();
  }
}

module.exports = UserSeeder;
