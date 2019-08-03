<template>
  <div class="Garage">
    <!-- 返回按钮 -->
    <div class="push_button">
      <div class="push_buttons">
        <img src="../../static/images/back@2x.png" class="returnimg" @click="Returns">
        <h3 class="titleCar">小艾懂车</h3>
      </div>
    </div>
    <!-- 删除车的图片 -->
    <div class="Delete_pictures">
      <div class="Delete_img" @click="Delete_change">
        <img src="../../static/images/editNor.png" v-show="editNor">
        <img src="../../static/images/editPress.png" v-show="editPress">
      </div>
    </div>
    <!-- 我的车库默认打底图 -->
    <div class="Default_img">
      <div class="charts" v-if="arrlist.length <= 0">
        <img src="../../static/images/path.png">
        <P>你还没有收藏的车型</P>
      </div>
      <!-- 车的轮播图 -->
      <div class="swiper-father" style="width: 10rem;" v-if="arrlist.length > 0">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(data,index) in arrlist" :key="index">
              <img :src="data" class="pic_img">
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
    <!-- 删除的图标 -->
    <div class="img_icon" v-show="delete_icon" @click="deletes">
      <img src="../../static/images/delete.png">
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

.Garage {
  width: 10rem;
  height: 100%;
  margin: 0 auto;
  position: relative;
}

.Garage .push_button {
  width: 100%;
  height: 1.5rem;
}

.Garage .push_button .push_buttons {
  width: 10rem;
  height: 1rem;
  background: #fff;
  position: relative;
}

.Garage .push_button .push_buttons .returnimg {
  width: .8rem;
  height: .8rem;
}

.Garage .push_button .push_buttons img {
  width: .906667rem;
  height: .906667rem;
  position: absolute;
  top: .1rem;
}

.Garage .push_button .push_buttons .titleCar {
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

.Garage .Delete_pictures {
  width: 10rem;
  height: 1.173333rem;
  position: relative;
}

.Garage .Delete_pictures .Delete_img {
  width: .666667rem;
  height: .666667rem;
  position: absolute;
  right: .5rem;
}

.Garage .Delete_pictures .Delete_img img {
  width: 100%;
  height: 100%;
}

.Garage .Default_img {
  width: 10rem;
  height: 13rem;
  position: relative;
}

.Garage .Default_img .charts {
  width: 4rem;
  min-height: 3.6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -2rem;
  margin-left: -1.8rem;
}

.Garage .Default_img .charts img {
  width: 100%;
  height: 100%;
}

.Garage .Default_img .charts p {
  width: 4rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  .px2px(font-size, 32px);
}

.Garage .img_icon {
  width: .586667rem;
  height: .586667rem;
  position: absolute;
  top: 7rem;
  right: 1rem;
}

.Garage .img_icon img {
  width: 100%;
  height: 100%;
}
.Garage .swiper-father {
  width: 10rem;
  height: 5.5rem;
}

.Garage .Default_img .swiper-father .swiper-container {
  width: 10rem;
  height: 5.5rem;
}

.Garage .Default_img .swiper-father .swiper-container .swiper-wrapper .swiper-slide {
  width: 10rem;
  height: 5.5rem;
  z-index: 1000;
  position: relative;
}

.Garage .Default_img .swiper-father .swiper-container .swiper-wrapper .swiper-slide .pic_img {
  width: 8rem;
  height: 5.5rem;
  z-index: 1000;
  position: absolute;
  left: 1rem;
}

.Garage .Default_img .swiper-father .swiper-container .swiper-button-prev {
  background-image: url(../../static/images/left.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 0.7rem;
  height: 0.7rem;
  position: absolute;
  left: .2rem;
}

.Garage .Default_img .swiper-father .swiper-container .swiper-button-next {
  background-image: url(../../static/images/right.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 0.7rem;
  height: 0.7rem;
  position: absolute;
  right: .2rem;
}

</style>
<script>
import Swiper from "swiper";
import { Swipe, SwipeItem, MessageBox } from 'mint-ui';
import "swiper/dist/css/swiper.min.css";
export default {
  name: "speak",
  props: ["carlist", "imglist2", "tabData0"],
  data: function() {
    return {
      editNor: true,
      editPress: false,
      delete_icon: false,
      // 轮播图图片
      index: 0,
      arrlist: [' http://d2.yiche.com/yc-psc-ai-model-picture/2370.png', 'http://d2.yiche.com/yc-psc-ai-model-picture/1991.png', 'http://d2.yiche.com/yc-psc-ai-model-picture/2593.png'],
    }
  },
  mounted: function() {
    // 初始化swiper
    var that = this; //保存当前this对象
    var mySwiper = new Swiper(".swiper-container", {
      // 如果需要前进后退按钮
      onSlideChangeStart: function(swiper) {
        that.index = swiper.activeIndex;
      },
      prevButton: '.swiper-button-prev',
      nextButton: '.swiper-button-next',
    })
  },
  created: function() {

  },
  updated: function() {

  },
  methods: {
    // 跳转到列表页面
    Returns: function() {

    },
    // 删除按钮事件
    Delete_change: function() {
      console.log('开始删除车的图片');
      if (this.editNor == true) {
        this.editPress = true;
        this.delete_icon = true;
        this.editNor = false;
      } else if (this.editNor == false) {
        this.editPress = false;
        this.delete_icon = false;
        this.editNor = true;
      }

    },
    // 图标删除事件
    deletes: function() {
      var that = this;
      MessageBox({
          title: '确认删除',
          message: '你是否确认删除该车型?',
          showCancelButton: true
        })
        .then(function(data) {
          if (data == 'confirm') {
            console.log('说明删除车型');
            that.editPress = false;
            that.delete_icon = false;
            that.editNor = true;
          }
        })
        .catch(function(data) {
          if (data == 'cancel') {
            that.editPress = true;
            that.delete_icon = true;
            that.editNor = false;
          }
        })
    }
  },


}

</script>
