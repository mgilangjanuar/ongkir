import { BaseExpedition } from './Base'

export class Tiki extends BaseExpedition {
  public constructor() {
    super('tiki')
    this.mappingTableResult = {
      service: 0,
      price: 1,
      etd: 2
    }
  }

  protected buildParams(): any {
    return {
      ...super.buildParams(),
      ['cacheDisabledtiki']: 10
    }
  }
}