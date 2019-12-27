# ongkir

Get the shipping charges from logistic services in Indonesia.

## Install

```shell
npm i @mgilangjanuar/ongkir --save
```

## Example

```typescript
import { JNE } from '@mgilangjanuar/ongkir'

const jne = new JNE()

// set weight (kg)
jne.setWeight(1)

// search the origin location
const origins = await jne.queryOrigins('depok')

// set origin
test.setOrigin(origins[0])

// search the destinations location
const dests = await test.queryDestinations('setiabudi')

// set destination
test.setDestination(dests[0])

// profit!
const results = await test.getShippingCharges()

console.log(results)
```

## License

MIT
