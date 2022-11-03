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


// GET PARTE
exports.partesGET = function(id) {
  return new Promise(function(resolve, reject) {
    // Filtrar por si pasa id o no
    let query = '';
    if(id){
      query = `select * from partes where id='${id}'`;
    }else{
      query = 'select * from partes';
    }

    // Parte de conexion con la query necesaria
    connection.query(query, function(err, rows){
      if (err) {
        console.log('Error en GET /partes '+err);
        reject(err);
      }
      else {
        console.log('GET en /partes realizado');
        resolve(rows);
      }
    })

  });
}

// POST PARTE
exports.postParte = function(body) {
  return new Promise(function(resolve, reject) {

    let query = `INSERT INTO partes (fecha, hora, descripcion, incidencia, tiempo, latitud, longitud)
                VALUES ('${body.fecha}', '${body.hora}', '${body.descripcion}', '${body.incidencia}', '${body.tiempo}', '${body.latitud}', '${body.longitud}')`;

    // Parte de conexion con la query necesaria
    connection.query(query, function(err, rows){
      if (err) {
        console.log('Error en POST /partes '+err);
        reject(err);
      }
      else {
        console.log(`parte con id '${body.id}' ha sido insertado`);
        resolve(rows[0]);
      }
    })

  });
}

// UPDATE PARTE
exports.updateParte = function(body,parteId) {
  return new Promise(function(resolve, reject) {

    let query = `UPDATE partes
                  SET fecha = '${body.fecha}', hora= '${body.hora}', descripcion = '${body.descripcion}', incidencia = '${body.incidencia}', tiempo = '${body.tiempo}', latitud = '${body.latitud}', longitud = '${body.longitud}'
                  WHERE id = '${parteId}'`;

    // Parte de conexion con la query necesaria
    connection.query(query, function(err, rows){
      if (err) {
        console.log('Error en PUT /partes '+err);
        reject(err);
      }
      else {
        console.log(`parte con id '${parteId}' ha sido modificado`);
        resolve(rows[0]);
      }
    })

  });
}

// DELETE PARTE
exports.deleteParte = function(parteId) {
  return new Promise(function(resolve, reject) {
    // Filtrar por si pasa id o no
    let query = `DELETE FROM partes WHERE id='${parteId}'`;

    // Parte de conexion con la query necesaria
    connection.query(query, function(err, rows){
      if (err) {
        console.log('Error en DELETE /partes '+err);
        reject(err);
      }
      else {
        console.log(`parte con id '${parteId}' ha sido eliminado`);
        resolve(rows[0]);
      }
    })
  });
}



