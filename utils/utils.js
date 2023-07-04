const fs = require("fs");

const leerArchivo = (archivo) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`../db/${archivo}`, "utf8", (error, data)=>{
            if(error) {
                console.log(`Error: ${error}`)
                reject("Error al leer el archivo")
            }
            resolve(JSON.parse(data))
        })
    })
} 

leerArchivo()