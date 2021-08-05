<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goForward">前进</button>
  </div>
</template>

<script>
export default {
 methods: {
   goForward(){
    this.$router.forward();
  }
 }, 
 //导航守卫钩子
 beforeRouteEnter (to, from, next) {
   //不能用this
      console.log('to',to);
      console.log('from',from);
      console.log('next',next);
      next();
 },
 beforeRouteLeave (to, from, next) {
      console.log('to',to);
      console.log('from',from);
      console.log('next',next);
      next();
 }
 
}
</script>