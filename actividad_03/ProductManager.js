const fs = require('fs/promises')

class ProductManager {
  // Properties
  #PATH_DB_PRODUCTS = 'db/products.json'
  products = []

  constructor(products = []) {
    this.products = products
  }

  async saveProducts() {
    fs.writeFile(this.#PATH_DB_PRODUCTS, JSON.stringify(this.products))
  }

  /**
   * Valida el nombre recibido y agrega un objeto con {id, nombre} al array de productos
   * @param {String} product Nombre del producto
   * @param {Boolean} updateDB (true por default) Actualiza el JSON
   * @returns 
   */
  async addProduct(product) {
    // Validaciones escenciales
    if(typeof product !== 'string') {
      throw new Error(`Se esperaba un string con el nombre del producto, pero se recibió un "${typeof product}"`)
    }
    
    // Variables y Sanitización
    const id = crypto.randomUUID()
    const name = product.trim()

    // Otras validaciones
    if(name === '') {
      throw new Error('El nombre del producto no puede estar vacío')
    }

    // Todo está ok ✅
    this.products.push({ id, name })
    await this.saveProducts()
    return id
  }

  async getProducts() {
    let result = await fs.readFile(this.#PATH_DB_PRODUCTS)
    result = JSON.parse(result.toString())

    return result || []
  }

  async getProductById(id, array = false) {
    if(array === false) {
      array = await this.getProducts()
    }

    const result = array.find(prod => prod.id === id)
    
    if(!result) {
      console.error('Not Found')
      return {}
    }

    return result
  }

  async deleteProductById(id) {
    this.products = await this.getProducts()
    let index = this.products.findIndex(prod => prod.id === id)

    if(index == -1) {
      return 'Not found'
    }

    this.products.splice(index, 1)
    await this.saveProducts()

    return 'Borrado :)'
  }

  async updateProductById(id, name) {
    this.products = await this.getProducts()
    let index = this.products.findIndex(prod => prod.id === id)

    if(index == -1) {
      return 'Not found'
    }

    this.products.splice(index, 1, {id, name})
    await this.saveProducts()

    return 'Updated!'
  }
}

module.exports = ProductManager