function crearIdentificadorSolicitud() {
  let contadorSolicitudes = 0;

  return function identificarSolicitud(req, res, next) {
    contadorSolicitudes++;

    res.locals.solicitudId = `BIB-${String(contadorSolicitudes).padStart(4, "0")}`;

    next();
  };
}

function medirDuracion(req, res, next) {
  const inicio = Date.now();

  res.on("finish", () => {
    const duracion = Date.now() - inicio;

    console.log(
      res.locals.solicitudId,
      req.method,
      req.originalUrl,
      res.statusCode,
      `${duracion} ms`,
    );
  });

  next();
}

module.exports = {
  crearIdentificadorSolicitud,
  medirDuracion,
};
