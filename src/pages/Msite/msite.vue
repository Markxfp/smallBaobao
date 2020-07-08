<template>
  <div>
    <HeaderTop title="首页">
      <div class="header-left" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="header-right" slot="right">
        <i class="iconfont icon-sousuo"></i>
      </div>
    </HeaderTop>
    <nav class="Nav">
      <div class="swiper-container">
        <div class="swiper-wrapper swiperList">
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <i :class="[item.icon,'iconfont'] "></i>
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </nav>
    <div class="bar20"></div>
    <div class="f17 line40 plr15">推荐商家</div>
    <ul class="flex-a-c f12 tc chooseType line36 mb15">
      <li v-for="(item,index) in chooseType" :key="index">{{item}}</li>
    </ul>
    <ul class="showList plr15" v-for="(item,index) in showList" :key="index">
      <ShopList :item="item"></ShopList>
    </ul>
  </div>
</template>
<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      swiperList: [
        {
          icon: "icon-dayinji",
          name: "鼠标",
          url: ""
        },
        {
          icon: "icon-dayinji",
          name: "鼠标",
          url: ""
        },
        {
          icon: "icon-dayinji",
          name: "鼠标",
          url: ""
        },
        {
          icon: "icon-dayinji",
          name: "鼠标",
          url: ""
        },
        {
          icon: "icon-dayinji",
          name: "鼠标",
          url: ""
        },
        {
          icon: "icon-dayinji",
          name: "鼠标",
          url: ""
        },
        {
          icon: "icon-dayinji",
          name: "鼠标",
          url: ""
        },
        {
          icon: "icon-dayinji",
          name: "鼠标",
          url: ""
        },
        {
          icon: "icon-dayinji",
          name: "鼠标",
          url: ""
        }
      ],
      chooseType: ["首单立减", "津贴优惠", "满减优惠", "下单返红包"],
      showList: [
        {
          name: "龙岩科技小炒",
          distribution: 20,
          sale: 111,
          comments: ["真的很好吃哦", "好吃又实惠"],
          reduction: ["满20减2", "满30-5"]
        },
        {
          name: "龙岩科技小炒",
          distribution: 20,
          sale: 111,
          comments: ["真的很好吃哦", "好吃又实惠"],
          reduction: ["满20减2", "满30-5"]
        },
        {
          name: "龙岩科技小炒",
          distribution: 20,
          sale: 111,
          comments: ["真的很好吃哦", "好吃又实惠"],
          reduction: ["满20减2", "满30-5"]
        }
      ]
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      var mySwiper = new Swiper(".swiper-container", {
        autoplay: true,
        loop: true,
        slidesPerView: 5,
        slidesPerColumn: 2
      });
    }
  },
  components: {
    HeaderTop,
    ShopList
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.swiperList
  padding-bottom 20px

  &>div
    text-align center
    padding 20px 0 0
    font-size 14px
    color #0196ff
    float left

    &>i
      font-size 20px
      display inline-block
      margin-bottom 5px
      width 40px
      height 40px
      line-height 40px
      color #fff
      border-radius 50%
      background #fd9d21

.bar20
  height 10px
  background-color #f2f2f2

.chooseType
  &>li
    flex 1
    background-color #f3f3f3
    display inline-block
    color #333
    margin 0 5px
    border-radius 4px

.leftImg
  width 70px
  height 70px
  border-radius 4px
  vertical-align middle

.ringThree
  position relative
  display inline-block
  width 3px
  height 3px
  background-color #a1a1a1
  border-radius 50%
  vertical-align middle
  margin 0 10px

  &:before, &:after
    content ''
    display inline-block
    width 3px
    height 3px
    border-radius 50%
    background-color #a1a1a1
    position absolute
    top 0
    bottom 0
    margin auto
    overflow hidden

  &:before
    left -6px

  &:after
    right -6px

.listTips
  line-height 18px
  font-size 10px
  color #ff9844
  background-color #ffeee1
  display inline-block
  padding 0 4px
  margin-right 4px

.showList
  &>li
    margin-bottom 20px

.showDis
  white-space normal

.disCount
  &>span
    display inline-block
    font-size 10px
    color #ff7260
    border 1px solid #ff7820
    padding 0 4px
    margin-right 4px
</style>
