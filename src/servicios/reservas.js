function crearServicioReservas(reservasIniciales) {
  const reservas = [...reservasIniciales];

  function obtenerReservas() {
    return reservas;
  }

  function obtenerReservaPorId(id) {
    return reservas.find((reserva) => reserva.id === id);
  }

  function crearReserva(datosReserva) {
    const nuevaReserva = {
      id:
        reservas.length > 0
          ? Math.max(...reservas.map((reserva) => reserva.id)) + 1
          : 1,
      ...datosReserva,
    };

    reservas.push(nuevaReserva);

    return nuevaReserva;
  }

  return {
    obtenerReservas,
    obtenerReservaPorId,
    crearReserva,
  };
}

module.exports = crearServicioReservas;
