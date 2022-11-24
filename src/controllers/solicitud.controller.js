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
    const P_centro_practicas = req.body.centro;
    const P_direccion = req.body.direccion;
    const P_departamento = req.body.departamento;
    const P_provincia = req.body.provincia;
    const P_distrito = req.body.distrito;
    const P_sup_nombre = req.body.supnombre;

    const P_sup_correo = req.body.supcorreo;
    const P_sup_telefono = req.body.suptelefono;
    const P_rem_nombre = req.body.remnombre;
    const P_rem_cargo = req.body.remcargo;
    const P_rem_correo = req.body.remcorreo;
    const P_fecha_inicio = req.body.fechainicio;

    const P_fecha_fin = req.body.fechafin;
    const P_det_actividades = req.body.actividades;
    const P_id_tipoprac = parseInt(req.body.tipoprac);
    const P_id_postulante = parseInt(req.body.idpostulante);

    pool.query(
      "CALL insertSolicitud(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        P_centro_practicas,
        P_direccion,
        P_departamento,
        P_provincia,
        P_distrito,
        P_sup_nombre,
        P_sup_correo,
        P_sup_telefono,
        P_rem_nombre,
        P_rem_cargo,
        P_rem_correo,
        P_fecha_inicio,
        P_fecha_fin,
        P_det_actividades,
        P_id_tipoprac,
        P_id_postulante,
      ],
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
