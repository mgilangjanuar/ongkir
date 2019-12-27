import { Subdistrict, SubdistrictType } from '../Geolocation'
import { BaseExpedition } from './Base'

export default class extends BaseExpedition {
  protected subdistrict?: SubdistrictType

  public constructor() {
    super('wahana')
    this.mappingTableResult = {
      service: 0,
      price: 1,
      etd: 2
    }
  }

  public async querySubdistrictDestinations(): Promise<SubdistrictType[]> {
    if (!this.destination) {
      throw new Error('destination city should defined first')
    }
    return await Subdistrict(this.expedition, this.destination?.id)
  }

  public setSubdistrict(subdistrict: SubdistrictType) {
    this.subdistrict = subdistrict
  }

  protected buildParams(): any {
    return {
      ...super.buildParams(),
      ['kecTujuanwahana_val']: this.subdistrict?.kode_kecamatan
    }
  }
}