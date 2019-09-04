// // declaring sequelize, code pasted form package documentation page makes conection between sequelize models and mysqldb
// const Sequelize = require('sequelize')

// // Option 1: Passing parameters separately. codegi refers to the database I'm using root it is db username password its password copied code declares constant as sequelize I changed it to db to follow example the constant from the original code was change to module.export to export it to other files
// module.exports = new Sequelize('ratsmeller', 'root', 'password', {
//   host: 'localhost',
//   dialect: 'mysql',

//   // pool section was not altered in example don't know yet what this would be used for
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// })
