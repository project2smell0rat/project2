const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Member = require('../models/Member')
const Recipient = require('../models/Recipient')
const Emitter = require('../models/Emitter')
const Job = require('../models/Job')
const Task = require('../models/Task')

// VIEW JOB
router.get('/view-job', (req, res) => {
  res.render('index', {
    title: 'View Job',
    body: 'components/view-job'
  })
})

module.exports = router
