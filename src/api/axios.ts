import axios from 'axios'

export default axios.create({
  baseURL: process.env.REACT_APP_RESAS_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY as string,
  },
})
