const Mysql = require('mysql');

var connection = Mysql.createConnection({
    host:"aws-test.cm7d5lgfchgt.us-east-1.rds.amazonaws.com",
    user:"awstest",
    password: "awstest.2017",
    database:"awstest"
});


module.exports = connection;
