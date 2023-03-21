const express = require('express');

const router = express.Router();

const doctorController = require('../controllers/doctor.controller');

// get all doctors
router.get('/',doctorController.getDoctorsList);
//get doctor by id
router.get('/:id',doctorController.getDoctorsById);
//create new doctor
router.post('/',doctorController.createdNewDoctor);
//update doctor
router.put('/:id',doctorController.updateDoctor);
//delete doctor
router.delete('/:id',doctorController.deleteDoctor);
module.exports = router;