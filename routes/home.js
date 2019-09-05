const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Member = require('../models/Member')
const Recipient = require('../models/Recipient')
const Emitter = require('../models/Emitter')
const Job = require('../models/Job')
const Task = require('../models/Task')

// HOME
router.get('/home', (req, res) => {
  res.render('index', {
    title: 'Home',
    body: 'components/home'
  })
})

module.exports = router
