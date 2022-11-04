'use strict';

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


// GET USUARIO
exports.usuariosGET = function(id) {
  return new Promise(function(resolve, reject) {
    // Filtrar por si pasa id o no
    let query = 'select * from usuarios';

    // Parte de conexion con la query necesaria
    connection.query(query, function(err, rows){
      if (err) {
        console.log('Error en GET /usuarios '+err);
        reject(err);
      }
      else {
        console.log('GET en /usuarios realizado');
        resolve(rows);
      }
    })
  });
}

