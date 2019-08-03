<template>
  <div class="Tablet">
    <!-- 返回按钮 -->
    <div class="push_button">
      <div class="push_buttons">
        <img src="../../static/images/back@2x.png" class="returnimg" @click="Jump">
        <h3 class="titleCar">小艾懂车</h3>
      </div>
    </div>
    <div class="heidings">
      <!-- 车图片对比 -->
      <div class="car_Contrast">
        <p class="Contrast_one">
          <img :src="carlist.carContent.bjCompareRes[0].picture_url" @click="left_btn" class="imgy">
        </p>
        <p class="Contrast_two">
          <img src="../../static/images/vs.png">
        </p>
        <p class="Contrast_Three">
          <img src="../../static/images/koudi.png" class="img_one">
          <img :src="carlist.carContent.bjCompareRes[1].picture_url" @click="right_btn" class="img_two">
        </p>
      </div>
      <!-- 车的信息对比 -->
      <div class="car_information">
        <p class="information_one"></p>
        <p class="information_two"></p>
        <div class="information_left">
          <P class='list_one'>
            <img :src="carlist.carContent.bjCompareRes[0].brand_logo_url">
            <span>{{carlist.carContent.bjCompareRes[0].moduleName}}</span>
          </P>
          <P class="list_two">{{carlist.carContent.bjCompareRes[0].styleName}}</P>
          <P class="list_Three">{{carlist.carContent.bjCompareRes[0].price_measure}}万</P>
          <p class="list_Four">厂商指导价</p>
        </div>
        <div class="information_rigth">
          <P class='list_one'>
            <img :src="carlist.carContent.bjCompareRes[1].brand_logo_url">
            <span>{{carlist.carContent.bjCompareRes[1].moduleName}}</span>
          </P>
          <P class="list_two">{{carlist.carContent.bjCompareRes[1].styleName}}</P>
          <P class="list_Three">{{carlist.carContent.bjCompareRes[1].price_measure}}万</P>
          <p class="list_Four">厂商指导价</p>
        </div>
      </div>
      <!-- 综合评分 -->
      <div class="Heald">
        <div class="Middle">
          <p class="Middle_one">{{carlist.carContent.bjCompareRes[0].score?carlist.carContent.bjCompareRes[0].score:'暂无'}}</p>
          <p class="Middle_two">综合评价</p>
          <p class="Middle_Three">{{carlist.carContent.bjCompareRes[1].score?carlist.carContent.bjCompareRes[1].score:'暂无'}}</p>
        </div>
        <div class="img_left" v-if="list_arr.carContent.bjCompareRes[0].is_winner==1">
          <img src="../../static/images/lwin.png">
        </div>
        <div class="img_right" v-if="list_arr.carContent.bjCompareRes[1].is_winner==1">
          <img src="../../static/images/win.png">
        </div>
      </div>
      <!-- 对比参数 -->
      <div class="parameter">
        <div class='mkoubeiList'>
          <div class='mkoubeiListBox' v-for="(item,index) in list">
            <div class='mleftScores'>{{item.leftScore?item.leftScore:'--'}}</div>
            <div class='mleftLine'>
              <div class='mchildLineL' :style="{'width':item.left_scoring+'rem'}"> </div>
            </div>
            <div class='mrightScores'>{{item.rightScore?item.rightScore:'--'}}</div>
            <div class='mrightLine'>
              <div class='mchildLineR' :style="{'width':item.right_scoring+'rem'}"> </div>
            </div>
            <div class='mkoubeiListName'>{{item.scoreName}}</div>
          </div>
        </div>
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

.Tablet {
  width: 10rem;
  margin: 0 auto;
  background: url(../../static/images/img_background.png) no-repeat;
  background-size: cover;
}

.Tablet .push_button {
  width: 100%;
  height: 1.76rem;
}

.Tablet .push_button .push_buttons {
  width: 10rem;
  height: .9rem;
  background: #fff;
  position: relative;
}

.Tablet .push_button .push_buttons .returnimg {
  width: .8rem;
  height: .8rem;
}

.Tablet .push_button .push_buttons img {
  width: .906667rem;
  height: .906667rem;
  position: absolute;
  top: .1rem;
}

