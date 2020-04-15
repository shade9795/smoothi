const mongoose = require('mongoose');
const { Schema }= mongoose;

const Frutas = new Schema({
  fruta: String,
  valor: Number
});

module.exports = mongoose.model('Frutas', Frutas);
