const mongoose = require('mongoose');
const { Schema }= mongoose;

const Proteinas = new Schema({
  proteina: String
});

module.exports = mongoose.model('Proteinas', Proteinas);
