<template>
  <div class="flex-b-c FooterGuide">
    <router-link to="/msite" :class="{'footer-on':$route.name=='msite'}">
      <i class="iconfont icon-elema"></i>
      <p>首页</p>
    </router-link>
    <router-link to="/search" :class="{'footer-on':$route.name=='search'}">
      <i class="iconfont icon-sousuo"></i>
      <p>搜索</p>
    </router-link>
    <router-link to="/order" :class="{'footer-on':$route.name=='order'}">
      <i class="iconfont icon-dingdan"></i>
      <p>订单</p>
    </router-link>
    <router-link to="/profile" :class="{'footer-on':$route.name=='profile'}">
      <i class="iconfont icon-wode"></i>
      <p>我的</p>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../common/stylus/mixins.styl'
@import '../../common/css/common.css'
</style>
