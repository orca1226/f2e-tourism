<template>
  <div id="app">
    <Navbar />
    <router-view class="pt-[64px]"></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/TheNavbar.vue'
import Footer from '@/components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style lang="scss">
@import "@/assets/css/app.scss";
</style>
