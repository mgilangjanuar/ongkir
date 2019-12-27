import { BaseExpedition } from './Base'

export class PosIndonesia extends BaseExpedition {
  protected length?: number

  protected width?: number

  protected height?: number

  protected productValue?: number

  public constructor() {
    super('pos')
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

  public setProductValue(value: number) {
    this.productValue = value
  }

  protected buildParams(): any {
    return {
      ...super.buildParams(),
      ['panjang']: this.length,
      ['lebar']: this.width,
      ['tinggi']: this.height,
      ['nilaiBarangpos']: this.productValue
    }
  }
}