import { BaseExpedition } from './Base'

export default class extends BaseExpedition {
  protected length?: number

  protected width?: number

  protected height?: number

  public constructor() {
    super('jnt')
  }

  public setLength(length: number) {
    this.length = length
  }

  public setWidth(width: number) {
    this.width = width
  }

  public setHeight(height: number) {
    this.height = height
  }

  protected buildParams(): any {
    return {
      ...super.buildParams(),
      ['panjang']: this.length,
      ['lebar']: this.width,
      ['tinggi']: this.height
    }
  }
}