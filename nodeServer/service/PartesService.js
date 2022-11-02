'use strict';


/**
 * Borrar cliente
 * Borra cliente por id
 *
 * parteId Long Id de cliente a eliminar
 * no response value expected for this operation
 **/
exports.deleteParte = function(parteId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Subir parte
 * get parte
 *
 * id String hacer get parte (optional)
 * returns inline_response_200
 **/
exports.partesGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contador" : 0,
  "nombre" : "nombre"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Subir cliente
 * Crear cliente
 *
 * body Parte Crear nuevo cliente
 * returns Parte
 **/
exports.postParte = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "descripcion" : "Descripcion parte 1",
  "fecga" : "01/11/2022",
  "latitud" : 42,
  "longitud" : -24,
  "tiempo" : 123,
  "hora" : "10:10",
  "incidencia" : false,
  "id" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update cliente
 * Actualizar cliente
 *
 * body Cliente actualiza cliente existente (optional)
 * parteId Long Cliente para eliminar
 * no response value expected for this operation
 **/
exports.updateParte = function(body,parteId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

