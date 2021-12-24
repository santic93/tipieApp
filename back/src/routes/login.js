const { Router } = require("express");
const router = Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("hola desde back")
  if (email === "demo@tipieapp.com" && password === "Tipie2022") {
    return res.status(200).send("Usuario OK")
  } else {
   return res.status(401).send("Usuari@ no permitido");
  }
});



module.exports = router;
