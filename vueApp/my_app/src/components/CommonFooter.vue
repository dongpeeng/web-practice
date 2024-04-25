<template>
  <footer id="footer" :style="{background:curMenu.bgColor}">
    <div v-for="obj in menuList" :key="obj.path" @click="changeMenu(obj)"> 
    <router-link :to="obj.path">{{obj.name}}</router-link>
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
      name:'剧集',
      bgColor:'#ff0000'
    },
      {
      path:'/music',
      name:'音乐',
      bgColor:'#ff00ff'
    },
      {
      path:'/book',
      name:'书籍',
      bgColor:'#cc0bd0'
    },
      {
      path:'/chat',
      name:'聊天',
      bgColor:'#eeb090'
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
</style>