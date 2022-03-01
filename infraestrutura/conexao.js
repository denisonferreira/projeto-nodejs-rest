const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'admin',
    password: 'password',
    database: 'agenda-petshop'
})

module.exports = conexao  