var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home' });
});


router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home' });
});

/* GET Apointments page. */
router.get('/appointments', function(req, res, next) {
  res.render('appointments', { 
    title: 'Book an Appointment'
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Us'
  });
});
router.post('/appointments', function(req, res, next) {
  const appointmentData = req.body;
  console.log(appointmentData);
  res.render('appointment-confirmation', { 
    title: 'Appointment Confirmed',
    appointment: appointmentData
  });
});




module.exports = router;
