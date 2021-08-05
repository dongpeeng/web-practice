<template>
  <header :style="{background:curMenu.bgColor}">
    <span class="my" @click="my"><i class="el-icon-user-solid"></i></span>
    <span class="home">好股票</span>
    {{ curMenu.nmae }}
  </header>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
    computed:{
        ...mapState(['curMenu'])
    },
    methods: {
    ...mapMutations(['setCurMenu']),
        my(){
            this.$router.push('/my');
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
    .my{
        float: left;
        width: 10%;
    }
    .home{
        // position: absolute;
        margin: 0 auto;
    }

}

</style>