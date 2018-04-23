const express = require('express');
const router = express.Router();
const carController = require('../controllers/cars');
router.get('/', carController.readAll);
router.get('/:car_id', carController.readOne);
router.post('/', carController.create);
router.put('/:car_id', carController.update);
router.delete('/:car_id', carController.destroy);

module.exports = router;
