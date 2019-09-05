const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Member = require('../models/Member')
const Recipient = require('../models/Recipient')
const Emitter = require('../models/Emitter')
const Job = require('../models/Job')
const Task = require('../models/Task')

// LOG IN
router.get('/', (_, res) =>
  Member.findAll()
    .then(members => {
      res.render('index', {
        members,
        styling: '/css/login.css',
        title: 'index',
        body: 'layouts/index'
      })
    })
    .catch(err => console.log(err)))

module.exports = router
