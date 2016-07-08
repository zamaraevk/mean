var Bookshelf = require('bookshelf');
var path = require('path');

var db = require('knex')({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'your_database_user',
    password: 'password',
    database: 'shortlydb',
    charset: 'utf8',
    filename: path.join(__dirname, '../db/users.sqlite')
  }
});

db.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.schema.createTable('users', function (link) {
      link.increments('id').primary();
      link.string('firstName', 255);
      link.string('lastName', 255);
      link.integer('age', 10);
      link.string('occupation', 255);
      link.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});


var Bookshelf = require('bookshelf')(db);
module.exports = Bookshelf;
