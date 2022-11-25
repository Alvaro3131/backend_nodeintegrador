import { pool } from "../database";
export const getPostulante = async (req, res) => {
  try {
    pool.query("SELECT p.cod_alumno , u.nom_usuario postulante, u.num_doc, s.centro_practicas,s.distrito ,"+
    "s.provincia ,s.departamento ,s.direccion , st.nom_tipoprac, s.sup_nombre, s.sup_correo, "+
    "s.rem_nombre , s.rem_correo, s.fecha_inicio , s.fecha_fin "+
    "FROM usuario u inner join postulante p on u.id_usuario =p.id_usuario inner join solicitud s on  s.id_postulante  = p.id_postulante inner join solicitud_tipoprac st  on  s.id_tipoprac  = st.id_tipoprac;", function (err, result) {
      console.log(result);
      try {
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json("Error al listar postulantes");
      }
    });
  } catch (error) {
    return res.status(500).json("Error al listar postulantes");
  }
};
export const searchPostulante = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      pool.query(
        "SELECT p.cod_alumno , u.nom_usuario postulante, u.num_doc, s.centro_practicas,s.distrito ,s.provincia ,s.departamento ,s.direccion , st.nom_tipoprac, s.sup_nombre, s.sup_correo, s.rem_nombre , s.rem_correo, s.fecha_inicio , s.fecha_fin, s.fecha_reg  FROM usuario u inner join postulante p on u.id_usuario =p.id_usuario inner join solicitud s on  s.id_postulante  = p.id_postulante inner join solicitud_tipoprac st  on  s.id_tipoprac  = st.id_tipoprac where s.id_solicitud =104;",
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