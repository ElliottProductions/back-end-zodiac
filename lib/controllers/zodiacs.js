const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchSign = zodiacs.find((sign) => sign.id === id);
    res.json(matchSign);
  })
  .get('/', (req, res) => {
    const sign = zodiacs.map((sign) => { return { id: sign.id, name: sign.name };});
    res.json(sign);
  });
