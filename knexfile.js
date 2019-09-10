// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: './data/migrations'
    }
  },
};

// to create a migration
//    knex migrate:make
// to run all pending migrations
//    knex migrate:latest