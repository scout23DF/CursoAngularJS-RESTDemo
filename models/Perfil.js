var mongoose = require('mongoose');

var PerfilSchema = new mongoose.Schema({
  nome : String,
  permissoesList : [String]
});

module.exports = mongoose.model('DKM-Perfil', PerfilSchema);
