import { pool } from "../database.js";
import helpers from "../libs/helpers.js";
export const getSupervisores = async (req, res) => {
  try {
    pool.query(
      "select * from usuario where id_rol=2;",

      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar supervisores");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar error al listar supervisores");
  }
};
export const getSupervisoresdni = async (req, res) => {
  const id = parseInt(req.params.dni);
  try {
    pool.query(
      "select * from usuario where id_rol=2 and num_doc=?;",
      [id],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar supervisores");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar error al listar supervisores");
  }
};

export const createSupervisor = async (req, res) => {
  const P_documento = req.body.documento;
  const P_nombre = req.body.nombre;
  const P_correo = req.body.correo;
  const P_idtipodoc = req.body.tipodocumento;
  const password = P_documento + P_documento.substr(0, 2);
  const pass = await helpers.encryptPassword(password);
  console.log(password);
  try {
    pool.query(
      "INSERT INTO usuario (num_doc, nom_usuario, usuario, clave, correo, tipo_rol, estado_usuario, fecha_creacion, id_tipodoc, id_rol) VALUES(?, ?, ?, ?, ?, '', '1', now(), ?, 2);",
      [P_documento, P_nombre, P_documento, pass, P_correo, P_idtipodoc],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar supervisores");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar error al listar supervisores");
  }
};

export const updateSupervisor = async (req, res) => {
  const id = parseInt(req.params.id);
  const P_correo = req.body.correo;

  try {
    pool.query(
      "UPDATE usuario set correo=? where id_usuario=?;",
      [P_correo, id],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar supervisores");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar error al listar supervisores");
  }
};
export const updateestadoSupervisor = async (req, res) => {
  const id = parseInt(req.params.id);
  const P_estado = req.body.estado;

  try {
    pool.query(
      "UPDATE usuario set estado_usuario=? where id_usuario=?;",
      [P_estado, id],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar supervisores");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar error al listar supervisores");
  }
};
