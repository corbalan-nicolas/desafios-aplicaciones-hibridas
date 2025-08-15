const ProductManager = require('./ProductManager')
const manager = new ProductManager()

async function testMethods() {
  const idProd0 = await manager.addProduct('God of War II', false)                    // 0
  const idProd1 = await manager.addProduct('Crash Bandicoot Twinsanity', false)       // 1
  const idProd2 = await manager.addProduct('God Hand', false)                         // 2
  const idProd3 = await manager.addProduct('Metal Gear Solid 3: Snake Eater', false)  // 3
  const idProd4 = await manager.addProduct('Grand Theft Auto: San Andreas', false)    // 4
  const idProd5 = await manager.addProduct('Shadow of the Colossus', false)           // 5
  const idProd6 = await manager.addProduct('Resident Evil 4', false)                  // 6
  const idProd7 = await manager.addProduct('BULLY', false)                            // 7
  const idProd8 = await manager.addProduct('Silent Hill 2', false)                    // 8
  const idProd9 = await manager.addProduct('Guitar Hero III')                         // 9
  const ids = [idProd0, idProd1, idProd2, idProd3, idProd4, idProd5, idProd6, idProd7, idProd8, idProd9]
  
  // await manager.addProduct(['Guitar Hero III', 'Otra cosa']) // Esto debería lanzar un error
  // await manager.addProduct('      ') // Esto debería lanzar un error

  const allProducts = await manager.getProducts()
  const search = await manager.getProductById(ids[1])

  console.log('----- Todos los productos -----')
  console.table(allProducts)
  console.log('----- Búsqueda por ID -----')
  console.table(search)
}

testMethods()
  .then(() => {
    console.log('¡Todo salió bien!')
  })
  .catch((e) => {
    console.log('¡Ups! Algo salió mal...')
    console.error(e)
  })
