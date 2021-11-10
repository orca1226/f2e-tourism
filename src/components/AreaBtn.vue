<template>
  <div class="flex">
    <div v-for="(item, index) in config" :key="index" class="ml-[36px]">
      <div class="areaBtn w-[120px] h-[150px] bg-white rounded-15px flex-col center-center">
        <div class="bgc-green w-[76px] h-[76px] rounded-full center-center">
          <embed :src="require(`@/assets/images/icon_area_${item.src}.svg`)">
        </div>
        <div class="mt-3">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      config: [
        {
          title: '北部',
          src: 'N'
        },
        {
          title: '中部',
          src: 'M'
        },
        {
          title: '南部',
          src: 'S'
        },
        {
          title: '東部',
          src: 'E'
        },
        {
          title: '離島',
          src: 'O'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .areaBtn {
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.12);
  }
</style>
