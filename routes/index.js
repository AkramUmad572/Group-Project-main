var express = require('express');
var router = express.Router();
const Appointment = require('../models/appointment'); // Import the Appointment model

// Temporary in-memory storage for appointments (remove this since we'll use MongoDB)
// let appointments = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home' 
  });
});

router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home' 
  });
});

/* GET Appointments page. */
router.get('/appointments', function(req, res, next) {
  res.render('appointments', { 
    title: 'Book an Appointment' 
  });
});

/* POST Appointments data and render confirmation */
router.post('/appointments', async function(req, res, next) {
  const appointmentData = req.body;

  // Save the new appointment to the database
  try {
    const newAppointment = new Appointment(appointmentData);
    await newAppointment.save();
    console.log('Appointment saved:', appointmentData);

    // Render confirmation page with the appointment details
    res.render('appointment-confirmation', { 
      title: 'Appointment Confirmed',
      appointment: appointmentData
    });
  } catch (error) {
    console.error('Error saving appointment:', error);
    next(error);
  }
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Us' 
  });
});

module.exports = router;
