import { BaseExpedition } from './Base'

export class SicepatExpress extends BaseExpedition {
  public constructor() {
    super('sicepat')
    this.mappingTableResult = {
      service: 0,
      price: 2,
      etd: 3
    }
  }
}