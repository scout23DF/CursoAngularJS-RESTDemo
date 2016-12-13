var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Artista = require('../models/Artista.js');

/* GET /usuario Listagem de usuários. */
router.get('/', function(req, res, next) {
  Artista.find(function (err, artista) {
    if (err) return next(err);
    res.json(artista);
  });
});

/* POST /usuario Cadastro de usuário */
router.post('/', function(req, res, next) {
  Artista.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /usuario/id  Lista filtrada por um usuário*/
router.get('/:id', function(req, res, next) {
  Artista.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /usuario/:id Salva a edição de usuário */
router.put('/:id', function(req, res, next) {
  Artista.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /usuario/:id Deletando o usuário a partir do id */
router.delete('/:id', function(req, res, next) {
  Artista.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
