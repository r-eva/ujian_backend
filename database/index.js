const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'reginaeva',
    password: 'abc123',
    database: 'ujian_backend',
    port: 3306,
    multipleStatements: true
})


module.exports = {
    sqlDB: db
}