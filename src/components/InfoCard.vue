<template>
  <div
    class="infoCard bg-white shadow-md h-[350px] w-[290px] rounded-10px flex flex-col overflow-hidden pointer"
    :class="{
      'h-[350px]': type !== 'scenicSpot',
      'h-[450px]': type === 'scenicSpot',
      'max-w-[350px]': type === 'scenicSpot'
    }"
  >
    <div class="flex-grow h-[240px] overflow-hidden">
      <img
        class="h-full object-cover"
        :src="img.PictureUrl"
        :alt="img.PictureUrlDescription"
      >
    </div>
    <div class="infoCard__word p-3 h-[calc(100%-240px)]  flex flex-col">
      <div class="infoCard__body flex-grow">
        <h4 class="infoCard__word__title ellipsis text-16 letter-spacing--lg mb-2">{{ name }}</h4>
        <p class="infoCard__word__caption text-12 text-gray-200 mb-3">{{ caption }}</p>
      </div>
      <slot name="footer">
        <div class="infoCard__footer flex flex-col">
          <div
            v-if="type === 'scenicSpot'"
            class="mb-3 text-12 text-gray-400 ellipsis flex item"
          >
            <img
              :src="require('@/assets/images/icon_time.png')"
              class="transform translate-y-[-1px] mr-2"
              alt="icon"
            >
            <span class="ellipsis">{{ openTime || '未說明開放時間' }}</span>
          </div>
          <div class="flex justify-between items-center w-full">
            <div class="infoCard__footer__label flex">
              <div
                class="label bg-gray-100 mr-2"
                v-for="(text,index) in labelList"
                :key="index"
              >
                {{ text }}
              </div>
            </div>
            <div
              v-if="highlight"
              class="infoCard__footer__highlight text-blue text-14"
            >{{ highlight }}</div>
          </div>

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
    },
    // 藍色文字
    highlight: {
      type: String
    },
    address: {
      type: String
    },
    openTime: {
      type: String
    }
  }
}
</script>

<style lang="scss">
  .infoCard {
    // box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
    transition: .3s;
    &:hover {
      @apply shadow-lg;
    }
    &__word{
      &__title {

      }
      &__caption {
        display:-webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;
        line-height: 20px;
      }
    }
  }
  .ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .label {
    @apply rounded-full px-2 py-1 text-12;
  }
</style>
