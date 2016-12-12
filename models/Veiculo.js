var mongoose = require('mongoose');

var VeiculoSchema = new mongoose.Schema({
  tipoVeiculo     : String,
  nomeMarca       : String,
  descricaoModelo : String,
  numeroAnoFabricacao : Number,
  numeroAnoModelo : Number,
  statusCor       : String,
  numeroPlaca     : String,
  numeroRANAVAN   : String,  
  valorRevendaFIPE: Number,
  qtdRevisoes     : Number,
  nomesMototistasList : [String]
});

module.exports = mongoose.model('Veiculo', VeiculoSchema);