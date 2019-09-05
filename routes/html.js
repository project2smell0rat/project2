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
  .get('/', (_, res) => {
    res.render('index', {
      styling: '/css/login.css',
      title: 'Log In',
      body: 'components/login'
    })
  })

  .post('/', (req, res) => {
    let { user_name, password } = req.body
    let errors = []

    // form field validation
    if (!user_name) {
      errors.push({ text: 'Please add username' })
    }

    if (!password) {
      errors.push({ text: 'Please add a password' })
    }

    // Check for errors if at least one error presents itself in one of the fields below else it will insert data into the gig table

    if (errors.length > 0) {
      res.render('/', {
        errors,
        user_name,
        password
      })
    } else {
    // Insert dat into database table
      Member.findAll({
        user_name,
        password
      })
      // redirects to gigs or catches the error
        .then(user => res.redirect('/home'))
        .catch(err => console.log(err))
    }
  })

  // HOME
  .get('/home', (_, res) => {
    res.render('index', {
      styling: '/css/main.css',
      title: 'Home',
      body: 'components/home'
    })
  })

  // VIEW JOB
  .get('/view-job', (_, res) => {
    res.render('index', {
      styling: '/css/main.css',
      title: 'View Job',
      body: 'components/view-job'
    })
  })

module.exports = router
