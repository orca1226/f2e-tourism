<template>
  <div class="County">
    <!-- 載入畫面 -->
    <transition v-if="loading" name="fade">
      <div class="loading">
        <div class="loader">Loading...</div>
      </div>
    </transition>
    <section class="selectArea bg-gray-50">
      <img :src="require('@/assets/images/banner_county.png')" alt="海洋風景圖">
      <div class="py-16">
        <h3 class="text-center text-2xl letter-spacing--lg mb-12 md:min-w-[100%] lg:min-w-[100px">縣市快選</h3>
        <AreaBtn
          alwaysShowCounty
          :nowCounty="nowCounty"
          @onClickCountyBtn="onClickCountyBtn"
        />
      </div>
    </section>

    <div class="w-[80%] max-w-[1200px] mx-auto">
      <section class="scenicSpot py-12 w-full">
        <h3 class="text-2xl mb-6"><span class="text-green">{{ nowCounty.CityName }}</span> 景點介紹</h3>
        <vue-horizontal
          v-if="dataScenicSpot"
          class="horizontal w-full"
        >
          <div
            v-for="(scenicSpot) in dataScenicSpot"
            :key="scenicSpot.id"
            class="mr-6 mb-6"
          >
            <InfoCard
              type="scenicSpot"
              :img="scenicSpot.Picture"
              :name="scenicSpot.Name"
              :caption="scenicSpot.DescriptionDetail"
              :openTime="scenicSpot.OpenTime"
            />
          </div>
        </vue-horizontal>
      </section>

      <section class="activity py-12">
        <h3 class="text-2xl mb-6">特色活動</h3>
        <vue-horizontal
          v-if="dataScenicSpot"
          class="horizontal w-full"
        >
          <div
            v-for="(activity) in dataActivity"
            :key="activity.id"
            class="mr-6 mb-6"
          >
            <InfoCard
              type="activity"
              :img="activity.Picture"
              :name="activity.Name"
              :caption="activity.DescriptionDetail"
              :openTime="activity.OpenTime"
            />
          </div>
        </vue-horizontal>
      </section>

      <section class="food py-12">
        <h3 class="text-2xl mb-6">餐飲美食</h3>
        <vue-horizontal
          v-if="dataFood && dataFood.length > 0"
          class="horizontal w-full"
        >
          <div
            v-for="(food) in dataFood"
            :key="food.id"
            class="mr-6 mb-6"
          >
            <InfoCard
              type="food"
              :img="food.Picture"
              :name="food.Name"
              :caption="food.DescriptionDetail"
              :openTime="food.OpenTime"
            />
          </div>
        </vue-horizontal>
        <div v-else class="text-gray-500">目前沒有資料</div>
      </section>

      <section class="scenicSpot py-12">
        <h3 class="text-2xl mb-6">優質住宿</h3>
        <vue-horizontal
          v-if="dataHotel && dataHotel.length > 0"
          class="horizontal w-full"
        >
          <div
            v-for="(hotel) in dataHotel"
            :key="hotel.id"
            class="mr-6 mb-6"
          >
            <InfoCard
              type="hotel"
              :img="hotel.Picture"
              :name="hotel.Name"
              :caption="hotel.DescriptionDetail"
              :openTime="hotel.OpenTime"
            />
          </div>
        </vue-horizontal>
        <div v-else class="p-4">目前沒有資料</div>
      </section>
    </div>
  </div>
</template>

<script>
import AreaBtn from '@/components/AreaBtn.vue'
import InfoCard from '@/components/InfoCard.vue'

import countyConfig from '@/utils/countyConfig.js'

export default {
  name: 'County',
  components: {
    AreaBtn,
    InfoCard
  },
  computed: {
    countyName () {
      return this.$route.query.county
    }
  },
  data () {
    return {
      loading: true,
      countyConfig: countyConfig,
      nowCounty: null,
      dataScenicSpot: null,
      dataFood: null,
      dataActivity: null,
      dataHotel: null
    }
  },
  methods: {
    onClickCountyBtn (city) {
      if (this.countyName === city.City) return
      this.$router.replace({
        query: {
          county: city.City
        }
      })
      this.getNowCounty()
    },
    getNowCounty () {
      this.nowCounty = this.countyConfig.find(item => item.City === this.countyName)
      this.apiGetData()
    },
    async apiGetData () {
      this.loading = true
      await this.axios.all([
        this.$api.tourism.getCityScenicSpot({
          city: this.countyName
        }).then(res => {
          const data = this.dataManager(res.data, 'scenicSpot')
          this.dataScenicSpot = data.splice(0, 20)
        }),
        this.$api.tourism.getCityFood({
          city: this.countyName
        }).then(res => {
          this.dataFood = this.dataManager(res.data, 'food')
        }),
        this.$api.tourism.getCityActivity({
          city: this.countyName
        }).then(res => {
          this.dataActivity = this.dataManager(res.data, 'activity')
          // this.dataActivity = data.splice(0, 6)
        }),
        this.$api.tourism.getCityHotel({
          city: this.countyName
        }).then(res => {
          this.dataHotel = this.dataManager(res.data, 'hotel')
        })
      ])
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  },
  created () {
    this.getNowCounty()
  }
}
</script>
