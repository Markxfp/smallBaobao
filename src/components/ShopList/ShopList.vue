<template>
  <div>
    <li class="flex-b-s">
      <img src="../../common/image/pic.jpg" class="leftImg" alt />
      <div class="flex1 pl10 elips">
        <div class="flex-b-c elips">
          <h4 class="elips f16 fontw">{{item.name}}</h4>
          <span class="ringThree"></span>
        </div>
        <p class="elips f10 colora1 line16">月售{{item.sale}}</p>
        <p class="elips f10 colora1 line16">起送￥{{item.distribution}} 免配送费</p>
        <div class="elips">
          <span class="listTips" v-for="(items,indexs) in item.comments" :key="indexs">{{items}}</span>
        </div>
        <div class="flex-b-s showDis">
          <div class="flex1 disCount">
            <span v-for="(items,indexs) in item.reduction" :key="indexs">{{items}}</span>
          </div>
          <i class="rghtTag"></i>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
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
    li
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
    margin-right 4px</style>
