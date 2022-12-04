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
      "SELECT *,(select link_file  from solicitud_documentos sd where id_solicitud=s.id_solicitud and id_soltipodoc=1) as GUIAPRACTICAS,(select link_file  from solicitud_documentos sd where id_solicitud=s.id_solicitud and id_soltipodoc=2) as CONSTANCIAHORAS,(select link_file  from solicitud_documentos sd where id_solicitud=s.id_solicitud and id_soltipodoc=3) as INFO FROM solicitud s join postulante p on s.id_postulante=p.id_postulante join usuario u ON p.id_usuario=u.id_usuario join solicitud_tipoprac st ON st.id_tipoprac =s.id_tipoprac join solicitud_estado se on s.id_solestado=se.id_solestado  where p.id_postulante=? and s.id_tipoprac=?;",
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
    console.log(
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
      P_id_postulante
    );
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

export const rechazarSolicitud = async (req, res) => {
  const id = parseInt(req.params.id);
  const idpostulante = parseInt(req.params.idpostulante);
  try {
    pool.query(
      "CALL SP_RECHAZAR_SOLICITUD(?)",
      [id, idpostulante],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al rechazar la solicitud");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al rechazar solicitudes");
  }
};

export const observarSolicitud = async (req, res) => {
  const id = parseInt(req.params.id);
  const observacion = req.body.observacion;
  console.log(id, observacion);
  try {
    pool.query(
      "CALL SP_OBSERVAR_SOLICITUD(?,?)",
      [id, observacion],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al observar la solicitud");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al observar solicitudes");
  }
};

export const validarSolicitud = async (req, res) => {
  const id = parseInt(req.body.id);
  try {
    pool.query(
      "CALL SP_VALIDAR_APTITUD_SOLICITUD(?)",
      [id],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al validar la solicitud");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al validar solicitudes");
  }
};

export const agregarCartayGuia = async (req, res) => {
  const id = parseInt(req.body.id);
  const carta = req.body.link_carta;
  const guia = req.body.link_guia;
  try {
    pool.query(
      "CALL SP_AGREGAR_CARTA_PRESENTACION(?,?,?)",
      [id, carta, guia],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al agregar carta a la solicitud");
        }
      }
    );
  } catch (error) {
    return res
      .status(500)
      .json("Error al agrgar carta + guia de practicas solicitudes");
  }
};
