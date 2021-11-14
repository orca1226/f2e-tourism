<template>
  <div class="flex-col min-h-[225px] flex justify-start items-center">
    <!-- 大區域按鈕 -->
    <div class="w-full flex flex-wrap md:flex-nowrap justify-center">
      <div
        v-for="(area, index) in areaConfig" :key="index"
        class="areaBtn mx-[12px] xl:ml-[36px] transform w-[120px] h-[150px] bg-white rounded-15px flex-col center-center mb-4 md:mb-0"
        :class="{active: showCounty && showCounty.area === area.area}"
        @click="onClickAreaBtn(area)"
      >
        <div class="bgc-green pointer w-[76px] h-[76px] rounded-full center-center">
          <img
            class="w-[52px] h-[52px]"
            :src="require(`@/assets/images/icon_area_${area.src}.png`)"
            :alt="`${area.area}圖標`"
          >
        </div>
        <div class="mt-3">{{ area.area }}</div>
        <div v-if="showCounty && showCounty.area === area.area" class="h-[6px] w-[6px] rounded-full bg-gray-500 absolute bottom-2"></div>
      </div>
    </div>
    <div class="flex-grow flex flex-wrap justify-center md:flex-nowrap mt-8 min-h-[26px]" v-if="showCounty">
      <div
        v-for="(city, index) in showCounty.county"
        :key="index" class="countyBtn rounded-full center-center mx-2 pointer"
        @click="onClickCountyBtn(city)"
        :class="{'active': nowCounty && city.City === nowCounty.City }"
      >
        {{ city.CityName }}
      </div>
    </div>
  </div>
</template>

<script>
import areaConfig from '@/utils/areaConfig'
import countyConfig from '@/utils/countyConfig.js'

export default {
  name: 'AreaBtn',
  props: {
    alwaysShowCounty: {
      type: Boolean
    },
    nowCounty: {
      type: Object
    }
  },
  data () {
    return {
      areaConfig: areaConfig,
      countyConfig: countyConfig,
      showCounty: null
    }
  },
  methods: {
    onClickAreaBtn (area) {
      if (this.showCounty && area.area === this.showCounty.area && !this.alwaysShowCounty) {
        this.showCounty = null
      } else {
        this.showCounty = area
      }
    },
    onClickCountyBtn (city) {
      this.$emit('onClickCountyBtn', city)
    },
    getCountyToShow (newVal) {
      this.showCounty = this.areaConfig.find(item => item.area === newVal.area)
    }
  },
  created () {
    if (this.nowCounty) {
      this.getCountyToShow(this.nowCounty)
    }
  },
  watch: {
    nowCounty (newVal) {
      console.log(newVal)
      this.getCountyToShow(newVal)
      // console.log(area)
    }
  }
}
</script>

<style lang="scss">
  .areaBtn {
    cursor: pointer;
    @apply shadow-btn;
    transition: .3s;
    &:hover, &.active {
      @apply shadow-btnFloat;
    }
    &.active {
    @apply text-green-light;
    }
  }
  .countyBtn {
    position: relative;
    background: transparent;
    padding: 10px 18px 14px;
    transition: .3s;
    &:hover, &.active {
      @apply bg-white;
      &::after{
        content: '';
        height: 4px;
        border-radius: 4px;
        width: 13px;
        @apply bg-green-light absolute bottom-[4px];
      }
    }
  }
</style>
