import { pool } from "../database";
const jwt = require("jsonwebtoken");
const secret = "leidy-decret-access-token";
const refreshTokenSecret = "leidy-decret-refresh-access-token";
const port = 2000;
const tokenLife = 900;
const refreshTokenLife = 86400;
const helpers = require("../libs/helpers");
const bcrypt = require("bcryptjs");
const refreshTokens = [];

export const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  pool.query(
    "select * from trabajador where usuario=?;",
    [username],
    function (err, result) {
      try {
        if (result[0].length != 0) {
          const passold = String(result[0].contraseña);
          if (bcrypt.compareSync(password, passold)) {
            var id = result[0].idtrabajador;
            var nombre = result[0].nombre;
            var apellidos = result[0].apellidos;
            const user = {
              id: result[0].idtrabajador,
              nombre: result[0].nombre,
              apellidos: result[0].apellidos,
              admin: result[0].admin,
            };
            const accessToken = jwt.sign(
              { user, id, nombre, apellidos },
              secret,
              {
                expiresIn: "100000s",
              }
            );
            const refreshToken = jwt.sign({ user }, refreshTokenSecret);
            refreshTokens.push(refreshToken);
            return res.status(200).json({
              accessToken,
              refreshToken,
            });
          } else {
            return res.status(400).json("Username o Password incorrectos...!");
          }
        }
        return res.status(400).json("Username o Password incorrectos...!");
      } catch (error) {
        return res.status(400).json("Error al VALIDAR USUARIO ");
      }
    }
  );
};

export const token = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.sendStatus(401);
    }
    if (!refreshTokens.includes(token)) {
      return res.sendStatus(403);
    }
    jwt.verify(token, config.refreshTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
    });
  } catch (e) {
    console.log(e);
  }
};
