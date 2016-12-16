var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
 
  nome    : String,
  idade   : Number,
  descricaoLogin : String,
  descricaoSenha : String,
  cep     : Number,
  endereco: {
        numeroCEP : Number,
        descricaoLogradouro : String
  },
  perfil: {
  	nome : String,
        permissoesList : [String]
  }
  
});

module.exports = mongoose.model('DKM-Usuario', UsuarioSchema);
