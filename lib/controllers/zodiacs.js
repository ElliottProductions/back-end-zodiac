const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router()
  .get('/', (req, res) => {
    const sign = zodiacs.map((sign) => { return { id: sign.id, name: sign.name };});
    res.json(sign);
  });
