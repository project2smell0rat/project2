const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Member = require('../models/Member')
const Job = require('../models/Job')
const Task = require('../models/Task')

// VIEW JOB
router.get('/viewjob', (_, res) =>
  Job.findAll()
    .then(members => {
      res.render('viewjob', {
        members,
        styling: '/css/login.css',
        title: 'View Job',
        body: 'layouts/viewjob'
      })
    })
    .catch(err => console.log(err)))

router.post('/viewjob', (req, res) => {
  let { title, technologies, budget, description, contact_email } = req.body
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
      title,
      technologies,
      budget,
      description,
      contact_email
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
    Gig.create({
      title,
      technologies,
      description,
      budget,
      contact_email
    })
    // redirects to gigs or catches the error
      .then(gig => res.redirect('/gigs'))
      .catch(err => console.log(err))
  }
})
    
// Search for gigs
router.get('/search', (req, res) => {
  let { term } = req.query
    
  Gig.findAll({ where: { technologies: { [Op.like]: '%' + term + '%' } } })
    .then(gigs => res.render('gigs', { gigs }))
    .catch()
})


module.exports = router
