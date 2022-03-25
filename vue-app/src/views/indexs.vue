<template>
  <div class="person-infor" @click="addressClick">
    <div class="address-wrap" v-if="!data.address_str">
      <p>请添加收货地址</p>
    </div>
    <div class="address-wrap" v-else>
      <img
        src="./images/icon_adress.png"
        alt=""
        style="
          width: 11px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        "
      />
      <p style="padding-left: 20px">
        {{ data.username }}&nbsp;&nbsp;{{ data.phone }}
      </p>
      <p class="adress">{{ data.address_str }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "videovue",
  data() {
    return {
      noPlay: false,
      okPlay: false,
      timer: ''
    }
  },
  methods:{
      cos(){
          console.log(313331)
      }
  },
  mounted(){
      this.cos()
  }
}
</script>
<style scoped>
p {
  margin: auto;
  padding: 0;
}
/* 地址组件 */
.person-infor {
  background-color: #fff;
  padding: 10px 10px 10px 15px;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 10px;
  color: #5d5d5d;
}
.person-infor p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
  text-overflow: ellipsis;
}
.person-infor .adress {
  padding-left: 18px;
  line-height: 1.3;
}
.address-wrap {
  padding-right: 20px;
  position: relative;
}
.address-wrap:after {
  content: " ";
  display: inline-block;
  height: 6px;
  width: 6px;
  border-width: 2px 2px 0 0;
  border-color: #c8c8cd;
  border-style: solid;
  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  position: relative;
  top: -2px;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -4px;
}
/* 地址组件end */
</style>
<script>
module.exports = {
  props: {
    data: Object,
  },
  data: function () {
    return {
    };
  },
  methods: {
    addressClick() {
      console.log("子组件，点击了");
      this.$emit("addressclick");
    },
  },
};
</script>