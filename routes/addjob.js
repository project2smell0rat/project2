const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Member = require('../models/Member')
const Recipient = require('../models/Recipient')
const Emitter = require('../models/Emitter')
const Job = require('../models/Job')
const Task = require('../models/Task')

// ADD JOB
router.get('/addjob', (req, res) => {
  res.render('index', {
    title: 'Add a New Job',
    body: 'components/add-job'
  })
})

module.exports = router
