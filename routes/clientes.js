const express = require('express');
const router = express.Router();

router.get('/clientes', (req, res) => {
  res.json([
    { id: 1, nombre: "Cliente A" },
    { id: 2, nombre: "Cliente B" }
  ]);
});

module.exports = router;
