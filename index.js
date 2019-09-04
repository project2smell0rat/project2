require('dotenv').config()
import { join } from 'path';
import express, { urlencoded, json, static } from 'express';
import db from './db';
import htmlRoutes from './routes/html';
import apiRoutes from './routes/api';

const app = express()
const PORT = process.env.PORT || 3030

app
  .set('views', join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(urlencoded({ extended: false }))
  .use(json())
  .use(static(join(__dirname, 'public')))
  .use(db)
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
