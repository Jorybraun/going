import { __API_KEY__ } from '../../secrets'
import axios from 'axios'

export const getAddress = (address) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formatAddress(address)}&key=${__API_KEY__}`
  return axios.get(url)
}

const formatAddress = (address) => {
  return address.split(' ').join('+');
}
