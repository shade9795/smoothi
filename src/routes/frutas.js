const express = require ('express');
const router = express.Router();

const Frutas = require ('../models/Frutas');


router.get('/frutas', async (req, res) => {
  const frutas = await Frutas.find();
  res.json(frutas);
});

router.post('/frutas', async (req, res) => {
  const frutas = new Frutas(req.body);
  await frutas.save();
  res.json({
    status: 'Guardado'
  });
});

module.exports = router;
