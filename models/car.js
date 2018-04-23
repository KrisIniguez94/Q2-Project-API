const knex = require('../database');

const readAll = () => {
  return knex('cars')
  .then(rows => rows)
  .catch(error => {console.error(error);})
}

const readOne = car_id => {
  return knex('cars')
}


module.exports = {
  readAll,
  readOne,
  create,
  update,
  destroy
}
