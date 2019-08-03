<template>
  <div class="Comparison_vs">
    <!-- 返回按钮 -->
    <div class="push_button">
      <div class="push_buttons">
        <img src="../../static/images/back@2x.png" class="returnimg" @click="Returns">
        <h3 class="titleCar">小艾懂车</h3>
      </div>
    </div>
    <!-- 对比图标 -->
    <div class="Contrast">
      <p class="Contrast_left" v-if="carlist.carContent.compareResult[0].is_winner==1"><img src="../../static/images/lwin.png"></p>
      <p class="Contrast_right" v-if="carlist.carContent.compareResult[1].is_winner==1"><img src="../../static/images/win.png"></p>
    </div>
    <div class="vs_img">
      <!-- 左边车图片 -->
      <span>
      <!--   <img src="../../static/images/koudi.png" class="vss1"> -->
        <img :src="carlist.carContent.compareResult[0].picture_url" alt class="vs1" @click="left_carimg">
      </span>
      <!-- 中间VS图片 -->
      <span>
        <img src="../../static/images/vs.png" alt class="vs2">
      </span>
      <!-- 右边车图片 -->
      <span>
        <img src="../../static/images/koudi.png" class="vss3">
        <img :src="carlist.carContent.compareResult[1].picture_url" alt class="vs3" @click="right_carimg">
      </span>
    </div>
    <!-- 两个车款对比信息 -->
    <div class="car_contrast">
      <div class="cartop">
        <div class="car_model_left">
          <img :src="carlist.carContent.compareResult[0].brand_logo_url" class="car_img1">
          <div class="carss">
            <!-- 车左边的名称-->
            <p class="carss_bot">{{carlist.carContent.compareResult[0].carModuleName}}</p>
          </div>
        </div>
        <div class="car_model_right">
          <img :src="carlist.carContent.compareResult[1].brand_logo_url" alt="" class="car_img2">
          <div class="carss1">
            <!-- 车右边的名称 -->
            <p class="carss_top1">{{carlist.carContent.compareResult[1].carModuleName}}</p>
          </div>
        </div>
        <div class="car_model_text">
          <div class="car_model_text_left">
            <!-- 右边车款信息 -->
            <span>{{carlist.carContent.compareResult[1].styleName}}</span>
          </div>
          <div class="car_model_text_right">
            <!-- 左边车款信息 -->
            <span>{{carlist.carContent.compareResult[0].styleName}}</span>
          </div>
        </div>
      </div>
      <div class="car_img">
        <!-- 右边车款点击事件 -->
        <img src="../../static/images/car_vs.png" alt class="car_img_left" @click="Vehicle_comparison">
        <!-- 左边车款点击事件 -->
        <img src="../../static/images/car_vs.png" alt class="car_img_right" @click="Vehicle_comparisons">
      </div>
    </div>
    <div class="car_list">
      <p v-for="(item,index) in carlist.carContent.compareResult[0].paramConfigCompare" :key="index">
        <!-- 左侧车款配置信息 -->
        <span>{{item.value}}</span>
        <!-- 中间车款的名称 -->
        <span class="spant">{{item.name}}</span>
        <!-- 右侧车款配置信息 -->
        <span class="spans">{{carlist.carContent.compareResult[1].paramConfigCompare[index].value}}</span>
      </p>
    </div>
    <div class="mask_top">
      <img src="../../static/images/blink.gif" v-if="imghiding">
      <div class="mask" v-show="toggleflag" @click="swit">
      </div>
    </div>
    <div class="carmode1" v-if="leftCa">
      <div class="brands">
        <img :src="carlist.carContent.compareResult[0].brand_logo_url" alt>
        <span>{{carlist.carContent.compareResult[0].carModuleName}}</span>
      </div>
      <div class="carmodelist" v-for="(item,index) in leftCar" :key="index" :datalist="datalist">
        <p @click="Vehicle_payment_left(item,datalist)">
          <span>{{item.style_common_name}}</span>
        </p>
      </div>
    </div>
    <div class="carmode1" v-if="leftCars">
      <div class="brands">
        <img :src="carlist.carContent.compareResult[1].brand_logo_url" alt>
        <span>{{carlist.carContent.compareResult[1].carModuleName}}</span>
      </div>
      <div class="carmodelist" v-for="(item,index) in rightcar" :key="index" :datalist="datalist">
        <p @click="Vehicle_payment_rigth(item,datalist)">
          <span>{{item.style_common_name}}</span>
        </p>
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

