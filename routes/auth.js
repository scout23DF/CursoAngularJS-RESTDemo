var jwt = require('jsonwebtoken');

var secretKey = "R@tapl@nDoArr3bol";

//middleware: auth
var verificadorAuthenticacao = function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    
    if (token) {

        jwt.verify(token, secretKey, function (err, decoded) {
            if (err) {
                return res.status(403).send({
                    success: false,
                    message: 'Acesso Negado! Opa... Parou, Parou... Enviou um Token Inválido!'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'Acesso Negado! Kd o Token, brother?'
        });
    }
};


module.exports = verificadorAuthenticacao;