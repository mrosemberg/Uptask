const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const db = new Sequelize('uptasknode', 'root', 'root', {
  host    : 'localhost',
  port    : '3306',
  dialect : 'mysql'
});

// Option 2: Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

module.exports  = db;