import Axios from 'axios'
import https from 'https'
import querystring from 'querystring'
import { ExpeditionType } from './expeditions'

export type LocationType = {
  id: string,
  label: string,
  value: string
}

export type SubdistrictType = {
  kode_kecamatan: string,
  nama_kecamatan: string
}

const axios = Axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

export async function Location(expedition: ExpeditionType, param: 'asal' | 'tujuan', term: string): Promise<LocationType[]> {
  const req = await axios.get(`https://cektarif.com/exp/${expedition}/${expedition}.getoption.php`, {
    params: {
      s: param,
      term
    }
  })
  return req.data
}

export async function Subdistrict(expedition: ExpeditionType, cityId: string): Promise<SubdistrictType[]> {
  const req = await axios.post(`https://cektarif.com/exp/${expedition}/${expedition}.getkecamatan.php`, querystring.stringify({ par: 'val' }), {
    params: {
      kode_kota: cityId
    }
  })
  return req.data
}