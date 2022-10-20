const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    port:3306,
    database: 'db_crias'
})

connection.connect((err)=>{
    if(err)
        console.log("error: " + err);
    
})


module.exports = connection;