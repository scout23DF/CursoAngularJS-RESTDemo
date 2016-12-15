var mongoose = require('mongoose');

var VeiculoSchema = new mongoose.Schema({
  tipoVeiculo     : String,
  nomeMarca       : String,
  descricaoModelo : String,
  numeroAnoFabricacao : Number,
  numeroAnoModelo : Number,
  statusCor       : String,
  numeroPlaca     : String,
  numeroRENAVAN   : String,  
  valorRevendaFIPE: Number,
  qtdRevisoes     : Number,
  nomesMototistasList : [String]
});

module.exports = mongoose.model('DKM-Veiculo', VeiculoSchema);