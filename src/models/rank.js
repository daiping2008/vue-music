import HTTP from '@/utils/http'

class RankModel extends HTTP {
  getHot (id) {
    return this.request(`/top/list?idx=${id}`)
  }
}

export default RankModel
