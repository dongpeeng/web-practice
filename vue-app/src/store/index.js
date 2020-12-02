import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curMenu:{
      name:"剧集",
      bgColor:'#ff0000',
    },
    //   recommend_comment:[
    //     {
    //        comment:'',
    //        key:'',
    //   }
    // ],
 

  },
  mutations: {
    setCurMenu(state,data){
          state.curMenu=data;
    },
    // setCurDetail(state,data){

    //   state.recommend_comment.comment=data.obj;
    //   state.recommend_comment.key=data.key;
    // }
  },
  actions: {
  },
  modules: {
  }
})
