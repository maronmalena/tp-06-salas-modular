const express = require("express");
const { validarReserva } = require("../middleware/reservas");

function crearRouterReservas(controladores) {
  const router = express.Router();

  router.get("/", controladores.listarReservas);
  router.get("/nueva", controladores.mostrarFormulario);
  router.get("/:id", controladores.mostrarDetalle);
  router.post("/", validarReserva, controladores.crearReserva);

  return router;
}

module.exports = crearRouterReservas;
