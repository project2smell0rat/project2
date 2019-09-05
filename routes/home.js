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
  res.render('home', {
    title: 'Home',
    body: 'components/home'
  })
})

router.get('/home', (_, res) =>
  Member.findAll()
    .then(members => {
      res.render('home', {
        members,
        styling: '/css/login.css',
        title: 'home',
        body: 'layouts/home'
      })
    })
    .catch(err => console.log(err)))

module.exports = router
