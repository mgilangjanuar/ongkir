import { BaseExpedition } from './Base'

export default class extends BaseExpedition {
  public constructor() {
    super('jne')
  }

  protected buildParams(): any {
    return {
      ...super.buildParams(),
      ['cacheDisabledjne']: 10,
      ['captchajne']: 665
    }
  }
}