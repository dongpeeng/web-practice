<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/course">Course</router-link> |
      <!-- 
        路由传参：
        path + query :刷新页面的时候参数【不会】丢失 地址栏【能】看到参数
        name + params ：刷新页面的时候参数【会】丢失 地址栏【不能】看到参数
        url + params:刷新页面的时候参数【不会】丢失 地址栏【能】看到参数
       -->
      <!-- <router-link :to="{ path:'/user',query:{name:'lisi',id:1001}}">用户详情页</router-link> | -->
      <router-link :to="{ name:'User',params:{name:'lisi',id:1001}}">用户详情页</router-link> |
      <router-link to="/detail/201/6000">课程详解页</router-link> |
      <router-link to="/test">测试页面</router-link> |
      <!-- <router-link to="/test/202/8888">测试页面</router-link> | -->
      <router-link to="/count">vuex</router-link> |

    </div>
    <!-- 插槽 决定页面渲染位置 -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
