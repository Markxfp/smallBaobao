<template>
  <div id="app" v-cloak>
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
export default {
  data() {
    return {};
  },
  components: { FooterGuide },
  methods: {}
};
</script>

<style scoped lang='stylus' scope rel='stylesheet/stylus'>
#app
  width 100vw
  min-height 100vh
  padding 50px 0
  box-sizing border-box

[v-cloak]
  display none
</style>
