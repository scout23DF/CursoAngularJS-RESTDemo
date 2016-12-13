var mongoose = require('mongoose');

var ArtistaSchema = new mongoose.Schema({
  codigoAssociacao          : String,
  tipoArtista               : String,
  nomeArtista               : String,
  dataNascimento            : Date,
  tipoEstiloMusical         : String,
  valorCache                : Number,
  statusAtivo               : Boolean
});

module.exports = mongoose.model('Artista', ArtistaSchema);
