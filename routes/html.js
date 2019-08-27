const express = require('express')

const router = express.Router()

router
.get('/', (_, res) => {
  res.render('index', {
    title: 'My Cool App',
    user: 'Nerd'
  })
})

// TESTING GET
.get('/login', (_, res) => {
  res.render('login')
})

module.exports = router