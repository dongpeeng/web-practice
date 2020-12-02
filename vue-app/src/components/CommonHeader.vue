<template>
<header :style="{background:curMenu.bgColor}">
    <span class="home" @click="goHome">首页</span>
    {{curMenu.name}}
</header>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
  computed: {
  ...mapState(['curMenu'])
    
  },
  methods: {
  ...mapMutations(['setCurMenu']),
      goHome(){
          this.$router.push('/');
          this.setCurMenu({
                    name:"剧集",
                    bgColor:'#ff0000',
          })
       
      }
  },
}
</script>

<style lang="scss" scoped>
header{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background:#ff0000;
    position: fixed;
    z-index: 666;
    top: 0;
    left: 0;

    .home{
        position: absolute;
        left: 0;
    }

}

</style>