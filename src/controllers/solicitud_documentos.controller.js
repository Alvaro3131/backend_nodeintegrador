import { pool } from "../database";
export const subirDocumentosfinales = async (req, res) => {
  try {
    const P_linkinforme = req.body.linkinforme;
    const P_contanciadehoras = req.body.constanciahoras;
    const P_idsolicitud = parseInt(req.body.idsolicitud);
    console.log(req.body);
    pool.query(
      "CALL insertardocumentosfinales(?,?,?);",
      [P_idsolicitud, P_linkinforme, P_contanciadehoras],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar estudiante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};

export const supdateDocumentosfinales = async (req, res) => {
  try {
    const P_linkinforme = req.body.linkinforme;
    const P_contanciadehoras = req.body.constanciahoras;
    const P_idsolicitud = parseInt(req.body.idsolicitud);
    console.log(req.body);
    pool.query(
      "CALL updocumentosfinales(?,?,?);",
      [P_idsolicitud, P_linkinforme, P_contanciadehoras],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar estudiante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};
