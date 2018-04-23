const carModel = require('../models/car');

const readAll = (request, response) => {
  carModel.readAll()
  .then(result => {
    response.json(result);
  })
  .catch(error => {console.error(error);})
}

const readOne = (request, response) => {
  carModel.readAll(request. params.car_id)
  .then(result => {response.json(result);})
  .catch(error => {console.error(error);})
}

const create = (request, response) => {
  carModel.create(request.body)
  .then( result => {response.json(result);})
  .catch(error => {console.error(error);})
}

const update = (request, response) => {
  carModel.update(request.params.car_id, request.body)
  .then(result =>{respone.json(result);})
  .catch(error => {console.error(error);})
}

const destroy = (request, response) => {
  carModel.destroy(request.params.car_id)
  .then(result => {response.json(result);})
  .catch(error => {console.error(error);})
}

module.exports = {
  readAll,
  readOne,
  create,
  update,
  destroy
}
