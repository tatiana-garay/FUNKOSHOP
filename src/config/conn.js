const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    user : process.env.DBUSER,
    password: process.env.DBPASS,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBSCHEMA,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit:0
});

pool.getConnection((err, conn) =>{
    if (err){
        console.log('Hubo un error la put q te pario' + err);
    }else {
        console.log('conecxion a la base de datos exitosa wii');
        conn.release();
    }
})


module.exports ={
    conn: pool.promise()
}