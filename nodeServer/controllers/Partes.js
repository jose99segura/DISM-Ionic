'use strict';

var utils = require('../utils/writer.js');
var Partes = require('../service/PartesService');

module.exports.deleteParte = function deleteParte (req, res, next, parteId) {
  Partes.deleteParte(parteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.partesGET = function partesGET (req, res, next, id) {
  Partes.partesGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postParte = function postParte (req, res, next, body) {
  Partes.postParte(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateParte = function updateParte (req, res, next, body, parteId) {
  Partes.updateParte(body, parteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
