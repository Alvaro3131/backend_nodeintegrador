import { pool } from "../database";

//vista de estudiante optener todas sus solicitudes del estudiantes
export const getSolicitudesid = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    pool.query(
      "SELECT * FROM solicitud s join postulante p on s.id_postulante=p.id_postulante join usuario u ON p.id_usuario=u.id_usuario join solicitud_tipoprac st ON st.id_tipoprac =s.id_tipoprac where p.id_postulante=?;",
      [id],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar solicitudes");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar solicitudes");
  }
};
export const getSolicitudesidtipo = async (req, res) => {
  const id = parseInt(req.params.id);
  const tipo = parseInt(req.params.tipo);
  try {
    pool.query(
      "SELECT * FROM solicitud s join postulante p on s.id_postulante=p.id_postulante join usuario u ON p.id_usuario=u.id_usuario join solicitud_tipoprac st ON st.id_tipoprac =s.id_tipoprac  where p.id_postulante=? and s.id_tipoprac=?;",
      [id, tipo],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar solicitudes");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar solicitudes");
  }
};


export const createSolicitud = async (req, res) => {
    try {
      const nombre = req.body.nombre;
      const marca = req.body.marca;
      const stock = parseInt(req.body.stock);
      const precio = parseFloat(req.body.precio);
      const idcategoria = parseInt(req.body.idcategoria);
      pool.query(
        "INSERT INTO productos(nombre, marca, stock, precio, estado, idcategoria) VALUES(?, ?, ?, ?, 1, ?); ",
        [nombre, marca, stock, precio, idcategoria],
        function (err, result) {
          console.log(result);
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