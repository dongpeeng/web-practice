<template>
  <div class="star">
    <input type="visible" v-model="value">
    <div v-if="readonly">
      <img v-for="i in parseInt(value)" :key="i"  :src="full" >
      <img v-if="value.toString().indeOf('.')>0" :src="half" >
      <img v-for="i in parseInt(5-value)" :key="i*6" :src="empty" >
    </div>
<div v-else>
      <img v-for="i in num" :key="i" :src="full" @click="num = i">
      <img v-for="i in parseInt(5 - num)" :key="i * 5" :src="empty" @click="num += i">
    </div>
  </div>
  
  
</template>

<script>
export default {
  props:{
    value:{
      type:Number,
      default:0
    }
  },
  readonly:{
    type:Boolean,
    defalut:false
  },
data() {
  return {
    num:0,
    full:require('../assets/full.png'),
    half:require('../assets/half.png'),
    empty:require('../assets/empty.png'),
  }
},
watch:{
num(){
  this.$emit('input',this.num)
}
}
}
</script>

<style>
  .star img {
     width: 24px;
     height: 24px;
     margin: 0 2px;
   }
</style>