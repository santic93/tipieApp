const express = require("express");
const app = express();
const morgan = require("morgan");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require("./routes/index"));
app.use(require("./routes/login"));

//start server
app.listen(5000, () => {
  console.log(`Server on port ${5000}`);
});
