<template>
  <div class="list">
    <!-- 返回按钮 -->
    <div class="push_button">
      <div class="push_buttons">
        <img src="../../static/images/back@2x.png" class="returnimg" @click="Jump">
        <h3 class="titleCar">小艾懂车</h3>
      </div>
    </div>
    <!-- 上部组件信息一 -->
    <div class="particulars" v-if="carlist.carContent.allCarInfoResult[0].appearanceConfig.length >=5">
      <!-- 收藏图标 -->
      <!-- <div @click="pictures(carlist)">
        <div class="Collection" v-if="displaying">
          <img src="../../static/images/ovalpress.png">
        </div>
        <div class="Collection" v-if="displayings">
          <img src="../../static/images/ovalselec.png">
        </div>
      </div> -->
      <div class="price">
        <div class="prices">
          <p class="prices_one">厂商指导价
            <span class="prices_two">{{carlist.carContent.allCarInfoResult[0].price_range}}</span>
          </p>
        </div>
      </div>
      <div class="typeofvehicle">
        <div class="car_title">
          <ul class="title_top">
            <li class="carlogo">
              <img :src="carlist.carContent.allCarInfoResult[0].brand_logo_url">
            </li>
            <li class="carmodel">{{carlist.carContent.allCarInfoResult[0].moduleName}}</li>
            <li class="grade">{{carlist.carContent.allCarInfoResult[0].power_type}}</li>
          </ul>
          <div class="displacement">
            <ul class="Carlist" v-for="(item,index) in carlist.carContent.allCarInfoResult[0].appearanceConfig" :key="index">
              <li class="detail">
                <div class="details">
                  <div class="detail_one">{{item.value}}</div>
                  <div class="detail_two">{{item.name}}</div>
                </div>
                <!-- <p class="detail_one">{{item.value}}</p>
                <p>{{item.name}}</p> -->
              </li>
            </ul>
          </div>
          <!-- 斜线 -->
          <div class="line"></div>
        </div>
      </div>
    </div>
    <!-- 单车页面一 -->
    <div class="Bicycle" v-if="carlist.carContent.allCarInfoResult[0].appearanceConfig.length >=5">
      <img :src="carlist.carContent.allCarInfoResult[0].picture_url" class="car_img" :onerror="car_Bicycle">
    </div>
    <!-- 上部组件信息二 -->
    <div class="particular" v-if="carlist.carContent.allCarInfoResult[0].appearanceConfig.length <=3">
      <!-- 收藏图标 -->
      <!--  <div @click="pictures(carlist)">
        <div class="Collection" v-if="displaying">
          <img src="../../static/images/ovalpress.png">
        </div>
        <div class="Collection" v-if="displayings">
          <img src="../../static/images/ovalselec.png">
        </div>
      </div> -->
      <div class="price">
        <div class="prices">
          <p class="prices_one">厂商指导价
            <span class="prices_two">{{carlist.carContent.allCarInfoResult[0].price_range}}</span>
          </p>
        </div>
      </div>
      <div class="typeofvehicle">
        <div class="car_title">
          <ul class="title_top">
            <li class="carlogo">
              <img :src="carlist.carContent.allCarInfoResult[0].brand_logo_url">
            </li>
            <li class="carmodel">{{carlist.carContent.allCarInfoResult[0].moduleName}}</li>
            <li class="grade">{{carlist.carContent.allCarInfoResult[0].power_type}}</li>
          </ul>
          <div class="displacement">
            <ul class="Carlist" v-for="(item,index) in carlist.carContent.allCarInfoResult[0].appearanceConfig" :key="index">
              <li class="detail">
                <div class="details">
                  <div class="detail_one">{{item.value}}</div>
                  <div class="detail_two">{{item.name}}</div>
                </div>
                <!--  <p class="detail_one">{{item.value}}</p>
                <p>{{item.name}}</p> -->
              </li>
            </ul>
          </div>
          <!-- 斜线 -->
          <div class="line"></div>
        </div>
      </div>
    </div>
    <!-- 单车页面二 -->
    <div class="Bicycles" v-if="carlist.carContent.allCarInfoResult[0].appearanceConfig.length <=3">
      <img :src="carlist.carContent.allCarInfoResult[0].picture_url" class="car_img">
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

