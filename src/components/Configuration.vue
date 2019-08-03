<template>
  <div class="peizhi">
    <!-- 返回按钮 -->
    <div class="push_button">
      <div class="push_buttons">
        <img src="../../static/images/back@2x.png" class="returnimg" @click="Returns">
        <h3 class="titleCar">小艾懂车</h3>
      </div>
    </div>
    <!-- 配置信息 -->
    <div class="information">
      <div class="car_images">
        <img :src="carlist.carContent.allCarInfoResult[0].picture_url" class="images" :onerror="carinfor">
      </div>
      <ul class="information_list">
        <li class="text_align">
          <p class="carname">{{carlist.carContent.allCarInfoResult[0].moduleName}}</p>
          <p class="carinfo">{{carlist.carContent.allCarInfoResult[0].styleInfos[arrindex].style_common_name}}</p>
        </li>
        <li><img src="../../static/images/vehiclemodel.png" class="img_carp" @click="swit"></li>
      </ul>
    </div>
    <!-- 配置信息列表 -->
    <div class="infor_list">
      <div class="infor_li">
        <p class="title">参数</p>
        <div class="detail" v-for="(item,index) in carlist.carContent.allCarInfoResult[0].styleInfos[arrindex].paramConfig" :key="index">
          <p>
            <span>{{item.name}}</span>
            <span class="rights">{{item.value}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="mask_top">
      <img src="../../static/images/blink.gif" v-if="imghiding">
      <div class="mask" v-show="toggleflag" @click="maskswit">
      </div>
    </div>
    <div class="carmode" v-show="toggleflag">
      <div class="carmode_content">
        <!-- 车标志 -->
        <img :src="carlist.carContent.allCarInfoResult[0].brand_logo_url" alt class="carmode_img">
        <!-- 车名 -->
        <span>{{carlist.carContent.allCarInfoResult[0].moduleName}}</span>
      </div>
      <!-- 点击车款时 -->
      <div class="carmodelist" v-for="(item,index) in carlist.carContent.allCarInfoResult[0].styleInfos" :key="index">
        <p @click="carmodeclick(index)">
          <span>{{item.style_common_name}}</span></p>
      </div>
    </div>
  </div>
</template>
<style type="text/css" lang="less" scoped>
.px2px(@name, @px) {
  @{name}: round(@px / 2) * 1px;
  [data-dpr="2"] & {
    @{name}: @px * 1px;
  } // for mx3
  [data-dpr="2.5"] & {
    @{name}: round(@px * 2.5 / 2) * 1px;
  } // for 小米note
  [data-dpr="2.75"] & {
    @{name}: round(@px * 2.75 / 2) * 1px;
  }
  [data-dpr="3"] & {
    @{name}: round(@px / 2 * 3) * 1px
  } // for 三星note4
  [data-dpr="4"] & {
    @{name}: @px * 2px;
  }
}

.peizhi {
  width: 10rem;
  height: 100%;
  margin: 0 auto;
  background: url(../../static/images/img_background.png) no-repeat;
  background-size: cover;
  position: relative;
}

.peizhi .push_button {
  width: 100%;
  height: 1.5rem;
}

.peizhi .push_button .push_buttons {
  width: 10rem;
  height: 1rem;
  background: #fff;
  position: relative;
}

.peizhi .push_button .push_buttons .returnimg {
  width: .8rem;
  height: .8rem;
}

.peizhi .push_button .push_buttons img {
  width: .906667rem;
  height: .906667rem;
  position: absolute;
  top: .1rem;
}

.peizhi .push_button .push_buttons .titleCar {
  width: 3rem;
  height: .506667rem;
  line-height: .506667rem;
  text-align: center;
  position: absolute;
  left: 50%;
  color: #4b5569;
  top: 50%;
  margin-top: -.2533335rem;
  .px2px(font-size, 35px);
  margin-left: -1.5rem;
}

.peizhi .information {
  width: 10rem;
  height: 1.28rem;
  position: relative;
  box-sizing: border-box;
}

.peizhi .information .car_images {
  width: 2.213333rem;
  height: 1.58rem;
  margin-left: .3rem;
}

.peizhi .information .car_images .images {
  width: 100%;
  height: 100%;
}

.peizhi .information .information_list {
  width: 7rem;
  height: 100%;
  position: absolute;
  left: 2.55rem;
  top: 0rem;
  box-sizing: border-box;
}

.peizhi .information .information_list li {
  float: left;
  display: inline-block;
}

.peizhi .information .information_list .information_list_one {
  width: 2.213333rem;
}

.peizhi .information .information_list li .images {
  width: 2.213333rem;
  height: 100%;
}

.peizhi .information .information_list .text_align {
  height: 1.28rem;
  line-height: .65rem;
}

.peizhi .information .information_list li .carname {
  .px2px(font-size, 35px);
  color: #444444;
}

.peizhi .information .information_list li .carinfo {
  .px2px(font-size, 18px);
  color: #4e4e4e;
}

.peizhi .information .information_list li .img_carp {
  width: 1.6rem;
  height: .733333rem;
  position: absolute;
  right: 0;
}

.peizhi .infor_list {
  width: 10rem;
  height: 10.2rem;
}

.peizhi .infor_list .infor_li {
  width: 9.2rem;
  position: absolute;
  left: .4rem;
  height: 10.2rem;
  box-sizing: border-box;
  overflow: auto;
}

.peizhi .infor_list .infor_li .title {
  .px2px(font-size, 39px);
  margin-top: .2rem;
}

.peizhi .infor_list .infor_li .detail {}

.peizhi .infor_list .infor_li .detail p {
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid #dadede;
  .px2px(font-size, 22px);
  color: #444444;
  line-height: 1rem;
  position: relative;
  box-sizing: border-box;
}

.peizhi .infor_list .infor_li .detail p .rights {
  position: absolute;
  left: 3.466667rem;
}

.peizhi .mask_top {
  width: 10rem;
  margin: 0 auto;
}

.peizhi .mask_top img {
  width: 1.386667rem;
  height: 1.386667rem;
  position: absolute;
  left: .373333rem;
  top: .6rem;
  z-index: 10000;
}

.peizhi .mask_top .mask {
  background: black;
  position: absolute;
  left: 0rem;
  top: 0rem;
  width: 10rem;
  height: 2.8rem;
  margin: 0 auto;
  z-index: 20;
  opacity: 0.5 !important;
}

.peizhi .carmode {
  width: 10rem;
  min-height: 14.8rem;
  background: #fff;
  position: absolute;
  left: 0rem;
  top: 2.8rem;
  bottom: 0;
  z-index: 300;
  overflow-y: scroll;
}

.peizhi .carmode .carmode_content {
  width: 10rem;
  padding-left: .373333rem;
  box-sizing: border-box;
  height: 1.386667rem;
  position: relative;
}

.peizhi .carmode .carmode_content img {
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: .2rem;
}

.peizhi .carmode .carmode_content span {
  .px2px(font-size, 30px);
  position: absolute;
  top: .4rem;
  left: 1.5rem;
}

.peizhi .carmode .carmodelist {
  width: 10rem;
  padding-left: .373333rem;
  padding-right: .373333rem;
  box-sizing: border-box;
  position: relative;
}

.peizhi .carmode .carmodelist p {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 1px solid #ebebeb;
}

</style>
<script>
import Bus from "./Bus.js";
export default {
  name: "Configuration",
  props: ["carlist"],
  data: function() {
    return {
      arrindex: '0',
      toggleflag: false,
      imghiding: false,
      carinfor: 'this.src="' + require('../../static/images/smcar.png') + '"'

    }
  },
  created: function() {

  },
  mounted: function() {},
  methods: {
    Returns: function() {
      Bus.$emit("ms", '3');
    },
    swit: function() {
      var that = this;
      that.toggleflag = !that.toggleflag;
      that.imghiding = true;
      ModalHelper.afterOpen();
    },
    carmodeclick: function(e) {
      this.arrindex = e;
      this.toggleflag = false;
      this.imghiding = false;

      // 解决遮罩层点击穿透问题 调用函数关闭页面的固定定位
      ModalHelper.beforeClose();
    },
    maskswit: function() {
      var that = this;
      that.toggleflag = false;
      that.imghiding = false;
      ModalHelper.beforeClose();
    }
  }

};

</script>
