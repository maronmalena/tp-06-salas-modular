# Trabajo práctico 06
## Proyecto de partida y cambios
El proyecto parte de una copia del Trabajo Práctico 05, que implementaba una aplicación para gestionar reservas de salas de estudio. El objetivo de este trabajo es reorganizar el código en módulos para separar las responsabilidades de configuración, arranque, aplicación, rutas, controladores, servicios y middleware, manteniendo el funcionamiento de la aplicación original.
## Instalación y ejecución
Para instalar las dependencias:npm install
Para iniciar el servidor:npm start
Para verificar el formato y analizar el código:npm run check
## Configuración del entorno
PORT: puerto en el que escucha el servidor. Su valor predeterminado es 3000.
NODE_ENV: entorno de ejecución. Su valor predeterminado es development.
## Mapa de módulos y dependencias
## Pipeline y contrato de rutas
El pipeline conserva el uso de Morgan para registrar solicitudes, los middleware de identificación y duración, la configuración de vistas EJS, los archivos estáticos, el procesamiento de formularios y las rutas de la aplicación.
## Matriz antes/después
## Formato y análisis estático
## Persistencia temporal y límites
Las reservas se almacenan en memoria durante la ejecución del servidor. Al reiniciar la aplicación, se recuperan los datos iniciales y se pierden las reservas creadas durante la ejecución anterior.