const mysql = require('mysql2');

const pool = mysql.createPool({
    user : 'root',
    password: '1998',
    host: 'localhost',
    port: 3306,
    database: 'funko_schema',
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