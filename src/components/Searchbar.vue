<template>
  <div class="searchBar flex items-center bg-white w-3/5 h-16 border-solid
  rounded-full shadow-sm overflow-hidden p-2 border-gray-300"
  >
    <input type="text" class="searchBar__textInput flex-grow pl-2" placeholder="在找什麼呢？" />
    <button type="button" class="searchBar__search btn-action h-full w-[84px] flex">
      <div class="h-18 center-center">
        <embed class="searchBar__button__icon w-auto  object-contain" :src="require('@/assets/images/icon_search.svg')">
        <div class="text-white ml-1">搜尋</div>
      </div>
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .searchBar {
    border-width: 6px;
  }
</style>
