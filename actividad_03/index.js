const ProductManager = require('./ProductManager')
const manager = new ProductManager()

async function testMethods() {
  await manager.deleteProductById('68e67a5f-772e-4ba9-bdca-9677da84c9f4')
  await manager.updateProductById('b81e83a5-afdd-4b4e-b306-70c5ba2e6498', 'Crash bandicoot y las viejas locas')
}

testMethods()
  .then(() => {
    console.log('¡Todo salió bien!')
  })
  .catch((e) => {
    console.log('¡Ups! Algo salió mal...')
    console.error(e)
  })