<template>
  <div>
      <h1>vuex</h1>

      <p>count: {{$store.state.count}}</p>
      <p>result:{{result}}</p>
      <!-- <button @click="add">+1</button> -->
      <button @click="$store.commit('add')">+1</button>
      <button @click="addFun(5)">+5</button>
      <button @click="reduceFun">-1</button>

  </div>
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex';
export default {
        computed: {
            //对state 进行映射
            ...mapState(["count"]),

            count1(){
                return 88;
            },
          ...mapGetters(["result"]),

        },
      methods: {
            //对Mutations 进行映射
          ...mapMutations(["add","addFun"]),
          //对Actions 进行映射
          ...mapActions(["reduceFun"]),
        //   add(){
        //       this.$store.commit('add');
        //   },
        //   addNum(num){
        //       this.$store.commit('addFun',num)
        //   }
          
      },
}
</script>

<style>

</style>