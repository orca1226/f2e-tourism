<script>
export default {
  methods: {
    /**
     * api 取得活動資料
     */
    getActivity (paramsObj) {
      const today = new Date()
      const params = {
        $filter: `StartTime gt ${today.toISOString()}`,
        $top: 20,
        ...paramsObj
      }
      return this.$api.tourism.getActivity(params)
        .then((res) => {
          return this.dataManager(res.data, 'activity')
        })
    },
    /**
     * api 取得餐飲資料
     */
    getFood (paramsObj) {
      const params = {
        $top: 30,
        ...paramsObj
      }
      return this.$api.tourism.getFood(params)
        .then((res) => {
          return this.dataManager(res.data, 'food')
        })
    },
    /**
     * api 取得旅宿資料
     */
    getHotel (paramsObj) {
      const params = {
        $top: 20,
        ...paramsObj
      }
      return this.$api.tourism.getHotel(params)
        .then((res) => {
          return this.dataManager(res.data, 'hotel')
        })
      // }
    },
    /**
     * 資料處理，過濾有圖片資料並整理所需的資料格式
     */
    dataManager (data, type) {
      return data.filter((item) => 'PictureUrl1' in item.Picture).map(item => {
        // 處理{Class}，hotel的型別為字串，其他資料為物件
        // 將其統一成陣列回傳
        let classes = []
        if (type !== 'hotel') {
          Object.keys(item).forEach(key => {
            if (key.indexOf('Class') !== -1) {
              classes.push(item[key])
            }
          })
        } else {
          classes = [item.Class]
        }
        return {
          ...item,
          Picture: {
            PictureUrl: item.Picture.PictureUrl1,
            PictureUrlDescription: item.Picture.PictureUrl1
          },
          Class: classes
        }
      })
    }
  }
}
</script>

<style>

</style>
