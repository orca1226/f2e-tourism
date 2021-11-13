<template>
  <div class="flex-col min-h-[225px] flex justify-start items-center">
    <!-- 大區域按鈕 -->
    <div class="flex">
      <div
        v-for="(area, index) in config" :key="index"
        class="areaBtn ml-[24px] xl:ml-[36px] transform w-[120px] h-[150px] bg-white rounded-15px flex-col center-center"
        :class="{active: showCounty && showCounty.title === area.title}"
        @click="onClickAreaBtn(area)"
      >
        <div class="bgc-green pointer w-[76px] h-[76px] rounded-full center-center">
          <embed :src="require(`@/assets/images/icon_area_${area.src}.svg`)">
        </div>
        <div class="mt-3">{{ area.title }}</div>
      </div>
    </div>
    <div class="flex-grow flex mt-8 min-h-[26px]" v-if="showCounty">
      <div v-for="(city, index) in showCounty.county" :key="index" class="countyBtn rounded-full center-center mx-2 pointer"
           @click="onClickCountyBtn(city)"
      >
        {{ city.CityName }}
      </div>
    </div>
  </div>
</template>

<script>
import areaConfig from '@/utils/areaConfig'
export default {
  name: 'AreaBtn',
  data () {
    return {
      config: areaConfig,
      showCounty: null
    }
  },
  methods: {
    onClickAreaBtn (area) {
      if (this.showCounty && area.title === this.showCounty.title) {
        this.showCounty = null
      } else {
        this.showCounty = area
      }
    },
    onClickCountyBtn (city) {
      this.$router.push({
        name: 'County',
        params: {
          county: city.City
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .areaBtn {
    cursor: pointer;
    @apply shadow-btn;
    transition: .3s;
    embed {
      cursor: pointer;
    }
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
    &:hover {
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
