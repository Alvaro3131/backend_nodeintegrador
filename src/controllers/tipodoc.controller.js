import { pool } from "../database.js";
export const gettipodos = async (req, res) => {
  try {
    pool.query("SELECT * FROM tipodoc;", function (err, result) {
      console.log(result);
      try {
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json("Error al listar tipos de solicitudes");
      }
    });
  } catch (error) {
    return res.status(500).json("Error al listar tipos de solicitudes");
  }
};
