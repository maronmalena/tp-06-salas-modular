const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");

const {
  crearIdentificadorSolicitud,
  medirDuracion,
} = require("./middleware/solicitudes");

const { prepararAreaReservas } = require("./middleware/reservas");
const crearControladoresReservas = require("./controladores/reservas");
const crearRouterReservas = require("./rutas/reservas");

function crearApp(servicioReservas, entorno) {
  const app = express();

  const controladores = crearControladoresReservas(servicioReservas);
  const reservasRouter = crearRouterReservas(controladores);

  app.set("view engine", "ejs");
  app.set("layout", "layouts/main");

  app.use(morgan(entorno === "production" ? "combined" : "dev"));
  app.use(crearIdentificadorSolicitud());
  app.use(medirDuracion);
  app.use(expressLayouts);
  app.use(express.static("public"));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.get("/", (req, res) => {
    res.render("inicio", {
      titulo: "Reservas de salas",
    });
  });

  app.get("/estado", (req, res) => {
    res.json({
      servicio: "activo",
      reservas: servicioReservas.obtenerReservas().length,
      solicitudId: res.locals.solicitudId,
    });
  });

  app.use("/reservas", prepararAreaReservas, reservasRouter);

  app.use((req, res) => {
    res.status(404).render("no-encontrado", {
      titulo: "Página no encontrada",
      mensaje: "La página solicitada no existe.",
    });
  });

  return app;
}

module.exports = crearApp;
