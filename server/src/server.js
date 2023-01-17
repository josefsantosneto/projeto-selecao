const http = require('http');
const { mongoConnect } = require('../src/services/mongo.js');

const app = require('./app');


const PORT = process.env.PORT || 8000;

const server = http.createServer(app);


async function startServer() {
    await mongoConnect();


    server.listen(PORT, ()=>{
        console.log( `Listening on port ${PORT}...`);
    });
}

startServer();



