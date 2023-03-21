const mysql2 = require('mysql2');
const dbConn = mysql2.createConnection({
    host :'127.0.0.1',
    port:'3306',
    user :'root',
    password:'Velu2001.',
    database:'api'
});
dbConn.connect(function(error){
    if (error) throw error;
    console.log('DataBase connected Successfully!!!!');
});
module.exports=dbConn;