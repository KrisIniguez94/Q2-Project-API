const knex = require('../database');

const readAll = () => {
  return knex('cars')
  .then(rows => rows)
  .catch(error => {console.error(error);})
};

const readOne = car_id => {
  return knex('cars').where('id', car_id)
  .then(rows => rows[0])
  .catch(error => {console.error(error); })
}

const create = ({title, content}) => {
  return knex('cars')
  .returning('*')
  .insert({title, content})
  .then(row => row[0])
  .catch(error => {console.error(error);})
}

const update = (car_id, updates) => {
  return knex('cars')
  .returnng('*')
  .update({updates, updated_at: new Date(Date.now()).toISOString()})
  .where('id', blogpost_id)
  .then(row =>[0])
  .catch(error => {console.error(error);})
}

const destroy = car_id => {
  return knex('cars')
  .returning('*')
  .del()
  .where('id', car_id)
  .then(row => row[0])
  .catch(error => {console.error(error);})
}

module.exports = {
  readAll,
  readOne,
  create,
  update,
  destroy
}
