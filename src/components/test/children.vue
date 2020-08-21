<template>
  <div>
      <div :title="title" @click="sayHello">{{title}}</div>
  </div>
</template>

<script>
export default {
props:{
    title:{
        type:String,
        default:''
    }
},
data() {
    return {
    }
  },
  methods: {
    sayHello(){
        console.log('我是子组件');
        this.$parent.title="w shi keiai"
        this.$emit('sayFather',23432)
    }
},
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>

</style>
