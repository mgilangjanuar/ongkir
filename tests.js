(async () => {
  const Test = require('./dist/expeditions').SicepatExpress

  try {
    const test = new Test()
    const origin = (await test.queryOrigins('jakar'))[0]
    console.log(origin)
    test.setOrigin(origin)
    const dest = (await test.queryDestinations('setiabudi'))[0]
    console.log(dest)
    test.setDestination(dest)
    console.log(await test.getShippingCharges())
  } catch (error) {
    console.log(error)
  }
})()