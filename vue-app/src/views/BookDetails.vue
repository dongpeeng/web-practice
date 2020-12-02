<template>
  <div class="details">
      <div class="content">
    <h1>{{bookObj.title}}</h1>
    <h2>{{bookObj.author[0]}}</h2>
      <p>作者简介：{{bookObj.author_intro}}</p>
      <p>作品简介：{{bookObj.intro}}</p>
      <img :src="'https://images.weserv.nl/?url=' + bookObj.cover_url" alt="">
      </div>
  </div>
</template>

<script>
export default {
data() {
    return {
        bookObj:{},
    }
},
created() {
    this.getData();
},
methods: {
    getData(){
         let baseUrl="https://bird.ioliu.cn/v2?url=";
          let thisBookUrl= "https://m.douban.com/rexxar/api/v2/book/"+this.$route.params.id+"?ck=&for_mobile=1";
         this.axios.get(baseUrl+thisBookUrl).then((res) =>{
                console.log(res);
                this.bookObj=res.data;    
         }).catch((err) =>console.log(err));
    }
},
}
</script>

<style lang="scss" scoped>
.details{
    .content{
        width: 300px;
        img{
            width:200px;
            height: 200px;
        }

    }
}
</style>