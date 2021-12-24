const { Router } = require("express");
const router = Router();
const data = require("../data/data_tipie.json");

router.get("/empleados", (req, res) => {
  res.send(data);
});


module.exports = router;
