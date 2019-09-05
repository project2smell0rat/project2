const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Member = require('../models/Member')
const Recipient = require('../models/Recipient')
const Emitter = require('../models/Emitter')
const Job = require('../models/Job')
const Task = require('../models/Task')

// ADD JOb

router.get('/addjob', (_, res) =>
  Member.findAll()
    .then(members => {
      res.render('addjob', {
        members,
        styling: '/css/login.css',
        title: 'Add Job',
        body: 'layouts/addjob'
      })
    })
    .catch(err => console.log(err)))

module.exports = router
