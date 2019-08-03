<template>
  <div class="lilog">
    <div class="mask_top">
      <img src="../../static/images/blink.gif">
      <div class="mask" @click="Returns">
      </div>
    </div>
    <div class="list" ref="wrapper">
      <div>
        <!-- 城市列表 -->
        <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{item.brand_type}}</div>
          <div class="button-list">
            <div class="button-wrapper" @click="opens(key,indexs)" v-for="(innerItem,indexs) in item.modelsInBrandsCarBean_list" :key="innerItem.id">
              <div class="button_top">
                <div class="car_logo">
                  <img :src="innerItem.brand_logo_url">
                </div>
                <div class="car_icon">
                  {{innerItem.brand_name}}
                </div>
                <div class="carlist_img">
                  <img src="../../static/images/arrowNor.png">
                </div>
              </div>
              <div class="button">
                <div v-for="msg in innerItem.models_list" v-show="modelCarList.x==key && modelCarList.y==indexs" @touchmove="handleTouchStart">
                  <div>
                    <p class="car_p">{{msg.model_type}}</p>
                    <p v-for="msgS in msg.bean_list" class="car_po" @click="details(msgS)">
                      <P class="car_pop">
                        <span>{{msgS.model_common_name}}</span>
                        <span class="car_popp">{{msgS.low_price}}-{{msgS.high_price}}万</span>
                      </P>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 弹出层 -->
      <transition name="fade">
        <div class="toast" v-show="showToast">
          <span class="letter">{{this.letters}}</span>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll';
import eventBus from "./Bus.js";
export default {
  name: 'tList',
  props: ["cities", "hotCities", "carName"],
  data() {
    return {
      textindexs: '',
      textindex: '',
      car_data: '',
      letter: '',
      letters: '',
      showToast: false,
      list: [{
          'text': '一汽大众',
          'jia': '23.49-33.87',
          'name': '奥迪a6',
        },
        {
          'text': '一汽丰田',
          'jia': '23.49-33.87',
          'name': '丰田霸道',
        },
        {
          'text': '一汽马自达',
          'jia': '23.49-33.87',
          'name': '马六',
        },
        {
          'text': '一汽奔腾',
          'jia': '23.49-33.87',
          'name': '奔腾B50',
        }

      ],
      modelCarList: {
        x: -1,
        y: -1
      },

    }
  },
  created: function() {
    var userAgent = navigator.userAgent;
    var that = this;
    // if (userAgent.indexOf("Firefox") > -1) {
    //   console.log('这个是火狐浏览器');
    //   that.textindexs = 'relative';
    //   that.textindex = '12rem';
    // } else if (userAgent.indexOf("Chrome") > -1) {
    //   console.log('这是谷歌浏览器');
    //   that.textindexs = 'relative';
    //   that.textindex = '12rem';
    // } else {
    //   console.log('是移动端');
    //   // that.hiddens =  '';
    //   that.textindex = '100%';
    // }
  },
  watch: {
    letter() {
      if (this.letter) {
        // console.log(this.letter);
        // console.log('哈哈');
        // console.log(this.$refs[this.letter][0]);
        const elment = this.$refs[this.letter][0]
        // console.log(elment);
        this.scroll.scrollToElement(elment)
        this.changeToast()
      }
    }
  },
  methods: {
    handleTouchStart: function() {
      //  let that = this;
      //  that.opens();
      // console.log('开始');


    },
    // 返回
    Returns: function() {
      eventBus.$emit("ms", '4');
    },
    initWebSocket: function() {
      this.websock = new WebSocket(this.commmonWebConfig.wsuri);
      this.websock.onopen = this.websocketopen;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
      this.websock.onerror = this.websocketerror;
    },
    sendData: function() {
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
          content: this.car_data,
          channel: "3"
        },
        parameters: {
          cityId: "201",
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
      // console.log(obj);
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
      // console.log(objStringify.data);
      // console.log("type值为：" + this.type);
      if (this.type == '25') {
        // console.log(objStringify.data);
        // console.log(objStringify.data.content);
        // console.log(objStringify.data.tagsGroup);
        eventBus.$emit("对比", objStringify.data);
      }
    },
    websocketsend: function(agentData) {
      //数据发送
      this.websock.send(agentData);
    },
    websocketclose: function() {
      //关闭
      // console.log("WebSocket关闭");
      // console.log(this.websock.readyState);
    },
    websocketerror: function() {
      //失败
      // console.log("WebSocket连接失败");
    },
    // 点击确认用户选的那个车与明细
    details(data) {
      // console.log(data.model_common_name);
      // console.log(this.carName);
      this.car_data = this.carName + '与' + data.model_common_name + '对比';
      this.sendData();
    },
    changeToast() {
      this.showToast = true
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.showToast = false
      }, 500)
    },
    opens(d1, d2) {;
      var index = d1;
      var indexs = d2;
      // console.log(this.modelCarList.x, index);
      // console.log(this.modelCarList.y, indexs);
      if (this.modelCarList.x == index && this.modelCarList.y == indexs) {
        this.modelCarList.x = -1;
        this.modelCarList.y = -1;
      } else {
        this.modelCarList.x = index;
        this.modelCarList.y = indexs;
      }

    }
  },
  mounted() {
    this.initWebSocket();
    // ModalHelper.afterOpen();
    eventBus.$on('change', (letter) => {
      // console.log(letter);
      this.letter = letter;
      // console.log(this.letter);
    })
    eventBus.$on('changes', (letter) => {
      // console.log(letter);
      this.letters = letter;
      // console.log(this.letters);
    })
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  }
}

