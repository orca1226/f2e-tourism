<template>
  <header class="navbar fixed h-16 w-full bg-white flex items-center px-6 justify-between z-50">
    <div class="navbar__logo h-4 w-36 flex-grow">
      <embed class="h-full object-contain" :src="require('@/assets/images/logo.svg')" alt="logo">
    </div>
    <ul class="navbar__nav h-full w-[350px] flex justify-center items-center">
      <li class="mx-3 text-15"><a href="">景點介紹</a></li>
      <li class="mx-3 text-15"><a href="">特色活動</a></li>
      <li class="mx-3 text-15"><a href="">美食饗宴</a></li>
      <li class="mx-3 text-15"><a href="">經典住宿</a></li>
    </ul>
    <div class="w-36 flex-grow"></div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .navbar {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  }
</style>
