import { BaseExpedition } from './Base'

export default class extends BaseExpedition {
  public constructor() {
    super('duasatu')
    this.mappingTableResult = {
      service: 0,
      price: 1,
      etd: 2
    }
    this.origin = {
      id: 'jakarta',
      label: 'Jakarta',
      value: 'Jakarta'
    }
  }
}