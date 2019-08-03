<template>
  <div class="list">
    <!-- 返回按钮 -->
    <div class="push_button">
      <div class="push_buttons">
        <img src="../../static/images/back@2x.png" class="returnimg" @click="Returns">
        <h3 class="titleCar">小艾懂车</h3>
      </div>
    </div>
    <!-- 上部组件信息 -->
    <div class="particulars">
      <div class="price">
        <div class="prices">
          <p class="prices_one">厂商指导价
            <span class="prices_two">{{carlist.carContent.allCarInfoResult[index].price_range}}</span>
          </p>
        </div>
      </div>
      <div class="typeofvehicle">
        <div class="car_title">
          <ul class="title_top">
            <li class="carlogo">
              <img :src="carlist.carContent.allCarInfoResult[this.index].brand_logo_url">
            </li>
            <li class="carmodel" :index="index">{{carlist.carContent.allCarInfoResult[index].moduleName}}</li>
            <li class="grade">{{carlist.carContent.allCarInfoResult[index].power_type}}</li>
          </ul>
          <div class="displacement">
            <ul class="Carlist" v-for="(item,index) in carlist.carContent.allCarInfoResult[index].appearanceConfig" :key="index">
              <li class="detail">
                <div class="details">
                  <div class="detail_one">{{item.value}}</div>
                  <div class="detail_two">{{item.name}}</div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 斜线 -->
          <div class="line">
            <div class="lines">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- swiper -->
    <div class="swiper-father" style="width: 10rem;">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(data,index) in carlist.carContent.allCarInfoResult" :key="index">
            <img :src="data.picture_url" class="pic_img" @click="routeToCar" :onerror="car_list">
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>
<style type="text/css" lang="less" scoped>
@import "../assets/css/Modellist.less";

</style>
<script>
import Swiper from "swiper";
import { Swipe, SwipeItem } from 'mint-ui';
import "swiper/dist/css/swiper.min.css";
import Bus from "./Bus.js";
export default {
  name: "Modellist",
  props: ["carlist", "imglist2", "tabData0"],
  data: function() {
    return {
      arr: {},
      // 轮播图图片
      index: 0,
      b: '',
      imglist: this.imglist2,
      car_list: 'this.src="' + require('../../static/images/lcar.png') + '"',
    }
  },
  watch: {
    tcarlist: (newVal) => {}
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
    var that = this;
    that.initWebSocket();
    this.carlist = this.carlist;
    window.localStorage.removeItem('xunhuan');
    window.localStorage.removeItem('Contrasts');
    window.localStorage.removeItem('Contrast');

  },
  methods: {
    // 跳转到首页;
    Returns: function() {
      this.$router.push({
        path: "/index"
      });

    },
    routeToCar: function() {
      let obj = {
        logId: "123",
        caller: {
          appId: "10039",
          token: "cookie"
        },
        user: {
          uuid: "9986645662345678",
          content: this.carlist.carContent.allCarInfoResult[this.index].moduleName,
          channel: "3"
        },
        parameters: {
          cityId: "0",
          sence: "0",
          version: "2.2.5",
          device: "iphone 6s",
          system: "ios",
          isRooted: "no",
          senceDataType: "0",
          abstractParam: "",
          inputMode: "1001",
          tagClassification: "100",
          pattern: "110"
        }
      };
      this.b = this.carlist.carContent.allCarInfoResult[this.index].moduleName;
      this.sence = "0"; //更改sence 进入正常会话
      this.sendData();
    },
    initWebSocket: function() {
      this.websock = new WebSocket(this.commmonWebConfig.wsuri);
      this.websock.onopen = this.websocketopen;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
      this.websock.onerror = this.websocketerror;
    },
    sendData: function(sence) {
      //发送数据
      let that = this;
      let obj = {
        logId: "123",
        caller: {
          appId: "10039",
          token: "cookie"
        },
        user: {
          uuid: "9986645662345678",
          content: this.b,
          channel: "3"
        },
        parameters: {
          cityId: "0",
          sence: sence,
          version: "2.2.5",
          device: "iphone 6s",
          system: "ios",
          isRooted: "no",
          senceDataType: "0",
          abstractParam: "",
          inputMode: "1001",
          tagClassification: "100",
          pattern: "110"
        }
      };

      let objStringify = JSON.stringify(obj);
      // console.log(objStringify);
      if (that.websock.readyState === that.websock.OPEN) {
        that.websocketsend(objStringify);
      }
      // 若是 正在开启状态，则等待300毫秒
      else if (that.websock.readyState === that.websock.CONNECTING) {
        let that = this; //保存当前对象this
        setTimeout(function() {
          that.websocketsend(objStringify);
        }, 300);
      } else {
        let that = this; //保存当前对象this
        that.initWebSocket();
        setTimeout(function() {
          that.websocketsend(objStringify);
        }, 500);
      }

      // console.log(this.b);
    },
    websocketopen: function() {
      //打开
      // console.log("WebSocket连接成功");
      // console.log(this.websock.readyState);
      this.readyState = this.websock.readyState;
    },
    websocketonmessage: function(e) {

      //数据接收
      let objStringify = JSON.parse(e.data);
      this.type = objStringify.data.type;
      // console.log(objStringify.data.content);
      // console.log("type值为：" + this.type);

      if (this.type == '12') {
        // Bus.$emit('ms', '单车');
        Bus.$emit('msgda', objStringify.data);
        window.localStorage.setItem('cas', JSON.stringify(objStringify.data));
        window.localStorage.setItem('carli', JSON.stringify(objStringify.data));


      }
    },
    websocketsend: function(agentData) {
      //数据发送
      this.websock.send(agentData);
    },
    websocketclose: function() {
      // 关闭
      // console.log("WebSocket关闭");
      // console.log(this.websock.readyState);
    },
    websocketerror: function() {
      // 失败
      // console.log("WebSocket连接失败");
    }
  },

}

</script>
