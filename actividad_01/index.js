const Alumno = require('./Alumno.js')

const a1 = new Alumno('Nicolas Leonel', 'Corbalan', 20, 'Desarrollo Web')

a1.agregarMateria('Aplicaciones Híbridas')
a1.agregarMateria('Proyecto Final')
a1.modificarEdad = 53

console.log(a1.obtenerDatos)
console.log(a1.obtenerCarrera)
console.log(a1.obtenerEdad, 'años')
console.table(a1.obtenerMaterias)