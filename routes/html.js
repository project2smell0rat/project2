const express = require('express')

const router = express.Router()

router
// DUSTIN'S TEST
// .get('/', (_, res) => {
//   res.render('index', {
//     title: 'My Cool App',
//     user: 'Nerd'
//   })
// })

// LOG IN
.get('/', (_, res) => {
  res.render('index', {
    title: 'Log In',
    body: 'components/login'
  })
})

// HOME
.get('/home', (_, res) => {
  res.render('index', {
    title: 'Home',
    body: 'components/home'
  })
})

// VIEW JOB
.get('/view-job', (_, res) => {
  res.render('index', {
    title: 'View Job',
    body: 'components/view-job'
  })
})

// ADD JOB
.get('/add-job', (_, res) => {
  res.render('index', {
    title: 'Add a New Job',
    body: 'components/add-job'
  })
})

module.exports = router