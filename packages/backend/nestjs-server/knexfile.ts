require('dotenv').config();
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.USER,
      password : process.env.PW,
      database : 'jolt_training'
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' }
  },

  testing: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.USER,
      password : process.env.PW,
      database : 'jolt_training'
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' }
  },

  production: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.USER,
      password : process.env.PW,
      database : 'jolt_training'
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' }
  }
};
