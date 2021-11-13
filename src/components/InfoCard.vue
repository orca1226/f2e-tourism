<template>
  <div class="infoCard h-[350px] w-[290px] rounded-10px flex flex-col overflow-hidden pointer">
    <div class="h-[240px]">
      <img
        class="h-full object-cover"
        :src="img.PictureUrl"
        :alt="img.PictureUrlDescription"
      >
    </div>
    <div class="infoCard__word p-3 flex-grow flex flex-col">
      <div class="infoCard__body flex-grow">
        <h4 class="text-16 letter-spacing--lg mb-2">{{ name }}</h4>
        <p class="text-12 text-gray-200 mb-3">{{ caption }}</p>
      </div>
      <slot name="footer">
        <div class="infoCard__footer flex justify-between items-center">
          <div class="infoCard__footer__label flex">
            <template v-if="type === 'activity'">
              <div
                class="label bg-gray-100 mr-2"
                v-for="(text,index) in labelList"
                :key="index"
              >
                {{ text }}
              </div>
            </template>
            <template v-else-if="type === 'hotel'">
              <div class="text-blue">年度</div>
            </template>

          </div>
          <div class="infoCard__footer__highlight text-blue text-14">桃園市</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    // 卡片類型
    type: {
      type: String,
      default: 'activity'
    },
    // 標題
    name: {
      type: String,
      default: '2021陽明山花季'
    },
    // 說明文字
    caption: {
      type: String,
      default: '臺北市政府工務局公園路燈工程管理處'
    },
    // 圖檔資料
    img: {
      type: Object
    },
    // 標籤列表
    labelList: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
  .infoCard {
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
    transition: .3s;
    &:hover {
      @apply shadow-lg;
    }
  }
  .label {
    @apply rounded-full px-2 py-1 text-12;
  }
</style>
