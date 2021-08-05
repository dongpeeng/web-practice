import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curMenu:{
      name:"home",
      bgColor:'#ff0000',
    },
  },
  mutations: {
    setCurMenu(state,data){
      state.curMenu=data;
},
  },
  actions: {
  },
  modules: {
  }
})
