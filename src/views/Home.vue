<template>
  <div class="home">
    <!-- 載入畫面 -->
    <transition v-if="loading" name="fade">
      <div class="loading">
        <div class="loader">Loading...</div>
      </div>
    </transition>
    <!--載入完成後的樣板 -->
    <template v-else>
      <!-- hero section -->
      <section class="heroSection center-center">
        <div class="w-full">
          <div class="heroSection__words mx-auto">
            <h3 class="text-white text-4xl font-bold py-5 text-center letter-spacing--lg">想去哪裡玩？</h3>
            <p class="text-white text-center letter-spacing--lg">這裡共有上千個活動及美食等著你去一同體驗</p>
          </div>
          <!-- <SearchBar class="mx-auto mt-16" /> -->
        </div>
      </section>

      <!-- 縣市快選區塊 -->
      <section class="areaSelect relative h-min-[400px] xl:h-[300px]">
        <!-- 灰色背景色塊 -->
        <div class="areaSelect__bg absolute h-full bg-gray-50 w-4/5 rounded-br-4xl -z-1"></div>
        <!-- 裝飾1 -->
        <div class="absolute bottom-[-45%] -z-1"><embed :src="require('@/assets/images/deco1.svg')" type=""></div>
        <!-- 按鈕 -->
        <div class="center-center content-center h-full
        sm:w-full ml:w-4/5 mx-auto flex-wrap"
        >
          <div class="areaSelect__title ml:w-[150px] justify-end my-8">
            <div class="flex flex-col justify-center">
              <h3 class="text-3xl letter-spacing--lg mb-4 min-w-[100px] text-center xl:text-left">縣市快選</h3>
              <h6 class="letter-spacing--r text-gray-500">CHOOSE CITIES</h6>
            </div>
          </div>
          <AreaBtn
            class="z-1 w-full xl:w-3/4"
            @onClickCountyBtn="onclickCountyBtn"
          />
        </div>
      </section>

      <!-- 活動區塊 -->
      <section class="activityBlock relative z-10 w-full max-w-[1300px] mx-auto md:flex py-16 px-4 md:flex-wrap lg:flex-nowrap" v-if="dataActivity">
        <div class="text-center md:hidden">
          <h3 class="text-3xl py-6">
            多久沒有<br>
            出門走走了呢？
          </h3>
          <h6 class="letter-spacing--r text-gray-500 mb-10">LET'S GET OUT</h6>
          <div class="btn-action --lg hidden lg:flex">更多funny</div>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto">
          <div
            v-for="(activity, index) in dataActivity"
            :key="activity.id"
            class="mr-6 mb-6 transform"
            :class="{'lg:translate-x-20': ((index+1)/3) > 1 }"
          >
            <InfoCard
              class="mx-auto"
              :img="activity.Picture"
              :name="activity.Name"
              :caption="activity.Address"
              :labelList="activity.Class"
              :highlight="activity.City"
            />
          </div>
        </div>
        <div class="hidden md:block lg:pl-12 order-first w-full lg:w-auto lg:flex-grow lg:order-last text-center lg:text-left">
          <h3 class="text-3xl py-6">
            多久沒有<br>
            出門走走了呢？
          </h3>
          <h6 class="letter-spacing--r text-gray-500 mb-10">LET'S GET OUT</h6>
          <div class="btn-action --lg hidden lg:flex">更多funny</div>
        </div>
      </section>

      <!-- 美食區塊 -->
      <section class="relative min-h-[480px] flex items-center z-1">
        <!-- 裝飾2 -->
        <div class="absolute top-[-50%] -z-1 right-0"><img :src="require('@/assets/images/deco2_rounded.svg')" type=""></div>
        <!-- 灰底背景 -->
        <div class="areaSelect__bg absolute h-full bg-gray-50 w-2/5 rounded-br-full rounded-tr-full -z-1"></div>
        <!-- 標題 -->
        <div class="flex py-6 px-12 w-full overflow-hidden">
          <div class="pr-16 flex-shrink-0">
            <h3 class="text-3xl py-6">
              餐飲美食
            </h3>
            <h6 class="letter-spacing--r text-gray-500 mb-10">TASTY</h6>
            <div class="btn-action --lg hidden lg:flex">更多美味</div>
          </div>
          <!-- 水平輪播卡片 -->
          <vue-horizontal v-if="dataFood" class="horizontal w-[calc(100%-160px)]" responsive>
            <div
              class="photoCard relative h-[335px] w-[230px] rounded-10px overflow-hidden mr-6 shadow-md hover:shadow-lg hover:transform hover:-translate-y-2 transition pointer"
              v-for="(item, index) in dataFood"
              :key="index"
            >
              <img
                class="h-full object-cover"
                :src="item.Picture.PictureUrl"
                :alt="item.Picture.PictureUrlDescription"
              >
              <div class="photoCard__info absolute h-[40%] w-full bottom-0 pb-[20px] px-[14px] flex flex-col justify-end text-white">
                <div class="text-16 mb-4">{{ item.Name }}</div>
                <div class="flex justify-between text-12">
                  <div
                    v-for="(text,index) in item.Class"
                    :key="index"
                  >{{ text }}</div>
                  <div
                    class="label bg-black-light"
                  >{{ cityStr(item.Address) }}</div>
                </div>
              </div>
            </div>
          </vue-horizontal>
        </div>
      </section>

      <!-- 住宿區塊 -->
      <section class="hotelBlock px-4 py-24 sm:px-16 md:px-24 lg:px-36">
        <!-- 標題 -->
        <h3 class="text-3xl py-6 text-center">
          精選住宿
        </h3>
        <h6 class="letter-spacing--r text-center text-gray-500 mb-10">ACCOMENDATION</h6>
        <!-- 卡片 -->
        <div class="justify-center grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto max-w-[1300px]">
          <InfoCard
            v-for="(hotel, index) in dataHotel"
            class="mb-6 flex-grow lg:transform max-w-[290px] mx-auto"
            :class="{ 'xl:translate-y-4': index % 2 === 1   }"
            :key="hotel.id"
            :img="hotel.Picture"
            :name="hotel.Name"
            :caption="hotel.Address"
            :labelList="hotel.Class"
          />
        </div>
        <div class="btn-action --lg flex mx-auto mt-8">更多住宿</div>
      </section>
    </template>
  </div>
