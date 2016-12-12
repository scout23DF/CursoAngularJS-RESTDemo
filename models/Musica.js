var mongoose = require('mongoose');

var MusicaSchema = new mongoose.Schema({
  codigoCadastroUniversal   : String,
  nomeMusica                : String,
  duracao                   : String,
  tipoEstilo                : String,
  dataComposicao            : Date,
  valorLucro                : Number,
  statusSucesso             : Boolean,
  nomeAutorPrincipal        : String,
  nomesColaboradoresList    : [String],
  textoLetraMusica          : String
});

module.exports = mongoose.model('Musica', MusicaSchema);
