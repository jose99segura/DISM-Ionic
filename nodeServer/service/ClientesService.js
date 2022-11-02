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

// GET CLIENTE
exports.clientesGET = function(id) {
  return new Promise(function(resolve, reject) {
    // Filtrar por si pasa id o no
    let query = '';
    if(id){
      query = `select * from clientes where id='${id}'`;
    }else{
      query = 'select * from clientes';
    }
    
    // Parte de conexion con la query necesaria
    connection.query(query, function(err, rows){
      if (err) {
        console.log('Error en /clientes '+err);
        reject(err);
      }
      else {
        console.log('GET en /clientes realizado');
        resolve(rows);
      }
    })

  });
}


// DELETE CLIENTE
exports.deleteCliente = function(clienteId) {
  return new Promise(function(resolve, reject) {
    // Filtrar por si pasa id o no
    let query = `DELETE FROM clientes WHERE id='${clienteId}'`;
    
    // Parte de conexion con la query necesaria
    connection.query(query, function(err, rows){
      if (err) {
        console.log('Error en /clientes '+err);
        reject(err);
      }
      else {
        console.log(`cliente con id '${clienteId}' ha sido eliminado`);
        resolve(rows[0]);
      }
    })
  });
}


// POST CLIENTE
exports.postCliente = function(body) {
  return new Promise(function(resolve, reject) {

    let query = `INSERT INTO clientes (nombre, dni, direccion, poblacion, telefono, email)
                VALUES ('${body.nombre}', '${body.dni}', '${body.direccion}', '${body.poblacion}', '${body.telefono}', '${body.email}')`;

    // Parte de conexion con la query necesaria
    connection.query(query, function(err, rows){
      if (err) {
        console.log('Error en /clientes '+err);
        reject(err);
      }
      else {
        console.log(`cliente con nombre '${body.nombre}' ha sido insertado`);
        resolve(rows[0]);
      }
    })

  });
}


// UPDATE CLIENTE
exports.updateCliente = function(body,clienteId) {
  return new Promise(function(resolve, reject) {

    let query = `UPDATE clientes
                  SET nombre = '${body.nombre}', dni= '${body.dni}', direccion = '${body.direccion}', poblacion = '${body.poblacion}', telefono = '${body.telefono}', email = '${body.email}'
                  WHERE id = '${clienteId}'`;

    // Parte de conexion con la query necesaria
    connection.query(query, function(err, rows){
      if (err) {
        console.log('Error en /clientes '+err);
        reject(err);
      }
      else {
        console.log(`cliente con nombre '${body.nombre}' ha sido insertado`);
        resolve(rows[0]);
      }
    })

  });
}