</template>

<script>
import SearchBar from '@/components/Searchbar.vue'
import AreaBtn from '@/components/AreaBtn.vue'
import InfoCard from '@/components/InfoCard.vue'
export default {
  name: 'Home',
  components: {
    // SearchBar,
    AreaBtn,
    InfoCard
  },
  data () {
    return {
      loading: true,
      dataActivity: null,
      dataFood: null,
      dataHotel: null
    }
  },
  filter: {
  },
  methods: {
    /**
     * 取地址前三個字 得縣市名稱
     */
    cityStr (val) {
      return val.slice(0, 3)
    },
    onclickCountyBtn (city) {
      this.$router.push({
        path: '/county',
        query: {
          county: city.City
        }
      })
    }

  },
  async created () {
    await this.axios.all([
      this.getFood().then(res => {
        this.dataFood = res.splice(0, 16)
      }),
      this.getActivity().then(res => {
        this.dataActivity = res.splice(0, 6)
      }),
      this.getHotel().then(res => {
        this.dataHotel = res.splice(0, 4)
      })
    ])
    setTimeout(() => {
      this.loading = false
    }, 500)
  }

}
</script>

<style lang="postcss">
  .heroSection {
    background:  linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url('../assets/images/heroImg.png') no-repeat center/cover;
    height: 50vh;
    h3 {
      text-shadow: 0px 4px 15px rgba(33, 43, 40, 0.37);
    }
    p {
      text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
    }
  }

  .photoCard__info {
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.53) 0%, rgba(0, 0, 0, 0) 100%);
  }
</style>
