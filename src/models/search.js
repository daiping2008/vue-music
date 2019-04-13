import HTTP from '@/utils/http'
import { _CLOUD_MUSIC_HIS_ } from '@/utils/storageKeys'
const MAX_CLOUD_MUSIC_MAX_HIS = 10
class SearchModel extends HTTP {
  getSearchHot () {
    return this.request('/search/hot')
  }

  getSearchSuggest (q) {
    return this.request(`/search/suggest?keywords=${q}`)
  }

  getHis () {
    return JSON.parse(localStorage.getItem(_CLOUD_MUSIC_HIS_))
  }

  setHis (value) {
    if (!value) return
    const arr = this.getHis()
    if (!arr) {
      localStorage.setItem(_CLOUD_MUSIC_HIS_, JSON.stringify([value]))
      return
    }
    if (arr.includes(value)) return
    if (arr.length >= MAX_CLOUD_MUSIC_MAX_HIS) {
      arr.pop()
    }
    arr.unshift(value)
    localStorage.setItem(_CLOUD_MUSIC_HIS_, JSON.stringify(arr))
  }
}

export default SearchModel
