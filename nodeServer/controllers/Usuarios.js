'use strict';

var utils = require('../utils/writer.js');
var Usuarios = require('../service/UsuariosService');

module.exports.usuariosGET = function usuariosGET (req, res, next, id) {
  Usuarios.usuariosGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
