const express = require ('express');
const router = express.Router();

const Proteinas = require ('../models/Proteinas');


router.get('/proteinas', async (req, res) => {
  const proteinas = await Proteinas.find();
  res.json(proteinas);
});

router.post('/proteinas', async (req, res) => {
  const proteinas = new Proteinas(req.body);
  await proteinas.save();
  res.json({
    status: 'Guardado'
  });
});

module.exports = router;
