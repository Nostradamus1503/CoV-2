const express = require('express');
const router = express.Router();
const strain = require('../controllers/strain.controller');
router.get('/', sensor.getSensors);
//router.get('/')
router.post('/', strain.createSensor);
router.get('/:id', strain.getSensor)
router.put('/:id', strain.editSensor);
router.delete('/:id', strain.deleteSensor);
module.exports = router;