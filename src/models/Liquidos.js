const mongoose = require('mongoose');
const { Schema }= mongoose;

const Liquidos = new Schema({
  liquido: String,
  valor: Number
});

module.exports = mongoose.model('Liquidos', Liquidos);
