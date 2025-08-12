class Alumno {
  nombre
  apellido
  edad
  carrera
  materias

  constructor(nombre, apellido, edad, carrera, materias = []) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.carrera = carrera
    this.materias = materias
  }

  // Metodos
  agregarMateria(materiaNombre) {
    this.materias.push(materiaNombre)
  }

  // Getters && Setters
  get obtenerCarrera() {
    return this.carrera
  }

  get obtenerDatos() {
    return `${this.nombre} ${this.apellido}`
  }

  get obtenerMaterias() {
    return this.materias
  }

  get obtenerEdad() {
    return this.edad
  }

  set modificarEdad(edad) {
    this.edad = edad
  }
}

module.exports = Alumno