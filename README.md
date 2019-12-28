# ongkir

Get the shipping charges from logistic services in Indonesia.

## Install

```shell
npm i ongkir --save
```

## Example

```typescript
import { JNE } from 'ongkir'

const jne = new JNE()

// set weight (kg)
jne.setWeight(1)

// search the origin location
const origins = await jne.queryOrigins('depok')

// set origin
jne.setOrigin(origins[0])

// search the destinations location
const dests = await jne.queryDestinations('setiabudi')

// set destination
jne.setDestination(dests[0])

// profit!
const results = await jne.getShippingCharges()

console.log(results)
```

## Available Expeditions

- [ ] 21Express Jakarta
- [ ] Atri Xpress
- [ ] EMS Indonesia
- [ ] Expedito Express International
- [ ] Indah Logistic Cargo
- [x] JNE
- [x] J&T Express
- [ ] Lion Parcel
- [ ] NSS Express
- [ ] Pahala Express
- [ ] Pandu Logistics
- [x] Pos Indonesia
- [ ] Rapid Express
- [ ] RCL Logistics
- [ ] REX Kiriman Express
- [ ] RPX Express
- [ ] Sicepat Express
- [x] TIKI
- [x] Wahana

## License

MIT