.list {
  width: 10rem;
  margin: 0 auto;
  background: url(../../static/images/img_background.png) no-repeat;
  background-size: cover;
}

.list .push_button {
  width: 100%;
  height: 1.5rem;
}

.list .push_button .push_buttons {
  width: 10rem;
  height: .9rem;
  background: #fff;
  position: relative;
}

.list .push_button .push_buttons .returnimg {
  width: .8rem;
  height: .8rem;
}

.list .push_button .push_buttons img {
  width: .906667rem;
  height: .906667rem;
  position: absolute;
  top: .1rem;
}

.list .push_button .push_buttons .titleCar {
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

.list .particulars {
  width: 10rem;
  height: 4.9rem;
  position: relative;
}

.list .particulars .price {
  width: 100%;
  height: 0rem;
  position: relative;
  margin-bottom: .1rem;
}

.list .particulars .price .prices {
  width: 7.786667rem;
  margin-left: 1.066667rem;
  margin-right: 1.066667rem;
  box-sizing: border-box;
  position: relative;
}

.list .particulars .price .prices_one {
  position: absolute;
  right: 0;
  top: 4.9rem;
  color: #686868;
  .px2px(font-size, 21px);
}

.list .particulars .price .prices_one .prices_two {
  width: 100%;
  color: #3c7df7;
  .px2px(font-size, 38px);
}

.list .particulars .typeofvehicle {
  width: 100%;
  height: 3.066667rem;
  position: relative;
}

.list .particulars .typeofvehicle .car_title {
  width: 7.8rem;
  height: 4.8rem;
  background: #a0a4b1;
  position: absolute;
  left: 1.066667rem;
  right: 1.066667rem;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}

// 斜线
.list .particulars .typeofvehicle .car_title .line {
  width: 3.3rem;
  height: .03rem;
  position: absolute;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  background: #4f546b;
  left: -.5rem;
  top: 5.9rem;
  opacity: 0.3;
}

.list .particulars .typeofvehicle .car_title .title_top {
  width: 100%;
  height: 1.173333rem;
  position: relative;
}

.list .particulars .typeofvehicle .car_title .title_top li {
  float: left;
  display: inline-block;
  margin-left: .133333rem;
  margin-top: .36rem;
  min-height: .6rem;
  text-align: center;
}

.list .particulars .typeofvehicle .car_title .title_top .carlogo {
  margin-left: .2rem;
}

.list .particulars .typeofvehicle .car_title .title_top .carlogo img {
  width: .53rem;
  height: .53rem;
  box-sizing: border-box;
}

.list .particulars .typeofvehicle .car_title .title_top .carmodel {
  color: #fff;
  line-height: .5rem;
  .px2px(font-size, 33px);
}

.list .particulars .typeofvehicle .car_title .title_top .grade {
  color: #fff;
  line-height: .55rem;
  .px2px(font-size, 25px);
}

.list .particulars .typeofvehicle .car_title .displacement {
  width: 7.8rem;
  height: 1.6rem;
  position: relative;
}

.list .particulars .typeofvehicle .car_title .displacement .Carlist {
  margin-left: .253333rem;
}

.list .particulars .typeofvehicle .car_title .displacement ul li {
  float: left;
  display: inline-block;
  width: 2.373333rem;
  height: 1.6rem;
  background: #7e8597;
  margin-right: .106667rem;
  color: #d8dae0;
  border-radius: 5px;
  text-align: center; // line-height: .8rem;
  margin-bottom: .2rem;
  position: relative;
  box-sizing: border-box;
}

.list .particulars .typeofvehicle .car_title .displacement ul li .details {
  width: 2.373333rem;
  height: 1.026667rem;
  position: absolute;
  top: 50%;
  margin-top: -.48rem;
}

.list .particulars .typeofvehicle .car_title .displacement ul li .details .detail_one {
  width: 2.373333rem;
  height: .6rem;
  .px2px(font-size, 24px); // font-weight: 550; // font-weight: bold;
  text-align: center;
}

.list .particulars .typeofvehicle .car_title .displacement ul li .details .detail_two {
  height: .4rem;
  width: 2.373333rem;
  position: absolute; // .px2px(font-size, 28px);
  text-align: center;
}

.list .particulars .typeofvehicle .car_title .displacement ul:nth-child(4) li {
  width: 3.6rem;
}

.list .particulars .typeofvehicle .car_title .displacement ul:nth-child(4) li .details {
  width: 3.6rem;
  height: 1.026667rem;
  position: absolute;
  top: 50%;
  margin-top: -.5rem;
}

.list .particulars .typeofvehicle .car_title .displacement ul:nth-child(4) li .details .detail_one {
  width: 3.6rem;
  height: .6rem;
  .px2px(font-size, 25px);
  font-weight: 550; // font-weight: bold;
  text-align: center;
}

.list .particulars .typeofvehicle .car_title .displacement ul:nth-child(4) li .details .detail_two {
  height: .4rem;
  width: 3.6rem;
  text-align: center;
}

.list .particulars .typeofvehicle .car_title .displacement ul:nth-child(5) li {
  width: 3.6rem;
}

.list .particulars .typeofvehicle .car_title .displacement ul:nth-child(5) li .details {
  width: 3.6rem;
  height: 1.026667rem;
  position: absolute;
  top: 50%;
  margin-top: -.5rem;
}

.list .particulars .typeofvehicle .car_title .displacement ul:nth-child(5) li .details .detail_one {
  width: 3.6rem;
  height: .6rem;
  .px2px(font-size, 25px); // font-weight: 550; // font-weight: bold;
  text-align: center;
}

.list .particulars .typeofvehicle .car_title .displacement ul:nth-child(5) li .details .detail_two {
  height: .4rem;
  width: 3.6rem;
  text-align: center;
}

.list .particulars .typeofvehicle .car_title .displacement .Carlist li .detail_one {
  .px2px(font-size, 24.5px); // font-weight: bold;
}

.list .Bicycle {
  margin-top: 1.2rem;
  width: 10rem;
  height: 5.5rem;
}

.list .Bicycle .car_img {
  width: 8.986667rem;
  height: 5.5rem;
  box-sizing: border-box;
  margin-left: .533333rem;
}

// 样式二
.list .particular .typeofvehicle {
  width: 100%;
  height: 2.3rem;
  position: relative;
}

.list .particular .typeofvehicle .car_title {
  width: 7.8rem;
  min-height: 3.1rem;
  background: #a0a4b1;
  position: absolute;
  left: 1.066667rem;
  right: 1.066667rem;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}

// 斜线
.list .particular .typeofvehicle .car_title .line {
  width: 3.6rem;
  height: .03rem;
  position: absolute;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  background: #4f546b;
  left: -.5rem;
  top: 4.4rem;
  opacity: 0.3;
}

.list .particular .price {
  width: 100%;
  height: .8rem;
  position: relative;
  margin-bottom: .1rem;
}

.list .particular .price .prices {
  width: 7.786667rem;
  margin-left: 1.066667rem;
  margin-right: 1.066667rem;
  box-sizing: border-box;
  position: relative;
}

.list .particular .price .prices_one {
  position: absolute;
  right: 0;
  top: 4.1rem;
  color: #686868;
  .px2px(font-size, 21px);
}

.list .particular .price .prices_one .prices_two {
  width: 100%;
  color: #3c7df7;
  .px2px(font-size, 38px);
}

.list .particular .typeofvehicle .car_title .title_top {
  width: 100%;
  height: 1.173333rem;
  position: relative;
}

.list .particular .typeofvehicle .car_title .title_top li {
  float: left;
  display: inline-block;
  margin-left: .133333rem;
  margin-top: .36rem;
  min-height: .6rem;
  text-align: center;
}

.list .particular .typeofvehicle .car_title .title_top .carlogo {
  margin-left: .2rem;
}

.list .particular .typeofvehicle .car_title .title_top .carlogo img {
  width: .53rem;
  height: .53rem;
  box-sizing: border-box;
}

.list .particular .typeofvehicle .car_title .title_top .carmodel {
  color: #fff;
  line-height: .5rem;
  .px2px(font-size, 33px)
}

.list .particular .typeofvehicle .car_title .title_top .grade {
  color: #fff;
  .px2px(font-size, 25px);
  line-height: .55rem;
}

.list .particular .typeofvehicle .car_title .displacement {
  width: 7.8rem;
  height: 1.6rem;
  position: relative;
}

.list .particular .typeofvehicle .car_title .displacement .Carlist {
  margin-left: .253333rem;
}

.list .particular .typeofvehicle .car_title .displacement .Carlist li {
  float: left;
  display: inline-block;
  width: 2.373333rem;
  height: 1.6rem;
  background: #7e8597;
  margin-right: .106667rem;
  color: #d8dae0;
  border-radius: 5px; // text-align: center;
  // line-height: .8rem;
}

.list .particular .typeofvehicle .car_title .displacement .Carlist li .details {
  width: 2.373333rem;
  height: 1.026667rem;
  position: absolute;
  top: 50%;
  margin-top: -.53rem;
}

.list .particular .typeofvehicle .car_title .displacement .Carlist li .details .detail_one {
  width: 2.37rem;
  height: .6rem;
  .px2px(font-size, 26px);
  font-weight: 550;
  text-align: center;
}

.list .particular .typeofvehicle .car_title .displacement .Carlist li .details .detail_two {
  width: 2.37rem;
  height: .4rem;
  position: absolute;
  text-align: center;
  margin-top: .005rem;
}

// .list .particular .typeofvehicle .car_title .displacement .Carlist li .detail_one {
//   .px2px(font-size, 25px);
//   font-weight: bold;
// }
.list .Bicycles {
  width: 10rem;
  height: 6.666667rem;
  margin-top: 1.8rem;
}


.list .Bicycles .car_img {
  width: 8.986667rem;
  height: 6.666667rem;
  box-sizing: border-box;
  margin-left: .533333rem;
}

.list .particulars .Collection {
  width: .666667rem;
  height: .666667rem;
  position: absolute;
  right: 1.45rem;
  top: .24rem;
  z-index: 100;
}

.list .particulars .Collection img {
  width: 100%;
  height: 100%;
}

.list .particular .Collection {
  width: .666667rem;
  height: .666667rem;
  position: absolute;
  right: 1.45rem;
  top: 2.6rem;
  z-index: 100;
}

.list .particular .Collection img {
  width: 100%;
  height: 100%;
}

</style>
<script>
import Bus from "./Bus.js";
import { MessageBox } from 'mint-ui';
export default {
  name: "Car",
  props: ["carlist", "imglist2", "tabData0"],
  data: function() {
    return {
      displaying: true,
      displayings: false,
      arr: {},
      imglist: '',
      car_Bicycle: 'this.src="' + require('../../static/images/lcar.png') + '"',
    }
  },
  mounted: function() {


  },

  created: function() {
    window.localStorage.removeItem('xunhuan');
    window.localStorage.removeItem('Contrasts');
    window.localStorage.removeItem('Contrast');
  },
  updated: function() {

  },
  methods: {
    // 跳转到列表页面
    Jump: function() {
      this.$router.push({
        path: "/index"
      });

    },
    // 收藏事件
    pictures: function(data) {
      let that = this;
      MessageBox.confirm('', {   message: '你是否确认收藏该车型?',   title: '确认收藏',   confirmButtonText: '确认',   cancelButtonText: '取消'   }).then(action => { 
        if (action == 'confirm') {
          //       console.log('说明收藏该车型');
          that.displaying = false;
          that.displayings = true; 
        }
      }).catch(err => {  
        if (err == 'cancel') { 
          //       console.log('说明取消该车型');
          that.displayings = false;
          that.displaying = true; 
        }  
      });
    }
  },

}

</script>
