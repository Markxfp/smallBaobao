<template>
  <div>
    <HeaderTop title="我的"></HeaderTop>
    <router-link to="/login">
      <div class="flex-s-c p15 line30 bg25 colorff">
        <i class="iconfont icon-wode headIcon"></i>
        <div class="flex1 elips">
          <p class="f15">登录/注册</p>
          <p class="f13">暂无绑定手机号</p>
        </div>
      </div>
    </router-link>
    <div class="flex-a-c f12 tc ptb10 line24">
      <div class="flex1">
        <p class="elips">
          <span class="f18">0.00</span>元
        </p>
        <p class="elip">我的金额</p>
      </div>
      <div class="flex1">
        <p class="elips">
          <span class="f18">0</span>个
        </p>
        <p class="elip">我的优惠</p>
      </div>
      <div class="flex1">
        <p class="elips">
          <span class="f18">0</span>分
        </p>
        <p class="elip">我的积分</p>
      </div>
    </div>
    <div class="bar20"></div>
    <ul class="clearfix line44">
      <li class="bb1 plr15 flex-s-c">
        <i class="f30 iconfont icon-lvhangxiang"></i>
        <p class="pl10">我的订单</p>
      </li>
      <li class="bb1 plr15 flex-s-c">
        <i class="f30 iconfont icon-lvhangxiang"></i>
        <p class="pl10">积分商城</p>
      </li>
      <li class="bb1 plr15 flex-s-c">
        <i class="f30 iconfont icon-lvhangxiang"></i>
        <p class="pl10">会员卡</p>
      </li>
    </ul>
    <div class="bar20"></div>
    <div class="line44 plr15 flex-s-c">
      <i class="f30 iconfont icon-lvhangxiang"></i>
      <p class="pl10">积分商城</p>
    </div>
    <div class="bar20"></div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";

export default {
  data() {
    return {};
  },
  components: {
    HeaderTop
  },
  methods: {}
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.headIcon
  overflow hidden
  padding 10px
  font-size 40px
  border-radius 50%
</style>
