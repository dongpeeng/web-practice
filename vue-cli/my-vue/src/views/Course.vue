<template>
  <div>
      <h1>课程分类</h1>
      <router-link to="/course/fe">前端课程</router-link> |
      <router-link to="/course/rd">后端课程</router-link>
      
      <transition name="bounce"  mode="out-in">
      <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>