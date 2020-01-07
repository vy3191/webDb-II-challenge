// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault:true,
    connection: {
      filename: './data/car-dealer.db3' // This file is the location of our DB
    }
  },

};

