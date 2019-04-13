import HTTP from '@/utils/http'

class SingerModel extends HTTP {
  getSinger () {
    return this.request('/top/artists?limit=100')
  }
}

export default SingerModel
