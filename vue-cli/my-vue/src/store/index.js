import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    a:66,
  },
  getters:{
      result(state){
        return state.count+state.a;
      }
  },
  //处理同步的方法
  mutations: {
    add(state){
      state.count++;
    },
    addFun(state,num){
      state.count+=num;

    },
    reduceFun(state){
      state.count--;
    }

  },
  //处理异步的方法
  actions: {
    // reduceFun(){
    //   setTimeout(() => {
    //     this.commit('reduce')
    //   }, 1000);
    // },
    reduceFun({commit}){
      setTimeout(() => {
        commit('reduceFun')
      }, 1000);
    }
  },
  modules: {
  }
})
