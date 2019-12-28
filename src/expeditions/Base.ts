import Axios, { AxiosInstance } from 'axios'
import cheerio from 'cheerio'
import { Agent as HttpsAgent } from 'https'
import querystring from 'querystring'
import { ExpeditionType } from '.'
import { Location, LocationType } from '../Geolocation'

export type FeeDataType = {
  service: string,
  price: string,
  etd?: string | null
}

export type ShippingChargeType = {
  expedition: string,
  customerService: string,
  description: string,
  fees?: FeeDataType[]
}

export class BaseExpedition {

  protected axios: AxiosInstance

  protected expedition: ExpeditionType

  protected mappingTableResult: {
    service: number,
    price: number,
    etd: number
  }

  protected weight: number = 1

  protected origin?: LocationType

  protected destination?: LocationType

  public constructor(expedition: ExpeditionType) {
    this.axios = Axios.create({
      httpsAgent: new HttpsAgent({
        rejectUnauthorized: false
      })
    })
    this.expedition = expedition
    this.mappingTableResult = {
      service: 1,
      price: 2,
      etd: 3
    }
  }

  public async queryOrigins(query: string): Promise<LocationType[]> {
    return await Location(this.expedition, 'asal', query)
  }

  public async queryDestinations(query: string): Promise<LocationType[]> {
    return await Location(this.expedition, 'tujuan', query)
  }

  public setOrigin(location: LocationType) {
    this.origin = location
  }

  public setDestination(location: LocationType) {
    this.destination = location
  }

  public setWeight(weight: number) {
    this.weight = weight
  }

  public async getShippingCharges(): Promise<ShippingChargeType> {
    if (!this.origin || !this.destination) {
      throw new Error('Please defined origin and destination location')
    }

    const req = await this.axios.post(
      `https://cektarif.com/exp/${this.expedition}/${this.expedition}.tarif.php`,
      querystring.stringify(this.buildParams())
    )
    const $ = cheerio.load(req.data)
    let fees: FeeDataType[] = []
    $('.table-result > tbody > tr').each((_, el) => {
      fees.push({
        service: $('td', el).eq(this.mappingTableResult.service).text(),
        price: $('td', el).eq(this.mappingTableResult.price).text().trim().replace(/\,|\.|\s|rp/gi, ''),
        etd: $('td', el).eq(this.mappingTableResult.etd).text() || null
      })
    })
    return {
      expedition: $('h3.top_title').text().replace(/^Expedisi\ /gi, ''),
      customerService: $('h5').text().replace(/^Customer Service/gi, 'Phone'),
      description: $('label.control-label').text(),
      fees
    }
  }

  protected buildParams(): any {
    return {
      ['exp_name']: this.expedition,
      [`kotaAsal${this.expedition}_val`]: this.origin?.id,
      [`kotaAsal${this.expedition}`]: this.origin?.value,
      [`kotaTujuan${this.expedition}_val`]: this.destination?.id,
      [`kotaTujuan${this.expedition}`]: this.destination?.value,
      [`beratKg${this.expedition}`]: this.weight
    }
  }
}