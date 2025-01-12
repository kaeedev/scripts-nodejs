const net = require('node:net')

//Funcion para crear un puerto disponible
function findAvailablePort (desiredPort) {
    return new Promise((resolve, reject) => {
        const server = net.createServer() //crear servidor

        server.listen(desiredPort, () => { //donde el servidor va a escuchar, en el puerto deseado
            const {port} = server.address()
            server.close(() => {
                resolve(port)
            })
        })

        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                findAvailablePort(0).then(port => resolve(port))
            } else {
                reject(err)
            }
        })
    })
}

module.exports = { findAvailablePort }