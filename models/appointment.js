const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  patient_name: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  appointment_date: {
    type: Date,
    required: true
  },
  appointment_time: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
