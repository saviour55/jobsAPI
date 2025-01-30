const express = require('express')
const router = express.Router()

const { addJobs, getJobs, deleteJob, updateJob, getJobsForUser} = require ('../controllers/jobscontroller')

router.post('/jobs', addJobs)
router.put('/jobs/:id', updateJob)
router.delete('/jobs/:id', deleteJob)
router.get('/user/jobs', getJobsForUser)

module.exports = router
