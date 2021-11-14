<template>
  <div id="app">
    <TheNavbar />
    <router-view class="pt-[64px]"></router-view>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  name: 'App',
  components: {
    TheNavbar
  }
}
</script>
<style lang="scss">
@import "@/assets/css/app.scss";
</style>
