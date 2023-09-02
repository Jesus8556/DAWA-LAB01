const http = require('http');
const fs = require('fs');
const path = require('path'); // Importa el módulo 'path' de Node.js

http.createServer(function (solicitud, respuesta) {
    const rutaArchivo = './' + (solicitud.url === '/' ? 'index.html' : solicitud.url); 

    fs.readFile(path.join(__dirname, rutaArchivo), function (error, contenido) {
        if (error) {
            respuesta.writeHead(404);
            respuesta.end('Archivo no encontrado');
        } else {
            respuesta.writeHead(200, { 'Content-Type': 'text/html' }); // Ajusta el tipo de contenido según corresponda (text/html para HTML, text/javascript para JS, etc.)
            respuesta.write(contenido);
            respuesta.end();
        }
    });
}).listen(8080);
