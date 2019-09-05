require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const path = require('path')

const db = require('./config/database')

const htmlRoutes = require('./routes/html')
const apiRoutes = require('./routes/api')

// added by Felipe for connection
// test db connection: returns a pormise tests connection with verification and error (the database configuration lives in the config folder->database.js)
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express()
const PORT = process.env.PORT || 3030

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(express.static(path.join(__dirname, 'public')))
  // .use(db)
  .use(htmlRoutes)
  .use(apiRoutes)
  .listen(PORT, () => {
    console.log(`
          oOOOOOo
         ,|    oO
        //|     |
        \\\\|     |
          \`-----\`
          Server Started on http://localhost:${PORT}`)
  })
