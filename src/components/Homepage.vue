<template>
  <div class="content_head">
    <!-- 头部标题 -->
    <div class="title">
      <h3>小艾懂车</h3>
    </div>
    <!-- 欢迎语 时间-->
    <div class="contet_head_time">
      <p class="content_data">{{times}}</p>
      <p class="content_txtone">{{welcome}}</p>
    </div>
    <!--swiper轮播-->
    <div class="swiper-container">
      <div class="videoplay" v-for="(item,i) in imglist" :key="i">
        <img :src="'https://d2.yiche.com/ai20/' + item.comPicture" class="pic" alt>
      </div>
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "mint-ui";
import Bus from "./Bus.js";
// console.log(Bus);
export default {
  name: "Homepage",
  // props: ["carlist"],
  components: {},
  data:function() {
    return {
      times: '',
      welcome: '',
      imglist: []
    };
  },
  mounted:function() {},
  methods: {},
  created:function() {
    var that = this;
    Bus.$on("msg", function(e) {
      that.welcome = e.data.abstractContent.entryPageResult.welcoming;
      that.times = e.data.abstractContent.entryPageResult.currentDateTime;
      that.imglist = e.data.abstractContent.entryPageResult.components;
    })

  }
};

</script>
<style type="text/css" lang="less" scoped>
@import "../assets/css/Homepage.less";

</style>
