import fs from 'node:fs'
import { readFile } from 'node:fs/promises'


//Saber los stats de archivos
const stats = fs.statSync('./free-port.js')
const statsTwo = fs.statSync('./server.js')

console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), //si es un directorio
    stats.isSymbolicLink(), //si es un enlace simbolico
    stats.size, //tamaño en bytes
)
console.log(
    statsTwo.isFile(), //si es un fichero
    statsTwo.isDirectory(), //si es un directorio
    statsTwo.isSymbolicLink(), //si es un enlace simbolico
    statsTwo.size, //tamaño en bytes
)

//Leer archivos con asincronia paralela

Promise.all([
    readFile('./free-port.js', 'utf-8'),
    readFile('./server.js', 'utf-8')
]).then(([text, secondText]) => {
    console.log('primer texto:', text),
    console.log('segundo texto:', secondText)
})