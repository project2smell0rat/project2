// NOTE: table corresponds to JS file name in the singular. Table name is plural

const Sequelize = require('sequelize')
const db = require('../config/database')

const Job = db.define('job', {
  job_name: {
    type: Sequelize.STRING
  },

  user_id: {
    type: Sequelize.STRING
  }
})

module.exports = Job
