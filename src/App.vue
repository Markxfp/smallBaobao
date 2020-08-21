<template>
  <div id="app" v-cloak>
    <router-view></router-view>
    <p>1{{getaddress}}</p>
    <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
import {mapGetters} from 'vuex'
export default {
  mounted() {
     this.$store.dispatch('getAddress')
    console.log(this.$store.state)
  },
  data() {
    return {};
  },
  components: { FooterGuide },
  methods: {},
  computed:{
    ...mapGetters(['getaddress'])
  }
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
