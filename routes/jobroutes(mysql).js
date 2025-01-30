const express = require('express')
const router = express.Router()

const {addjobs, viewjobs, updatejobs, deletejobs} = require ('../controllers/jobscontroller')

router.post('/jobs', addjobs)
router.get('/jobs', viewjobs)
router.put('/jobs', updatejobs)
router.delete('/jobs', deletejobs)

module.exports = {router}
