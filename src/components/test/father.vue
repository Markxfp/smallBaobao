<template>
  <div>
      <children :title="title" @sayFather="sayFather"></children>
      <p ref="msgDiv">{{msg}}</p>
      <p>msg1:{{msg1}}</p>
      <p>msg2:{{msg2}}</p>
      <p>msg3:{{msg3}}</p>
      <button @click="change">change</button>
  </div>
</template>

<script>
import children from './children.vue'
export default {
data() {
    return {
        title:'我是父组件',
        msg:'hello',
        msg1:'',
        msg2:'',
        msg3:''
    }
  },
  methods: {
      sayFather(args){
          this.$nextTick(()=>{
              console.log(this.$children.title)
          })
          
          console.log('我是父组件',args)
      },
      change(){
          this.msg='baobao';
          this.msg1=this.$refs.msgDiv.innerHTML;
          this.$nextTick(()=>{
              this.msg2=this.$refs.msgDiv.innerHTML;
          })
          this.msg3=this.$refs.msgDiv.innerHTML;
      }
},
components:{
    children
}
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>

</style>
