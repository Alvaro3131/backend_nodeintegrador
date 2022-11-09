import express from "express";
import morgan from "morgan";

const app = express();
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(
    "<h1>Bienvenidos al Backend del Proyecto Integrador</h1><p>Desarrollado por el grupo N° 1</p>"
  );
});

export default app;
