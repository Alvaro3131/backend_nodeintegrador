import { pool } from "../database";
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