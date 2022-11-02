'use strict';

var utils = require('../utils/writer.js');
var Clientes = require('../service/ClientesService');

module.exports.clientesGET = function clientesGET (req, res, next, id) {
  Clientes.clientesGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCliente = function deleteCliente (req, res, next, clienteId) {
  Clientes.deleteCliente(clienteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postCliente = function postCliente (req, res, next, body) {
  Clientes.postCliente(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCliente = function updateCliente (req, res, next, body, clienteId) {
  Clientes.updateCliente(body, clienteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
