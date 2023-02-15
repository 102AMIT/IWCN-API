const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Amit98305973@',
    database: 'crud_app'
  });

  module.exports=connection;