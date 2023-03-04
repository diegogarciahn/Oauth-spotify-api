const express = require('express');
const cors = require('cors');
const path = require('path');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/spotify';

        // Midlewares: funciones que siempre se van a ejecutar cuando iniciamos un servidor
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json()); // Función de express que permite leer y parsear el body de una petición

        // Directorio público
        this.app.use(express.static('public'));

        this.app.set('view engine', 'html'); // seteamos la extensión de archivo de vista
        this.app.engine('html', require('ejs').renderFile); // seteamos el motor de plantillas
        console.log();
        this.app.set('views', path.join(__dirname,'../public'));

    }

    // Endpoints 
    routes() {
        // Ruta de usuarios api
        this.app.use(this.usuariosRoutePath, require('../routes/spotify.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }

}

module.exports = Server;