const express = require ('express');
const router = express.Router();

const Liquidos = require ('../models/Liquidos');


router.get('/liquidos', async (req, res) => {
  const liquidos = await Liquidos.find();
  res.json(liquidos);
});

router.post('/liquidos', async (req, res) => {
  const liquidos = new Liquidos(req.body);
  await liquidos.save();
  res.json({
    status: 'Guardado'
  });
});
module.exports = router;
