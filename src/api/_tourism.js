import request from '@/api/request'

const tourism = {
  getScenicSpot (paramsObj) {
    const url = '/Tourism/ScenicSpot'
    return request.get(url, {
      params: paramsObj
    })
  },
  getActivity (paramsObj) {
    const url = '/Tourism/Activity'
    return request.get(url, {
      params: paramsObj
    })
  },
  getFood (paramsObj) {
    const url = '/Tourism/Restaurant'
    return request.get(url, {
      params: paramsObj
    })
  },
  getHotel (paramsObj) {
    const url = '/Tourism/Hotel'
    return request.get(url, {
      params: paramsObj
    })
  }
}
export default tourism
