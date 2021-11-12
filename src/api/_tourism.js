import request from '@/api/request'

const tourism = {
  getScenicSpot (paramsObj) {
    const url = '/Tourism/ScenicSpot'
    return request.get(url, paramsObj)
  },
  getActivity (paramsObj) {
    const url = '/Tourism/Activity'
    return request.get(url, paramsObj)
  }
}
export default tourism
