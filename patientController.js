// // patientController.js
// const Patient = require('./models/Patient');

// async function addPatient(patientData) {
//   try {
//     const newPatient = new Patient(patientData);
//     await newPatient.save();
//     return newPatient;
//   } catch (error) {
//     throw error;
//   }
// }

// module.exports = { addPatient };

// patientController.js
const Patient = require('./models/Patient');

async function addPatient(patientData) {
  try {
    const newPatient = new Patient(patientData);
    await newPatient.save();
    return newPatient;
  } catch (error) {
    throw error;
  }
}

async function getAllPatients() { // Added function
  try {
    const patients = await Patient.find();
    return patients;
  } catch (error) {
    throw error;
  }
}

module.exports = { addPatient, getAllPatients }; // Updated export
