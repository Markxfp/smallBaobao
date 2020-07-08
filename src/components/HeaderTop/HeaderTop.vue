<template>
  <div class="header flex-b-c tc">
    <slot name="left"></slot>
    <div class="header-title flex1">{{title}}</div>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.header
  height 50px
  line-height 50px
  font-size 14px
  color #fff
  text-align center
  padding 0 15px
  background-color #333
  box-shadow 0 0 1px 0px #bababa
  position fixed
  left 0
  right 0
  top 0
  margin auto
  z-index 999
  box-shadow 0 0 1px #a7a7a7
</style>
