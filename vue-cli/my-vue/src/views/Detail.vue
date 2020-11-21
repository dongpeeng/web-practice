<template>
  <div>
      <h1>课程详解</h1>
      <p>课程id：{{$route.params.id}}</p>
      <p>价格：{{$route.params.price}}</p>
  </div>
</template>

<script>
export default {
data() {
    return {
        params: this.$route.params,
    }
},
}
</script>

<style lang="scss" scoped>

</style>