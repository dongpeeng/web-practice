<template>
  <div class="home">
<van-tabs v-model="activeName">
  <van-tab title="推荐" name="a">
  <van-swipe class="my-swipe" autoplay="never" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
  <van-swipe-item>5</van-swipe-item>
  <van-swipe-item>6</van-swipe-item>
  <van-swipe-item>7</van-swipe-item>
  <van-swipe-item>8</van-swipe-item>
  <van-swipe-item>9</van-swipe-item>
  <van-swipe-item>10</van-swipe-item>
  <van-swipe-item>11</van-swipe-item>
  <van-swipe-item>12</van-swipe-item>
  <van-swipe-item>13</van-swipe-item>
</van-swipe>
<van-swipe class="my-swipe2" autoplay="never" indicator-color="red">
  <van-swipe-item>
    <van-row gutter="10"  type="flex"  justify="space-around">
  <van-col class="span1" span="4.5"><img src="../assets/222.jpg" alt="" srcset=""><div>翠霞首席课</div></van-col>
  <van-col span="4.5"><img src="../assets/222.jpg" alt="" srcset=""><div>金股预测</div></van-col>
  <van-col span="4.5"><img src="../assets/222.jpg" alt="" srcset=""><div>读研报抓</div></van-col>
  <van-col span="4.5"><img src="../assets/222.jpg" alt="" srcset=""><div>每周金股</div></van-col>
  <van-col span="4.5"><img src="../assets/222.jpg" alt="" srcset=""><div>操盘策略</div></van-col>
  <van-col span="4.5"><img src="../assets/222.jpg" alt="" srcset=""><div>雨顺价值</div></van-col>
  <van-col span="4.5"><img src="../assets/222.jpg" alt="" srcset=""><div>公司近距离</div></van-col>
  <van-col span="4.5"><img src="../assets/222.jpg" alt="" srcset=""><div>机构强势</div></van-col>
  <van-col span="4.5"><img src="../assets/222.jpg" alt="" srcset=""><div>财富内参</div></van-col>
  <van-col span="4.5"><img src="../assets/222.jpg" alt="" srcset=""><div>基金研选</div></van-col>
</van-row></van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
    <template #indicator>
    <div class="custom-indicator"></div>
  </template>
</van-swipe>
<span>战绩榜</span>
<van-skeleton title :row="1" />
<div class="recommand"><div class="rec"><b>  推荐</b></div><span class="check">查看更多<van-icon name="arrow"  size="8"/></span></div>
<van-cell-group>
  <van-cell title="1" value="内容" />
  <van-cell title="1" value="内容" />
  <van-cell title="1" value="内容" />
  <van-cell title="1" value="内容" />
  <van-cell title="1" value="内容" />
  <van-cell title="1" value="内容" />
  <van-cell title="1" value="内容" />
  <van-cell title="1" value="内容" />
  <van-cell title="1" value="内容" label="" />
</van-cell-group>
</van-tab>
  <van-tab title="关注" name="b">内容 2</van-tab>
  <van-tab title="选股" name="c">内容 3</van-tab>
  <van-tab title="要闻" name="d">内容 4</van-tab>
  <van-tab title="热门" name="e">内容 5</van-tab>
  <van-tab title="诊股" name="f">内容 6</van-tab>
</van-tabs>
  </div>
</template>

<script>
export default{
data() {
  return {
     activeName: 'a',
  }
},
  
}
</script>
<style lang="scss" scoped>
    .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    margin-bottom: 5px;
  }
   .my-swipe2 .van-swipe-item {
    color: black;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    // background-color: #39a9ed;
    margin-bottom: 5px;
  }
    .custom-indicator {
    position: absolute;
    // right: 5px;
    margin: 2px auto;
    // padding: 2px 5px;
    // font-size: 12px;
    background: red;
  }
  .span1{
    text-indent: -5px;
  }
  .van-image{
    width: 50px;
    height: 30px;
  }
  img{
    width: 50px;
    height: 30px;
  }
  .recommand{
    height: 50px;
  }
  .rec{
    font-size: 20px;
    line-height: 50px;
    float: left;
    // left: 80px;
  }
  .check{
    float: right;
    line-height: 50px;
    font-size: 14px;
    right: 30px;
  }
</style>