<template>
  <div class="home">
    <section class="heroSection center-center">
      <div class="w-full ">
        <div class="heroSection__words mx-auto">
          <h3 class="text-white text-4xl font-bold py-5 text-center letter-spacing--lg">想去哪裡玩</h3>
          <p class="text-white text-center letter-spacing--lg">這裡共有上千個活動及美食等著你去一同體驗</p>
        </div>
        <SearchBar class="mx-auto mt-16" />
      </div>
    </section>
    <section class="areaSelect relative h-[300px]">
      <div class="areaSelect__bg absolute h-full bg-gray-50 w-4/5 rounded-br-4xl -z-1"></div>
      <div class="absolute bottom-[-45%]"><embed :src="require('@/assets/images/deco1.svg')" type=""></div>
      <div class="center-center h-full w-4/5 mx-auto">
        <div class="areaSelect__title flex-grow justify-end">
          <h3 class="text-3xl letter-spacing--lg mb-4 min-w-[100px]">縣市快選</h3>
          <h6 class="letter-spacing--r text-gray-500">Choose Cities</h6>
        </div>
        <AreaBtn class="z-1 w-9/12 center-center" />
      </div>
    </section>
  </div>
</template>

<script>
import SearchBar from '@/components/Searchbar.vue'
import AreaBtn from '@/components/AreaBtn.vue'
export default {
  name: 'Home',
  components: {
    SearchBar,
    AreaBtn
  }

}
</script>

<style lang="postcss">
  .heroSection {
    background:  linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url('../assets/images/heroImg.png') no-repeat center/cover;
    height: 60vh;
    h3 {
      text-shadow: 0px 4px 15px rgba(33, 43, 40, 0.37);
    }
    p {
      text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
    }
  }
</style>
