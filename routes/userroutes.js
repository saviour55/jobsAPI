const express = require('express')
const router = express.Router()

const {register, login, logout} = require('../controllers/usercontroller')
const {getJobs} = require('../controllers/jobscontroller')




router.post('/register', register)
router.post('/login', login)
router.get('/jobs', getJobs )
router.get('/logout', logout);



module.exports = router