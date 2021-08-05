<template>
  <footer id="footer" :style="{background:curMenu.bgColor}">

    <div v-for="obj in menuList" :key="obj.path" @click="changeMenu(obj)" class="tabbarName">
    <router-link :to="obj.path"><van-icon :name="obj.icon"  size="20"/><span class="objName">{{obj.name}}</span></router-link>
    </div>
  </footer>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
data() {
  return {

    menuList:[
      {
      path:'/',
      name:'首页',
      icon:'home-o',
      bgColor:'#ff0000',
    },
      {
      path:'/live',
      name:'直播',
      icon:'tv-o',
      bgColor:'#ff00ff',
    },
      {
      path:'/vip',
      name:'vip',
      icon:'gem-o',
      bgColor:'#cc0bd0',
    },
      {
      path:'/video',
      name:'视频',
      icon:'play-circle-o',
      bgColor:'#eeb090',
    },
      {
      path:'/market',
      name:'行情',
      icon:'chart-trending-o',
      bgColor:'#eeb053',
      },
    ]
  };
},
created() {
  this.menuList.forEach((value)=>{
    if(value.path==this.$route.path){
      this.setCurMenu(value);
    }
  })
},
computed: {
  ...mapState(['curMenu']),
},
methods: {
  ...mapMutations(['setCurMenu']), 
  changeMenu(obj){
      this.setCurMenu(obj);
  },

},
}
</script>

<style lang="scss" scoped>
footer{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background:#ff0000;
    position: fixed;
    bottom: 0;
    left: 0;
    color: #ffffff;
}
a{
  color: black;
}
.router-link-exact-active{
  color: #ffffff;
}
// .tabbarName{
//   // font-size: 14px;
//   text-align: center;
// }
// .objName{
//   // display: inline-block;
// }
</style>