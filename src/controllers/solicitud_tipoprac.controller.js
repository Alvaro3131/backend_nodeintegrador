import { pool } from "../database.js";
export const getSolicitudesTipoprac = async (req, res) => {
  try {
    pool.query("SELECT * FROM solicitud_tipoprac;", function (err, result) {
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
