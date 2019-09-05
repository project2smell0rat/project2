const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Member = require('../models/Member')
const Recipient = require('../models/Recipient')
const Emitter = require('../models/Emitter')
const Job = require('../models/Job')
const Task = require('../models/Task')

router
// LOG IN
  .get('/', (req, res) => {
    res.render('index', {
      title: 'Log In',
      body: 'components/login'
    })
  })

  // HOME
  .get('/home', (req, res) => {
    res.render('index', {
      title: 'Home',
      body: 'components/home'
    })
  })

  // VIEW JOB
  .get('/view-job', (req, res) => {
    res.render('index', {
      title: 'View Job',
      body: 'components/view-job'
    })
  })

  // ADD JOB
  .get('/add-job', (req, res) => {
    res.render('index', {
      title: 'Add a New Job',
      body: 'components/add-job'
    })
  })

module.exports = router
