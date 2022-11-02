var express = require("express");
var mysql = require('mysql');
var app = express();
var bp = require('body-parser');
const cors = require('cors');
app.use(cors());
app.options('*', cors());
app.use(bp.json());
var connection = mysql.createConnection({
 host : 'localhost',
 user : 'usuario',
 password : 'clave',
 database : 'dism'
});
// Ejercicio: GET http://localhost:8080/clientes
app.get('/clientes', function(req, resp) {
    connection.query('select * from clientes', function(err, rows) {
        if (err) {
            console.log('Error en /clientes '+err);
            resp.status(500);
            resp.send({message: "Error al obtener clientes"});
        }
        else {
            console.log('/clientes');
            resp.status(200);
            resp.send(rows);
        }
    })
});
 
var server = app.listen(8080, function () {
 console.log('Servidor iniciado en puerto 8080…'); 
});