</script>
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

.lilog {
  width: 10rem;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
}

.lilog .mask_top {
  width: 10rem;
  height: 1.8rem;
}

.lilog .mask_top img {
  width: 1.4rem;
  height: 1.4rem;
  position: absolute;
  left: .373333rem;
  top: .3rem;
  z-index: 100;
}

.lilog .mask_top .mask {
  background: black;
  position: absolute;
  left: 0rem;
  top: 0rem;
  width: 10rem;
  height: 1.8rem;
  margin: 0 auto;
  z-index: 20;
  opacity: 0.5 !important;
}

.lilog .list {
  width: 10rem;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 1.8rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
}

// .list .carmode {
//   width: 10rem;
//   min-height: 14.8rem;
//   background: #fff;
//   position: absolute;
//   left: 0rem;
//   top: 2.8rem;
//   bottom: 0;
//   z-index: 300;
//   overflow-y: scroll;
// }
.list .title {
  line-height: .5rem;
  padding-left: .4rem;
  background: #FFF;
  .px2px(font-size, 30px);
}

.list .button-list {
  width: 10rem;
  padding: .066667rem .4rem .066667rem .066667rem;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-sizing: border-box;
}

.list .button-list .button-wrapper {
  width: 92.5%;
  height: 100%;
  margin-top: .05rem;
}

.list .button-list .button-wrapper .button_top {
  width: 100%;
  height: 1.066667rem;
  margin-left: .1rem;
  position: relative;

}

.list .button-list .button-wrapper .button_top .car_logo {
  width: .8rem;
  height: .8rem;
  position: absolute;
  left: .3rem;
  top: 50%;
  margin-top: -.4rem;
}

.list .button-list .button-wrapper .button_top .car_logo img {
  width: .8rem;
  height: .8rem;
}

.list .button-list .button-wrapper .button_top .car_icon {
  position: absolute;
  height: 1rem;
  min-width: 2rem;
  line-height: 1rem;
  top: 50%;
  left: 1.4rem;
  margin-top: -.5rem;
  .px2px(font-size, 28px);
}

.list .button-list .button-wrapper .button_top .carlist_img {
  position: absolute;
  width: .2rem;
  height: .2rem;
  right: 1.8rem;
  top: 50%;
  margin-top: -.1rem;
}

.list .button-list .button-wrapper .button_top .carlist_img img {
  width: 100%;
  height: 100%;
}

.list .button-list .car_p {
  width: 7.4rem;
  height: .88rem;
  line-height: .88rem;
  background: #F5F7F9;
  margin-left: 1.25rem;
  .px2px(font-size, 26px);
  text-indent: .3rem;
}

.list .button-list .car_po {
  height: 1.2rem;
  line-height: 1.2rem;
  width: 7.25rem;
  border-bottom: 1px solid #d8d8d8;
  margin-left: 1.25rem;
  .px2px(font-size, 26px);
  text-indent: .3rem;
}

.list .button-list .car_po .car_pop {
  // margin-bottom: .3rem;
}

.list .button-list .car_po .car_pop .car_popp {
  color: #FA5B5B;
}

.list .button-list .button-wrapper .button {
  .px2px(font-size, 14px);
  border-radius: 3px;
  min-height: .2rem;
  width: 8.6rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ebebeb;
  position: relative;
  margin-left: .3rem;
}

.list .toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  z-index: 10;
  width: .8rem;
  height: .8rem;
  line-height: .8rem;
  background: #3c7df7;
  border-radius: 50%;
  text-align: center;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
}

.list .toast .fade-enter {
  opacity: 0;
}

.list .toast .fade-leave,
.list .toast .fade-enter-active {
  opacity: 1;
}

.list .toast .fade-leave-active {
  opacity: 0;
}

.list .toast .letter {
  line-height: .6rem;
  .px2px(font-size, 16px);
  font-weight: 700;
  color: #eee;
}

.list .button-list .button-wrapper .button .car_content {}

// .list .button-list .button-wrapper .button .carlist_img {
//   position: absolute;
//   width: .2rem;
//   height: .2rem;
//   right: 1.8rem;
//   top: 50%;
//   margin-top: -.1rem;
// }
// .list .button-list .button-wrapper .button .car_icon {
//   position: absolute;
//   height: 1rem;
//   line-height: 1rem;
//   top: 50%;
//   left: 2rem;
//   margin-top: -.5rem;
//   .px2px(font-size, 28px);
// }
.list .button-list .button-wrapper .button .carlist_img img {
  width: 100%;
  height: 100%;
}

// .list .button-list .button-wrapper .button .car_logo {
//   position: absolute;
//   width: .8rem;
//   height: .8rem;
//   top: 50%;
//   margin-top: -.4rem;
// }
// .list .button-list .button-wrapper .button .car_logo img {
//   width: .8rem;
//   height: .8rem;
// }

</style>
