<template>
  <div class="detail">
  <article class="content">
      <p>
        <ul>
          <li v-for="item in commentObj" :key="item.id">
        {{item.recommend_comment}}
          </li>
        </ul>
      </p>
  </article>
  </div>
</template>

<script>
// import {mapState} from "vuex"
export default {
  data() {
    return {
      commentObj:[],
    }
  },
  created() {
    this.getData();
  },
  // computed: {
  // ...mapState(['recommend_comment']) 
  // }
methods: {
       getData(){
         let baseUrl="https://bird.ioliu.cn/v2?url=";
        let tvUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&for_mobile=1&start=0&count=10`;
         this.axios.get(baseUrl+tvUrl).then((res) =>{
                console.log(res);
                this.commentObj=res.data.subject_collection_items;    
         }).catch((err) =>console.log(err));
     }
},
 

}
</script>

<style lang="scss" scoped>
.detail{
  font-weight: bolder;
  font-size: 20px;

}
</style>