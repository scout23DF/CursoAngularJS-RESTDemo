var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Musica = require('../models/Musica.js');

/* GET /usuario Listagem de usuários. */
router.get('/', function(req, res, next) {
  Musica.find(function (err, musica) {
    if (err) return next(err);
    res.json(musica);
  });
});

/* POST /usuario Cadastro de usuário */
router.post('/', function(req, res, next) {
  Musica.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /usuario/id  Lista filtrada por um usuário*/
router.get('/:id', function(req, res, next) {
  Musica.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /usuario/:id Salva a edição de usuário */
router.put('/:id', function(req, res, next) {
  Musica.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /usuario/:id Deletando o usuário a partir do id */
router.delete('/:id', function(req, res, next) {
  Musica.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
