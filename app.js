//Importaciones propias de node
/**/
//Importaciones de terceros
require('dotenv').config();


const Server = require('./models/server');
const server = new Server();

server.listen();