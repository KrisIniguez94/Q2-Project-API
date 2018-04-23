module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/car_garage',
    seeds: {
      directory: '.seeds/development'
    }
  }
}
