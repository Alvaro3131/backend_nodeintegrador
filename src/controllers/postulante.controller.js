import { pool } from "../database";
const helpers = require("../libs/helpers");
export const datosPostulante = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    pool.query(
      "SELECT * FROM postulante where id_usuario=?",
      [id],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar postulante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar postulante");
  }
};

export const getPostulante = async (req, res) => {
  try {
    pool.query(
      "SELECT p.id_postulante, p.cod_alumno, u.nom_usuario postulante, u.correo, u.num_doc, p.h_comunitarias, p.h_clinicas, u.estado_usuario, p.id_usuario FROM usuario u inner join postulante p on u.id_usuario =p.id_usuario;",
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar postulantes");
        }
      }
    );
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

export const crearPostulante = async (req, res) => {
  try {
    const p_vNumdoc = req.body.num_doc;
    console.log(p_vNumdoc);
    const p_vNomUsuario = req.body.nom_usuario;
    const p_vClave = p_vNumdoc + p_vNumdoc.substr(0, 2);
    const p_vCorreo = req.body.correo;
    const p_nIdTipodoc = req.body.id_tipodoc;
    const p_vCodAlumno = req.body.cod_alumno;
    const p_cPracticasComunitarias = req.body.h_comunitarias;
    const p_cPracticasClinicas = req.body.h_clinicas;
    const pass = await helpers.encryptPassword(p_vClave);
    pool.query(
      "CALL SP_AGREGAR_NUEVO_POSTULANTE(?,?,?,?,?,?,?,?)",
      [
        p_vNumdoc,
        p_vNomUsuario,
        pass,
        p_vCorreo,
        p_nIdTipodoc,
        p_vCodAlumno,
        p_cPracticasComunitarias,
        p_cPracticasClinicas,
      ],
      function (err, result) {
        console.log(result);
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al crear postulante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al crear postulantes");
  }
};

export const updatePostulante = async (req, res) => {
  const idpostu = parseInt(req.params.idpostu);
  const idusuario= parseInt(req.params.idusuario);
  const P_nomusuario= req.body.nom_usuario;
  const P_correo = req.body.correo;
  const P_PracticasComunitarias = req.body.h_comunitarias;
  const P_PracticasClinicas = req.body.h_clinicas;

  try {
    pool.query(
      "CALL SP_EDITAR_POSTULANTE(?,?,?,?,?,?)",
      [idpostu,idusuario,P_nomusuario,P_correo,P_PracticasComunitarias,P_PracticasClinicas],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al editar postulante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al editar postulante");
  }
};

export const updateestadoPostulante = async (req, res) => {

  const id = parseInt(req.params.id);
  const P_estado = req.body.estado;
  console.log(P_estado);
  try {
    pool.query(
      "UPDATE usuario set estado_usuario=? where id_usuario=?;",
      [P_estado, id],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al eliminar postulante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al eliminar postulante");
  }
};