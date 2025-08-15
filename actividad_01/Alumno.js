class Alumno {
  #nombre
  #apellido
  #edad
  #carrera
  #materias

  constructor(nombre, apellido, edad, carrera, materias = []) {
    this.#nombre = nombre
    this.#apellido = apellido
    this.#edad = edad
    this.#carrera = carrera
    this.#materias = materias
  }

  // Metodos
  agregarMateria(materiaNombre) {
    this.#materias.push(materiaNombre)
  }

  // Getters
  get obtenerDatos() {
    return `${this.#nombre} ${this.apellido}`
  }

  get obtenerCarrera() {
    return this.#carrera
  }

  get obtenerMaterias() {
    return this.#materias
  }

  get obtenerEdad() {
    return this.#edad
  }

  // Setters
  set modificarNombre(nombre) {
    this.#nombre = nombre
  }

  set modificarApellido(apellido) {
    this.#apellido = apellido
  }
  
  set modificarEdad(edad) {
    this.#edad = edad
  }
  
  set modificarCarrera(carrera) {
    this.#carrera = carrera
  }
  
  set modificarMaterias(materias) {
    this.#materias = materias
  }
}

module.exports = Alumno