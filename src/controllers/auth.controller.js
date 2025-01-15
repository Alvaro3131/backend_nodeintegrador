import { pool } from "../database.js";
import jwt from "jsonwebtoken";
const secret = "leidy-decret-access-token";
const refreshTokenSecret = "leidy-decret-refresh-access-token";
const port = 2000;
const tokenLife = 900;
const refreshTokenLife = 86400;
import bcrypt from "bcryptjs";
const refreshTokens = [];

export const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  pool.query(
    "select * from usuario where usuario=?;",
    [username],
    function (err, result) {
      try {
        if (result[0].length != 0) {
          const passold = String(result[0].clave);
          if (bcrypt.compareSync(password, passold)) {
            var id = result[0].id_usuario;
            var nombrecompleto = result[0].nom_usuario;
            var dni = result[0].num_doc;
            var idrol = result[0].id_rol;
            const user = {
              id: result[0].id_usuario,
              nombrecompleto: result[0].nom_usuario,
              dni: result[0].num_doc,
              idrol: result[0].id_rol,
            };
            const accessToken = jwt.sign(
              { user, id, nombrecompleto, dni, idrol },
              secret,
              {
                expiresIn: "1000000s",
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
