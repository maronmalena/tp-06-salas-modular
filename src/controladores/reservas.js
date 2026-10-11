function crearControladoresReservas(servicioReservas) {
  function listarReservas(req, res) {
    res.render("reservas/lista", {
      titulo: "Reservas de salas",
      reservas: servicioReservas.obtenerReservas(),
    });
  }

  function mostrarFormulario(req, res) {
    res.render("reservas/nueva", {
      titulo: "Nueva reserva",
      error: "",
      valores: {},
    });
  }

  function mostrarDetalle(req, res) {
    const id = Number(req.params.id);
    const reserva = servicioReservas.obtenerReservaPorId(id);

    if (!reserva) {
      return res.status(404).render("no-encontrado", {
        titulo: "Reserva no encontrada",
        mensaje: "La reserva solicitada no existe.",
      });
    }

    res.render("reservas/detalle", {
      titulo: "Detalle de reserva",
      reserva,
    });
  }

  function crearReserva(req, res) {
    servicioReservas.crearReserva(req.reservaValidada);
    res.redirect("/reservas");
  }

  return {
    listarReservas,
    mostrarFormulario,
    mostrarDetalle,
    crearReserva,
  };
}

module.exports = crearControladoresReservas;
