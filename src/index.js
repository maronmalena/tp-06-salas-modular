const crearApp = require("./app");
const { puerto, entorno } = require("./configuracion");
const crearServicioReservas = require("./servicios/reservas");

const reservasIniciales = [
  {
    id: 1,
    estudiante: "María López",
    email: "marialopez@gmail.com",
    sala: "Sala Norte",
    fecha: "2026-09-23",
    turno: "Mañana",
    personas: 2,
  },
  {
    id: 2,
    estudiante: "Juan Pérez",
    email: "jperez@gmail.com",
    sala: "Sala Sur",
    fecha: "2026-09-24",
    turno: "Tarde",
    personas: 4,
  },
  {
    id: 3,
    estudiante: "Ana Gómez",
    email: "anag@gmail.com",
    sala: "Sala Multimedia",
    fecha: "2026-09-25",
    turno: "Noche",
    personas: 3,
  },
  {
    id: 4,
    estudiante: "Pedro Díaz",
    email: "pedrodiaz@gmail.com",
    sala: "Sala Norte",
    fecha: "2026-09-26",
    turno: "Mañana",
    personas: 1,
  },
];

const servicioReservas = crearServicioReservas(reservasIniciales);
const app = crearApp(servicioReservas, entorno);

app.listen(puerto, () => {
  console.log(`Servidor iniciado en http://localhost:${puerto} (${entorno})`);
});