.Comparison_vs {
  width: 10rem;
  margin: 0 auto;
  background-image: url(../../static/images/img_background.png);
  background-size: cover;
  position: relative;
}

.Comparison_vs .Contrast {
  width: 10rem;
  height: .65rem;
}

.Comparison_vs .Contrast .Contrast_left {
  float: left;
  width: 1.506667rem;
  height: .65rem;
}

.Comparison_vs .Contrast .Contrast_left img {
  width: 100%;
  height: 100%;
}

.Comparison_vs .Contrast .Contrast_right {
  float: right;
  width: 1.506667rem;
  height: .65rem;
}

.Comparison_vs .Contrast .Contrast_right img {
  height: 100%;
  width: 100%;
}

.Comparison_vs .push_button {
  width: 100%;
  height: 1.2rem;
}

.Comparison_vs .push_button .push_buttons {
  width: 10rem;
  height: 1rem;
  background: #fff;
  position: relative;
}

.Comparison_vs .push_button .push_buttons .returnimg {
  width: .8rem;
  height: .8rem;
}

.Comparison_vs .push_button .push_buttons img {
  width: .906667rem;
  height: .906667rem;
  position: absolute;
  top: .1rem;
}

.Comparison_vs .push_button .push_buttons .titleCar {
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

.Comparison_vs .vs_img {
  width: 10rem;
  height: 2rem;
  position: relative;
}

.Comparison_vs .vs_img span {
  float: left;
  display: inline-block;
}

.Comparison_vs .vs_img span .vss1 {
  position: absolute;
  width: 2.5rem;
  height: 1.2rem;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  top: .48rem;
  left: .25rem;
}

.Comparison_vs .vs_img span .vs1 {
  position: absolute;
  width: 2.9rem;
  height: 100%;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  z-index: 10;
}

.Comparison_vs .vs_img span .vs2 {
  width: .933333rem;
  height: .666667rem;
  position: absolute;
  left: 50%;
  margin-left: -.46rem;
  top: 50%;
  margin-top: -.3rem;
}

.Comparison_vs .vs_img span .vs3 {
  width: 2.9rem;
  height: 100%;
  position: absolute; // left: 3rem;
  right: 0rem;
  z-index: 10;
}

.Comparison_vs .vs_img span .vss3 {
  position: absolute;
  width: 2.5rem;
  height: 1.2rem;
  right: .25rem;
  top: .45rem;
}

.Comparison_vs .car_contrast {
  height: 2.666667rem;
  width: 10rem;
  padding-left: .32rem;
  padding-right: .32rem;
  box-sizing: border-box;
  position: relative;
}

.Comparison_vs .car_contrast .cartop {
  min-height: 1.7rem;
  margin-bottom: .6rem;
  position: relative;
}

.Comparison_vs .car_contrast .car_model_left {
  float: left;
  min-height: 1.333333rem;
  width: 50%;
  position: absolute;
}

.Comparison_vs .car_contrast .car_model_left .car_img1 {
  width: .55rem;
  height: .55rem;
}

.Comparison_vs .car_contrast .car_model_left .carss {
  position: absolute;
  width: 3.9rem;
  left: .8rem;
  top: -.1rem;
}

.Comparison_vs .car_contrast .car_model_left .carss:after {
  content: '';
  position: absolute;
  width: 1px;
  height: 1.85rem;
  background: #3c7df7;
  top: .18rem;
  left: -1rem;
}

.Comparison_vs .car_contrast .car_model_left .carss .carss_top {
  .px2px(font-size, 27px);
  color: #3b3b3b;
  font-weight: bold;
}

.Comparison_vs .car_contrast .car_model_left .carss .carss_bot {
  .px2px(font-size, 23px);
  color: #454545;
  font-weight: bold;
  position: absolute;
  top: .15rem;
  width: 3rem;
  min-height: .5rem;
  left: -.115rem;
}

.Comparison_vs .car_contrast .car_model_right {
  float: right;
  height: 1.4rem;
  width: 50%;
  position: relative;
}

.Comparison_vs .car_contrast .car_model_right .car_img2 {
  width: .55rem;
  height: .55rem;
  position: absolute;
  right: -.06rem;
  top: -.07rem;
}

.Comparison_vs .car_contrast .car_model_right .carss1 {
  position: absolute;
  width: 3.8rem;
  height: 100%;
  left: .2rem;
  top: -.1rem;
}

.Comparison_vs .car_contrast .car_model_right .carss1 .carss_top1 {
  .px2px(font-size, 23px);
  color: #3b3b3b;
  font-weight: bold;
  position: absolute;
  right: 0rem;
  top: .1rem;
}

.Comparison_vs .car_contrast .car_model_right .carss1 .carss_bot1 {
  .px2px(font-size, 10px);
  color: #454545;
  position: absolute;
  top: .5rem;
  right: 0;
}

.Comparison_vs .car_contrast .car_model_right .carss1:after {
  content: '';
  position: absolute;
  width: 1px;
  height: 1.85rem;
  background: #f5706b;
  top: .1rem;
  right: -.9rem;
}

.Comparison_vs .car_contrast .car_model_text .car_model_text_left {
  position: absolute;
  width: 3.2rem;
  height: 1.45rem;
  right: -.03rem;
  top: .5rem;
}

.Comparison_vs .car_contrast .car_model_text .car_model_text_left span {
  position: absolute;
  text-align: right;
  right: 0rem;
}

.Comparison_vs .car_contrast .car_model_text .car_model_text_right {
  position: absolute;
  width: 3.8rem;
  height: 1.45rem;
  left: 0rem;
  top: .6rem;
}

.Comparison_vs .car_contrast .car_img {
  width: 100%;
  height: .65rem;
  position: relative;
}

.Comparison_vs .car_contrast .car_img .car_img_left {
  height: 100%;
  width: 1.6rem;
  position: absolute;
  left: .5rem;
}

.Comparison_vs .car_contrast .car_img .car_img_right {
  height: 100%;
  width: 1.6rem;
  position: absolute;
  right: .5rem;
}

.Comparison_vs .car_list {
  width: 10rem;
  box-sizing: border-box;
  padding: .64rem .586667rem 0 .586667rem;
  overflow: auto;
  height: 10.2rem;
}

.Comparison_vs .car_list p {
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: .133333rem;
  padding-top: .133333rem; // vertical-align: middle;
  height: .85rem;
  line-height: .85rem;
}

.Comparison_vs .car_list p span {
  width: 32.2%;
  display: inline-block;
  text-align: left;
}

.Comparison_vs .car_list p .spant {
  text-align: center;
}

.Comparison_vs .car_list p .spans {
  text-align: right;
}

.Comparison_vs .mask_top {
  width: 10rem;
  margin: 0 auto;
}

.Comparison_vs .mask_top img {
  width: 1.386667rem;
  height: 1.386667rem;
  position: absolute;
  left: .373333rem;
  top: .6rem;
  z-index: 10000;
}

.Comparison_vs .mask_top .mask {
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

.Comparison_vs .carmode1 {
  width: 10rem;
  min-height: 15rem;
  background: #fff;
  position: absolute;
  left: 0rem;
  top: 2.8rem;
  bottom: 0;
  z-index: 300;
  overflow-y: scroll;
}

.Comparison_vs .carmode1 .brands {
  height: 1.5rem;
}

.Comparison_vs .carmode1 .brands img {
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: .2rem;
  left: .2rem;
}

.Comparison_vs .carmode1 .brands span {
  .px2px(font-size, 30px);
  position: absolute;
  top: .4rem;
  left: 1.5rem;
}

.Comparison_vs .carmode1 .carmodelist {
  width: 10rem;
  padding-left: .373333rem;
  padding-right: .373333rem;
  box-sizing: border-box;
  position: relative;
}

.Comparison_vs .carmode1 .carmodelist p {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 1px solid #ebebeb;
}

</style>
<script>
import Bus from "./Bus.js";
export default {
  name: "Comparison",
  props: ["carlist"],
  components: {},
  data: function() {
    return {
      left_lock: false,
      right_lock: false,
      toggleflag: false,
      leftCar: [],
      rightcar: [],
      arrindex: "0",
      datalist: '',
      b: '',
      datas: '',
      type: '',
      leftCa: false,
      leftCars: false,
      car_name: '',
      imghiding: false,
      xunhuans: '',
    };
  },
  mounted: function() {},
  created: function() {
    //钩子函数建立websocket连接
    this.initWebSocket();
  },
  methods: {
    // 点击左边车图片
    left_carimg: function() {
      let that = this;
      that.car_name = that.carlist.carContent.compareResult[0].carModuleName;
      that.sendDatas();
    },
    // 点击右边车型的图片
    right_carimg: function() {
      let that = this;
      that.car_name = that.carlist.carContent.compareResult[1].carModuleName;
      that.sendDatas();
    },
    sendDatas: function(sence) {
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
          content: this.car_name,
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
    // 返回按钮
    Returns: function() {
      var that = this;
      var shuju = JSON.stringify(window.localStorage.getItem('carli'));
      if (shuju == 'null') {
        Bus.$emit("ms", '9你' + that.carlist.carContent.compareResult[0].carModuleName);
      } else {
        Bus.$emit("ms", '4');
        // console.log('发4');
      }
      window.localStorage.removeItem('xunhuan');
      window.localStorage.removeItem('Contrasts');
      window.localStorage.removeItem('Contrast');

    },
    // 点击左边车款信息的方法
    Vehicle_payment_left: function(e) {
      this.imghiding = false;
      let that = this;
      let id = that.carlist.carContent.compareResult[1].styleId;
      let obj1 = {
        "_id1": e.id,
        "_id2": id
      };
      var obj = JSON.stringify(obj1);
      that.datas = obj;
      this.sendData('19');
      that.leftCa = false;
      that.leftCars = false;
      this.toggleflag = false;
      ModalHelper.beforeClose();
    },
    Vehicle_payment_rigth: function(e) {
      this.imghiding = false;
      let that = this;
      that.leftCa = false;
      that.leftCars = false;
      that.toggleflag = false;
      let id = that.carlist.carContent.compareResult[0].styleId;
      let obj1 = {
        "_id1": id,
        "_id2": e.id
      };
      var obj = JSON.stringify(obj1);
      this.datas = obj;
      // console.log(this.datas);
      this.sendData('19');
    },
    swit: function() {
      this.toggleflag = !this.toggleflag;
      this.leftCa = false;
      this.leftCars = false;
      this.imghiding = false;
      ModalHelper.beforeClose();
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
        "logId": "123",
        "caller": {
          "appId": "10038",
          "token": "cookie"
        },
        "user": {
          "uuid": "9986645662345678",
          "content": "",
          "channel": "3",
        },
        "parameters": {
          "cityId": "0",
          "sence": sence,
          "version": "2.3.0",
          "device": "iphone 6s",
          "system": "ios",
          "isRooted": "no",
          "senceDataType": "0",
          "abstractParam": this.datas,
          "inputMode": "1001",
          "tagClassification": "100",
          "pattern": "110"
        }
      }
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
    },
    Vehicle_comparisons: function() {
      let that = this;
      that.right_lock = true;
      if (that.left_lock) {
        that.left_lock = false;
      }
      that.leftCars = true;
      that.leftCa = false;
      that.imghiding = true;
      that.toggleflag = !that.toggleflag;
      let obj = {
        logId: "123",
        caller: {
          appId: "10039",
          token: "cookie"
        },
        user: {
          uuid: "9986645662345678",
          // content: that.carlist.carContent.compareResult[1].moduleName,
          content: '',
          channel: "3"
        },
        parameters: {
          cityId: "0",
          sence: "14",
          version: "2.2.5",
          device: "iphone 6s",
          system: "ios",
          isRooted: "no",
          senceDataType: "0",
          abstractParam: '{"modelId":' +
            that.carlist.carContent.bjCompareRes[1].moduleId +
            ',"brandId":""}',
          inputMode: "1001",
          tagClassification: "100",
          pattern: "110"
        }
      };
      let objStringify = JSON.stringify(obj);
      // 通过websocket向服务器发送请求
      that.websocketsend(objStringify);
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
      ModalHelper.afterOpen();
    },
    Vehicle_comparison: function() {
      let that = this;
      that.left_lock = true;
      if (that.right_lock) {
        that.right_lock = false;
      }
      that.leftCa = true;
      that.toggleflag = !that.toggleflag;
      that.imghiding = true;
      that.leftCars = false;
      let obj = {
        logId: "123",
        caller: {
          appId: "10039",
          token: "cookie"
        },
        user: {
          uuid: "9986645662345678",
          // content: that.carlist.carContent.compareResult[0].moduleName,
          content: '',
          channel: "3"
        },
        parameters: {
          cityId: "0",
          sence: "14",
          version: "2.2.5",
          device: "iphone 6s",
          system: "ios",
          isRooted: "no",
          senceDataType: "0",
          abstractParam: '{"modelId":' +
            that.carlist.carContent.bjCompareRes[0].moduleId +
            ',"brandId":""}',
          inputMode: "1001",
          tagClassification: "100",
          pattern: "110"
        }
      };
      let objStringify = JSON.stringify(obj);
      // 通过websocket向服务器发送请求
      that.websocketsend(objStringify);
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
      ModalHelper.afterOpen();
    },
    websocketsend: function(agentData) {
      //数据发送
      this.websock.send(agentData);
    },
    websocketonmessage: function(e) {
      let that = this;
      //数据接收
      let objStringify = JSON.parse(e.data);
      // console.log(objStringify.data.type);
      // console.log(objStringify);
      that.type = objStringify.data.type;
      if (that.type == '37') {
        if (that.left_lock) {
          that.leftCar =
            objStringify.data.carContent.brandsAndModelsCarListBean[0].modelsCarListBean[0].style_list[0].bean_list;
        } else if (that.right_lock) {

          that.rightcar = objStringify.data.carContent.brandsAndModelsCarListBean[0].modelsCarListBean[0].style_list[0].bean_list;

        }
      } else if (that.type == '25') {
        if (that.right_lock) {
          this.carlist.carContent.compareResult[1].moduleName = objStringify.data.carContent.compareResult[1].moduleName;
          this.carlist.carContent.compareResult[1].paramConfigCompare = objStringify.data.carContent.compareResult[1].paramConfigCompare;
          this.carlist.carContent.compareResult[1].styleName = objStringify.data.carContent.compareResult[1].styleName;
          // 存入要改变的数据
          window.localStorage.setItem('Contrast', JSON.stringify(objStringify.data));
        } else if (that.left_lock) {
          this.carlist.carContent.compareResult[0].moduleName = objStringify.data.carContent.compareResult[0].moduleName;
          this.carlist.carContent.compareResult[0].paramConfigCompare = objStringify.data.carContent.compareResult[0].paramConfigCompare;
          this.carlist.carContent.compareResult[0].styleName = objStringify.data.carContent.compareResult[0].styleName;
          window.localStorage.setItem('Contrasts', JSON.stringify(objStringify.data));
        }
        window.localStorage.setItem('xunhuan', JSON.stringify(this.carlist));
      } else if (that.type == '12') {

        Bus.$emit('参数对比', objStringify.data);
      }


    }
  }
};

</script>
