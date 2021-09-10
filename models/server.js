const express = require('express');
const cors = require('cors');

class Server {

    //Se crea la aplicación express como propiedad en la clase servidor
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares (funciones que se ejecutan cuando levantamos el servidor)
        this.middlewares();
        //Rutas de la app
        this.router();
    }

    middlewares(){
        //Directorio publico
        this.app.use(express.static('public'));
        
        //CORS
        this.app.use(cors());

        //Lectura y Parseo del body
        this.app.use(express.json());
    }

    router() {
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }   

    listen() {
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        });
    }

}






module.exports = Server;