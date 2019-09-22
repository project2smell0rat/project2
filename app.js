require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const path = require('path')

const db = require('./config/database')

// in routes folder
const htmlRoutes = require('./routes/html')
const apiRoutes = require('./routes/api')
const homeRoutes = require('./routes/home')
const viewjobRoutes = require('./routes/viewjob')
const addjobRoutes = require('./routes/addjob')

// added by Felipe for connection
// test db connection: returns a pormise tests connection with verification and error (the database configuration lives in the config folder->database.js)
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express()

// set up landing wrapping
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app

  .set('views', path.join(__dirname, 'views'))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(express.static(path.join(__dirname, 'public')))
  // .use(db)
  .use(htmlRoutes)
  .use(apiRoutes)
  .use(homeRoutes)
  .use(viewjobRoutes)
  .use(addjobRoutes)

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
  console.log(`
          oOOOOOo
         ,|    oO
        //|     |
        \\\\|     |
          \`-----\`
          Server Started on http://localhost:${PORT}`)
})
