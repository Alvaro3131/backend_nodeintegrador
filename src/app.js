import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes";
import accesoRoutes from "./routes/acceso.routes";
import postulanteRoutes from "./routes/postulante.routes";
import rol_accesoRoutes from "./routes/rol_acceso.routes";
import rolRoutes from "./routes/rol.routes";
import solicitudRoutes from "./routes/solicitud.routes";
import solicitud_documentosRoutes from "./routes/solicitud_documentos.routes";
import solicitud_estadoRoutes from "./routes/solicitud_estado.routes";
import solicitud_tipopracRoutes from "./routes/solicitud_tipoprac.routes";
import usuarioRoutes from "./routes/usuario.routes";
import tipodocsRoutes from "./routes/tipodoc.routes";
const app = express();
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(
    "<h1>Bienvenidos al Backend del Proyecto Integrador</h1><p>Desarrollado por el grupo N° 1</p>"
  );
});
app.use("/api/auth", authRoutes);
app.use("/api/auth/solicitudtipoprac", solicitud_tipopracRoutes);
app.use("/api/auth/solicitud", solicitudRoutes);
app.use("/api/auth/solicituddocumentos", solicitud_documentosRoutes);
app.use("/api/auth/usuario", usuarioRoutes);
app.use("/api/auth/postulante", postulanteRoutes);
app.use("/api/auth/tipodoc", tipodocsRoutes);
export default app;
