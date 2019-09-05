const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Member = require('../models/Member')
const Recipient = require('../models/Recipient')
const Emitter = require('../models/Emitter')
const Job = require('../models/Job')
const Task = require('../models/Task')

// HOME

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

router.post('/viewjob', (req, res) => {
  const { task_name, task_description, task_rate, job_id } = req.body
  let errors = []
        
  // form field validation
  if (!title) {
    errors.push({ text: 'Please add a title' })
  }
        
  if (!technologies) {
    errors.push({ text: 'Please add some technologies' })
  }
        
  if (!description) {
    errors.push({ text: 'Please add a description' })
  }
        
  if (!contact_email) {
    errors.push({ text: 'Please add a email' })
  }
        
  // Check for errors if at least one error presents itself in one of the fields below else it will insert data into the gig table
        
  if (errors.length > 0) {
    res.render('add', {
      errors,
      task_name,
      task_description,
      task_rate,
      job_id
    })
    // adds dollar sign to budget which is not included in the DB
  } else {
    if (!budget) {
      budget = 'Unknown'
    } else {
      budget = `$${budget}`
    }
    // make lowercase and replaces spaces with just comma in technologies field
    technologies = technologies.toLowerCase().replace(/, /g, ',')
        
    // Insert dat into database table
    Task.create({
      task_name,
      task_description,
      task_rate,
      job_id
    })
    // redirects to gigs or catches the error
      .then(gig => res.redirect('/gigs'))
      .catch(err => console.log(err))
  }
})
        
// Search for gigs
router.get('/search', (req, res) => {
  let { term } = req.query
        
  Job.findAll({ where: { Job_name: { [Op.like]: '%' + term + '%' } } })
    .then(jobs => res.render('viewjob', { jobs }))
    .catch()
})


module.exports = router
