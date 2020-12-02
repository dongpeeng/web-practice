<template>
  <div class="detail">
      <h1>{{tvObj.title}}</h1>
      <p>{{tvObj.intro}}</p>
      <img :src="'https://images.weserv.nl/?url=' + tvObj.cover.image.small.url" alt="">
  </div>
</template>

<script>
export default {
    data() {
        return {
            tvObj:{},
        }
    },

    created() {
        this.getData();
    },
 methods: {
     getData(){
         let baseUrl="https://bird.ioliu.cn/v2?url=";
         let tvUrl ="https://m.douban.com/rexxar/api/v2/tv/"+this.$route.params.id;
         this.axios.get(baseUrl+tvUrl).then((res) =>{
                console.log(res);
                this.tvObj=res.data;    
         }).catch((err) =>console.log(err));
     }
 },
}
</script>

<style lang="scss" scoped>
</style>