.Tablet .push_button .push_buttons .titleCar {
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

.Tablet .heidings {
  width: 10rem;
  height: 100%;
}

.Tablet .car_Contrast {
  width: 10rem;
  height: 2rem;
  position: relative;
}

.Tablet .car_Contrast .Contrast_one {
  width: 2.933333rem;
  height: 2rem;
  position: relative;
}

.Tablet .car_Contrast .Contrast_one .imgm {
  position: absolute;
  top: .5rem;
  left: .3rem;
  width: 2.5rem;
  height: 1.2rem;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
}

.Tablet .car_Contrast .Contrast_one .imgy {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  z-index: 10000;
}

.Tablet .car_Contrast .Contrast_Three {
  width: 2.9rem;
  height: 2rem;
  position: absolute;
  right: 0;
  top: 0;
}

.Tablet .car_Contrast .Contrast_Three .img_one {
  width: 2.5rem;
  height: 1.2rem;
  top: .5rem;
  left: .15rem;
  position: absolute;
}

.Tablet .car_Contrast .Contrast_Three .img_two {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
}

.Tablet .car_Contrast .Contrast_two {
  width: 1rem;
  height: .6rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -.5rem;
  margin-top: -.3rem;
}

.Tablet .car_Contrast .Contrast_two img {
  width: 100%;
  height: 100%;
}

.Tablet .car_information {
  width: 10rem;
  min-height: 1.8rem;
  position: relative;
  margin-bottom: 1rem;
}

.Tablet .car_information .information_one {
  width: 1px;
  min-height: 2rem;
  background: #327cff;
  position: absolute;
  left: .12rem;
  top: 0;
}

.Tablet .car_information .information_two {
  width: 1px;
  min-height: 2rem;
  background: #f66e69;
  position: absolute;
  right: .123rem;
  top: 0;
}

.Tablet .car_information .information_left {
  min-height: 2.1rem;
  width: 4.533333rem;
  position: absolute;
  left: .3rem;
}

.Tablet .car_information .information_left .list_one {
  width: 4rem;
  min-height: .6rem;
  position: relative;
}

.Tablet .car_information .information_left .list_one img {
  width: .55rem;
  height: .55rem;
  margin-right: .1rem;
}

.Tablet .car_information .information_left .list_one span {
  position: absolute;
  .px2px(font-size, 23px);
  min-width: 4rem;
  height: .6rem;
  color: #454545;
  font-weight: 700;
  top: 50%;
  margin-top: -.25rem;
}

.Tablet .car_information .information_left .list_two {
  width: 4.7rem;
  min-height: .44rem;
  color: #222222;
  .px2px(font-size, 20px);
}

.Tablet .car_information .information_left .list_Three {
  width: 4.533333rem;
  min-height: .44rem;
  color: #7db1fb;
  .px2px(font-size, 31px);
}

.Tablet .car_information .information_left .list_Four {
  width: 4.533333rem;
  min-height: .44rem;
  color: #000;
  .px2px(font-size, 20px);
}

.Tablet .car_information .information_rigth {
  min-height: 2.1rem;
  width: 4.533333rem;
  position: absolute;
  right: .3rem;
}

.Tablet .car_information .information_rigth .list_one {
  width: 4rem;
  min-height: .62rem;
  line-height: .62rem;
  position: relative;
}

.Tablet .car_information .information_rigth .list_one img {
  position: absolute;
  right: -.5rem;
  width: .55rem;
  height: .55rem;
}

.Tablet .car_information .information_rigth .list_one span {
  position: absolute;
  right: -.33rem;
  min-width: 4rem;
  height: .6rem;
  text-align: right;
  font-weight: 700;
  padding-right: .55rem;
  box-sizing: border-box;
  .px2px(font-size, 23px);
}

.Tablet .car_information .information_rigth .list_two {
  width: 4.533333rem;
  min-height: .44rem;
  color: #222222;
  .px2px(font-size, 20px);
  text-align: right;
}

.Tablet .car_information .information_rigth .list_Three {
  width: 4.533333rem;
  min-height: .44rem;
  color: #f5736e;
  .px2px(font-size, 31px);
  text-align: right;
}

.Tablet .car_information .information_rigth .list_Four {
  width: 4.533333rem;
  min-height: .44rem;
  color: #000;
  .px2px(font-size, 20px);
  text-align: right;
}

.Tablet .Heald {
  width: 10rem;
  height: 1.866667rem;
  position: relative;
}

.Tablet .Heald .img_left {
  width: 1.506667rem;
  height: .65rem;
  position: absolute;
  left: 0;
  top: 0;
}

.Tablet .Heald .img_left img {
  width: 100%;
  height: 100%;
}

.Tablet .Heald .img_right {
  width: 1.506667rem;
  height: .65rem;
  position: absolute;
  right: 0;
  top: 0;
}

.Tablet .Heald .img_right img {
  width: 100%;
  height: 100%;
}

.Tablet .Heald .Middle {
  width: 6.6rem;
  height: 1.853333rem;
  position: absolute;
  top: .4rem;
  left: 50%;
  margin-left: -3rem;
}

.Tablet .Heald .Middle .Middle_one {
  width: 1.75rem;
  height: 1.75rem;
  line-height: 1.75rem;
  text-align: center;
  box-sizing: border-box;
  border: 2px solid #6798f5;
  border-radius: 50%;
  .px2px(font-size, 45px);
  color: #5194fa;
  position: absolute;
  left: 0;
  top: 0;
  font-weight: bold;
}

.Tablet .Heald .Middle .Middle_Three {
  width: 1.75rem;
  height: 1.75rem;
  line-height: 1.75rem;
  text-align: center;
  box-sizing: border-box;
  border: 2px solid #f98681;
  border-radius: 50%;
  .px2px(font-size, 45px);
  color: #f67a75;
  position: absolute;
  right: 0;
  top: 0;
  font-weight: bold;
}

.Tablet .Heald .Middle .Middle_two {
  width: 2rem;
  height: .3rem;
  line-height: .3rem;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -1rem;
  margin-top: -.15rem;
  color: #444444;
  .px2px(font-size, 22px);
}

.Tablet .parameter {
  margin-top: .75rem;
  width: 10rem;
  min-height: 7.5rem;
  box-sizing: border-box;
  padding: 0 .44rem 0 .44rem;
}

.Tablet .parameter .mkoubeiList {
  width: 9.333333rem;
  min-height: .133333rem;
  margin: 0 auto;
  position: relative;
}

.Tablet .parameter .mkoubeiList .mkoubeiListBox {
  width: 100%;
  height: .8rem;
}

.Tablet .parameter .mkoubeiList .mkoubeiListBox .mleftScores {
  width: .75rem;
  height: .8rem;
  float: left;
  font-family: PingFangSC-Medium;
  font-size: .266667rem;
  color: #444;
  letter-spacing: 0;
  line-height: .8rem;
  text-align: left;
}

.Tablet .parameter .mkoubeiList .mkoubeiListBox .mrightScores {
  width: .75rem;
  height: .8rem;
  float: right;
  font-family: PingFangSC-Medium;
  font-size: .266667rem;
  color: #444;
  letter-spacing: 0;
  line-height: .8rem;
  text-align: right;
}

.Tablet .parameter .mkoubeiList .mkoubeiListBox .mkoubeiListName {
  min-width: .8rem;
  height: .8rem;
  margin: 0 auto;
  font-family: PingFangSC-Medium;
  .px2px(font-size, 20px);
  color: #444;
  letter-spacing: 0;
  text-align: center;
  line-height: .8rem;
}

.Tablet .parameter .mkoubeiList .mkoubeiListBox .mleftLine {
  width: 3.2rem;
  height: .075rem;
  float: left;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: #d6e5ff;
  margin-top: .333333rem;
  position: relative;
}

.Tablet .parameter .mkoubeiList .mkoubeiListBox .mleftLine .mchildLineL {
  height: .075rem;
  background: #5baeff;
  background-image: linear-gradient(-90deg, #5EB2FF 0%, #307AFF 100%);
  position: absolute;
  right: 0;
}

.Tablet .parameter .mkoubeiList .mkoubeiListBox .mrightLine {
  width: 3.2rem;
  height: .075rem;
  float: right;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: #fde0df;
  margin-top: .333333rem;
}

.Tablet .parameter .mkoubeiList .mkoubeiListBox .mrightLine .mchildLineR {
  height: .075rem;
  background: #f5716d;
  background-image: linear-gradient(90deg, #FA9C97 0%, #F4635E 100%);
}

</style>
<script>
import Bus from "./Bus.js";
import { Progress } from "mint-ui";
export default {
  name: "Sale",
  props: ["carlist", "imglist2", "tabData0"],
  data: function() {
    return {
      list: [],
      list_arr: '',
      car_name: '',

    }
  },
  mounted: function() {
    this.initWebSocket();
    let that = this;
    let lefcar = JSON.parse(window.localStorage.getItem('Contrast'));
    let rightcar = JSON.parse(window.localStorage.getItem('Contrasts'));
    if (rightcar != null) {
      that.carlist.carContent.bjCompareRes[0].styleName = rightcar.carContent.compareResult[0].styleName;
      that.carlist.carContent.bjCompareRes[0].price_measure = rightcar.carContent.compareResult[0].price_measure;
      that.carlist.carContent.bjCompareRes[0].score = rightcar.carContent.bjCompareRes[0].score ? rightcar.carContent.bjCompareRes[0].score : '暂无';
      that.list_arr.carContent.bjCompareRes[0].is_winner = rightcar.carContent.bjCompareRes[0].is_winner;
    }
    if (lefcar != null) {
      that.carlist.carContent.bjCompareRes[1].styleName = lefcar.carContent.compareResult[1].styleName;
      that.carlist.carContent.bjCompareRes[1].price_measure = lefcar.carContent.compareResult[1].price_measure;
      that.carlist.carContent.bjCompareRes[1].score = rightcar.carContent.bjCompareRes[1].score ? rightcar.carContent.bjCompareRes[1].score : '暂无';
      that.list_arr.carContent.bjCompareRes[1].is_winner = lefcar.carContent.bjCompareRes[1].is_winner;
    }
  },

  created: function() {
    // 取出数据要先输入这句话"速腾和迈腾口碑对比";
    let list = this.carlist;
    // console.log(list.carContent.bjCompareRes[0].is_winner);
    this.list_arr = list;
    // console.log(this.list_arr.carContent.bjCompareRes[0].is_winner);
    this.handleGetDetailSucc(list);

  },
  updated: function() {

  },
  methods: {
    // 点击左边图片事件
    left_btn: function() {
      let that = this;
      that.car_name = that.carlist.carContent.bjCompareRes[0].moduleName;
      that.sendDatas();
    },
    // 点击右边图片事件
    right_btn: function() {
      let that = this;
      that.car_name = that.carlist.carContent.bjCompareRes[1].moduleName;
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
    initWebSocket: function() {
      this.websock = new WebSocket(this.commmonWebConfig.wsuri);
      this.websock.onopen = this.websocketopen;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
      this.websock.onerror = this.websocketerror;
    },
    websocketopen: function() {
      // console.log(this.websock.readyState);
      this.readyState = this.websock.readyState;
    },
    websocketonmessage: function(e) {

      //数据接收
      let objStringify = JSON.parse(e.data);
      this.type = objStringify.data.type;
      // console.log(objStringify.data);
      // console.log("type值为：" + this.type);
      if (this.type == '12') {
        Bus.$emit('口碑对比', objStringify.data);
      }
    },
    websocketsend: function(agentData) {
      //数据发送
      this.websock.send(agentData);
    },
    websocketclose: function() {
      // console.log(this.websock.readyState);
    },
    websocketerror: function() {
      //失败
      // console.log("WebSocket连接失败");
    },
    // 返回按钮
    Jump: function() {
      var that = this;
      var shuju = JSON.stringify(window.localStorage.getItem('carli'));
      if (shuju == 'null') {
        Bus.$emit("ms", '9你' + that.carlist.carContent.compareResult[0].carModuleName);
        // console.log(1);
      } else {
        Bus.$emit("ms", '4');
        // console.log(2);
      }
      window.localStorage.removeItem('xunhuan');
      window.localStorage.removeItem('Contrasts');
      window.localStorage.removeItem('Contrast');
    },
    handleGetDetailSucc: function(res) {
      var that = this;
      let col = res.carContent.bjCompareRes;
      // console.log(col);
      let arr = [{
        scoreName: "外观",
        leftScore: "",
        rightScore: "",
        left_scoring: "",
        right_scoring: ""
      }, {
        scoreName: "内饰",
        leftScore: "",
        rightScore: "",
        left_scoring: "",
        right_scoring: ""
      }, {
        scoreName: "动力",
        leftScore: "",
        rightScore: "",
        left_scoring: "",
        right_scoring: ""
      }, {
        scoreName: "油耗",
        leftScore: "",
        rightScore: "",
        left_scoring: "",
        right_scoring: ""
      }, {
        scoreName: "空间",
        leftScore: "",
        rightScore: "",
        left_scoring: "",
        right_scoring: ""
      }, {
        scoreName: "性价比",
        leftScore: "",
        rightScore: "",
        left_scoring: "",
        right_scoring: ""
      }, {
        scoreName: "配置",
        leftScore: "",
        rightScore: "",
        left_scoring: "",
        right_scoring: ""
      }, {
        scoreName: "操控",
        leftScore: "",
        rightScore: "",
        left_scoring: "",
        right_scoring: ""
      }, {
        scoreName: "舒适性",
        leftScore: "",
        rightScore: "",
        left_scoring: "",
        right_scoring: ""
      }];
      arr[0].leftScore = col[0].dim_fields[0].score;
      arr[1].leftScore = col[0].dim_fields[1].score;
      arr[2].leftScore = col[0].dim_fields[2].score;
      arr[3].leftScore = col[0].dim_fields[3].score;
      arr[4].leftScore = col[0].dim_fields[4].score;
      arr[5].leftScore = col[0].dim_fields[5].score;
      arr[6].leftScore = col[0].dim_fields[6].score;
      arr[7].leftScore = col[0].dim_fields[7].score;
      arr[8].leftScore = col[0].dim_fields[8].score;
      arr[0].rightScore = col[1].dim_fields[0].score;
      arr[1].rightScore = col[1].dim_fields[1].score;
      arr[2].rightScore = col[1].dim_fields[2].score;
      arr[3].rightScore = col[1].dim_fields[3].score;
      arr[4].rightScore = col[1].dim_fields[4].score;
      arr[5].rightScore = col[1].dim_fields[5].score;
      arr[6].rightScore = col[1].dim_fields[6].score;
      arr[7].rightScore = col[1].dim_fields[7].score;
      arr[8].rightScore = col[1].dim_fields[8].score;
      arr[0].left_scoring = Number(240 * (col[0].dim_fields[0].score / 5 / 75));
      arr[0].right_scoring = Number(240 * (col[1].dim_fields[0].score / 5 / 75));
      arr[1].left_scoring = Number(240 * (col[0].dim_fields[1].score / 5 / 75));
      arr[1].right_scoring = Number(240 * (col[1].dim_fields[1].score / 5 / 75));
      arr[2].left_scoring = Number(240 * (col[0].dim_fields[2].score / 5 / 75));
      arr[2].right_scoring = Number(240 * (col[1].dim_fields[2].score / 5 / 75));
      arr[3].left_scoring = Number(240 * (col[0].dim_fields[3].score / 5 / 75));
      arr[3].right_scoring = Number(240 * (col[1].dim_fields[3].score / 5 / 75));
      arr[4].left_scoring = Number(240 * (col[0].dim_fields[4].score / 5 / 75));
      arr[4].right_scoring = Number(240 * (col[1].dim_fields[4].score / 5 / 75));
      arr[5].left_scoring = Number(240 * (col[0].dim_fields[5].score / 5 / 75));
      arr[5].right_scoring = Number(240 * (col[1].dim_fields[5].score / 5 / 75));
      arr[6].left_scoring = Number(240 * (col[0].dim_fields[6].score / 5 / 75));
      arr[6].right_scoring = Number(240 * (col[1].dim_fields[6].score / 5 / 75));
      arr[7].left_scoring = Number(240 * (col[0].dim_fields[7].score / 5 / 75));
      arr[7].right_scoring = Number(240 * (col[1].dim_fields[7].score / 5 / 75));
      arr[8].left_scoring = Number(240 * (col[0].dim_fields[8].score / 5 / 75));
      arr[8].right_scoring = Number(240 * (col[1].dim_fields[8].score / 5 / 75));
      that.list = arr;

    },
  },

}

</script>
