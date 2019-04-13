
import HTTP from '@/utils/http'

class RecomModel extends HTTP {
  getBanner () {
    return this.request('/banner')
  }

  getRecommendList () {
    return this.request('/personalized')
  }
}

export default RecomModel
