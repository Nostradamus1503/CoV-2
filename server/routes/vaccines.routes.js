const express = require('express');
const router = express.Router();
const vaccine = require('../controllers/vaccine.controller');
router.get('/', vaccine.getSensors);
//router.get('/')
router.post('/', vaccine.createSensor);
router.get('/:id', vaccine.getSensor)
router.put('/:id', vaccine.editSensor);
router.delete('/:id', vaccine.deleteSensor);
module.exports = router;