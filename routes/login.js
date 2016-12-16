var express = require('express');
var jwt = require('jsonwebtoken');
var Usuario = require('../models/Usuario.js');

var secretKey = "R@tapl@nDoArr3bol";
var router = express.Router();


router.post('/', function (req, res, next) {
    Usuario.findOne({descricaoLogin: req.body.username, descricaoSenha: req.body.password}, 'login')
           .exec(function (err, pUsuarioReturned) {
                if (err) {
                    res.send(err);
                }
                if (pUsuarioReturned !== null) {
                    var vTokenGerado = jwt.sign(pUsuarioReturned, secretKey, {
                        expiresIn: "1 day"
                    });
                    res.json({usuarioAutenticado: pUsuarioReturned, token: vTokenGerado});
                } else {
                    res.status(400).send('Login/Senha incorretos');
                }
            });
});

module.exports = router;