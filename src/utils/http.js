import axios from 'axios'
import { config } from '@/config'
class HTTP {
  request (url, data, method = 'GET') {
    return new Promise((resolve, reject) => {
      return axios({
        url: config.baseUrl + url,
        data,
        method
      }).then(res => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(res)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default HTTP
