<template>
  <div class="xiaoai">
    <div class="title" v-if="header">
      <div class="mask_top" @click="chuxian">
        <img src="../../static/images/blink.gif" v-show="imghding">
      </div>
    </div>
    <!-- 添加loading图 -->
    <div class="carloading" v-show="loadings">
      <img src="../../static/images/loading.gif">
    </div>
    <Contrast :carb="carb" v-if="duibi"></Contrast>
    <div v-if="zong">
      <!-- 车型列表页 -->
      <Modellist v-if="carindex== 1" :carlist="carlist" :imglist2="imglist2" :tabData0="tabData0"></Modellist>
      <!-- 单车页 -->
      <Car v-if="carindex== 2" :carlist="carlist"></Car>
      <!-- 配置页面 -->
      <Configuration v-if="carindex== 3" :carlist="carlist"></Configuration>
      <!-- 参数对比页面 -->
      <Comparison v-if="carindex== 4" :carlist="carlist"></Comparison>
      <!-- 找4S店 -->
      <Distributor v-if="carindex== 5" :carlist="carlist" :weiarr="weiarr"></Distributor>
      <!-- 找销售询问底价 -->
      <Sale v-if="carindex== 6" :carlist="carlist"></Sale>
      <!-- 预约试驾 -->
      <appointment v-if="carindex== 7" :carlist="carlist" :carlists="carlists"></appointment>
      <!-- 添加对比 -->
      <!-- <Contrast :carb="carb" v-if="duibi"></Contrast> -->
      <!--    <Contrast v-if="carindex== 8" :carlist="carlist"></Contrast> -->
      <!-- 外观对比 -->
      <Appearance v-if="carindex== 9" :carlist="carlist"></Appearance>
      <!-- 内饰对比 -->
      <Decoration v-if="carindex== 10" :carlist="carlist"></Decoration>
      <!-- 口碑对比 -->
      <Tablet v-if="carindex== 11" :carlist="carlist"></Tablet>
      <div v-if="zongs">
        <div class="footer-head" v-show="footer_top">
          <!-- 小艾头像 -->
          <div class="picfooter" @click="change">
            <img src="../../static/images/blink.gif" alt class="picicon">
          </div>
          <!-- 小艾吐出的话语 -->
          <div v-show="hidden" class="speak">
            <p class="contennt_dialoguetxt_js_cue">{{content}}</p>
          </div>
          <!-- 底部标签按钮 -->
          <div class="tab-option">
            <ul class="tabs">
              <li class="mini-tabs" v-for="(item,i) in tabData0" :key="i" :channel="item.channel" @click="btn_click(item)">
                <span v-if="item.tagName == '添加对比'" class="yuandian">
                </span> {{item.tagName}}
              </li>
            </ul>
          </div>
        </div>
        <!-- 底部菜单 -->
        <div class="footer_menu" v-show="menuflag">
          <div class="x_close" @click="closeToast">
            <img src="../../static/images/close.png" alt>
          </div>
          <!-- 标签名称 -->
          <div class="fmenu_one">
            <ul v-for="(item, i) in imgList1" :key="i">
              <li class="entrance">
                <div class="picbox" @click="clickmenu1(item.labelName)" :datas="item.senceId">
                  <img :src="'http://d2.yiche.com/ai20/'+item.labelIcon" alt>
                  <span class="spanid1">{{item.labelName}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="input_list" :style="{'bottom':boxScrollbottom+'rem'}" ref="pathClear">
          <img src="../../static/images/keys.png" class="keys" @click="keysup">
          <input type="text" placeholder="把你想说的告诉我吧！" class="voice_left" v-model="message" @click="Sendout" @blur="blurs" @keyup.enter="click_affirm" @focus="focusr" id="dom" :style="{'line-height':line}">
          <img src="../../static/images/more.png" class="buttom_img" @click="toggleMenu">
          <div v-if="hi">
            <input type="submit" value="发送" class="btn_sub" @click="click_affirms" v-if="hide">
            <input type="submit" value="发送" class="btn_subs" @click="click_affirm" v-if="hides">
          </div>
        </div>
      </div>
    </div>
    <iframe id="geoPage" width=0 height=0 frameborder=0 scrolling="no" src="https://apis.map.qq.com/tools/geolocation?key=PNWBZ-UEX34-72IU6-X2APF-5EWDH-JLBVJ&referer=huangzejun">
    </iframe>
  </div>
</template>
<style type="text/css" lang="less" scoped>
@import "../assets/css/Home.less";

</style>
<script>
// // 引入车型列表页面
import Modellist from "./Modellist.vue";
// 引入单车页面
import Car from "./Car.vue";
// 引入配置页面
import Configuration from "./Configuration.vue";
// 引入对比的页面
import Comparison from "./Comparison.vue";
// 引入找4s店
import Distributor from "./Distributor.vue";
// 找销售询问底价
import Sale from "./Sale.vue";
// 引入外观对比
import Appearance from "./Appearance.vue";
// 内饰对比
import Decoration from "./Decoration.vue";
// 口碑对比
import Tablet from "./Tablet.vue";
// 预约试驾
import appointment from "./appointment.vue"
// 添加对比
import Contrast from "./Contrast.vue"
// import axios from "axios";
import { Swipe, SwipeItem, Indicator, MessageBox } from "mint-ui";
import Bus from "./Bus.js";
export default {
  name: "Home",
  components: {
    Modellist: Modellist,
    Car: Car,
    Configuration: Configuration,
    Comparison: Comparison,
    Distributor: Distributor,
    Sale: Sale,
    Appearance: Appearance,
    Decoration: Decoration,
    Tablet: Tablet,
    appointment: appointment,
    Contrast: Contrast,
  },
  created: function() {
    var that = this;
    that.id = '0';
    //钩子函数建立websocket连接
    that.initWebSocket();
    var Jurisdiction = window.localStorage.getItem('k');
    var data = JSON.parse(window.localStorage.getItem('Transformation'));
    // 记录进入home的权限
    let lock = window.localStorage.getItem('记录');
    // 当清除缓存的时候默认调到首页;
    if (lock != '第一次进入') {
      that.$router.push({
        path: "index"
      })
    } else if (Jurisdiction.indexOf('帮我选车') != -1) {
      that.content = data.content;
      that.tabData0 = data.tagsGroup;
      that.carindex = 1;
      that.carlist = data;
      that.zhuangone = '清空';
      that.footer_top = true;
    }
    // 获取地图位置
    window.addEventListener('message', function(event) {
      if (event.data != null) {

        that.las = event.data.lat;
        that.lns = event.data.lng;
      }
    }, false);

  },
  updated: function() {
    var that = this;
    clearTimeout(that.setItem);
    that.setItem = setTimeout(function() {
      that.hidden = false;
    }, 9000);
    Bus.$on('ms', function(data) {
      if (data.indexOf('9你') != -1) {

        that.b = data.slice(1);
        // console.log(that.b);
        that.sendDatass();
        that.zong = true;
        that.zongs = true;

      } else if (data == '3') {
        var carli = JSON.parse(window.localStorage.getItem('carli'));
        // 返回到单车页面
        that.carindex = 2;
        that.tabData0 = carli.tagsGroup;
        var carname = carli.carContent.allCarInfoResult[0].moduleName + '查看配置';
        that.tabData0.unshift({ tagName: carname, tagClassification: "100" })
        that.content = carli.prompt;
      } else if (data.indexOf('对比') != -1) {
        that.b = data;
        that.sendData();
        // console.log('跳转到对比页面');
      } else if (data == '2') {
        // 返回到车型列表页面
        that.carindex = 1;
        that.tabData0 = JSON.parse(window.localStorage.getItem('tabData0'));
        that.content = window.localStorage.getItem('c');

      } else if (data == '4') {
        // 去除缓存数据
        var carli = JSON.parse(localStorage.getItem('cas'));
        var carlis = JSON.parse(window.localStorage.getItem('carli'));
        var carname = carlis.carContent.allCarInfoResult[0].moduleName + '查看配置';
        if (carli == null) {
          that.tabData0 = carlis.tagsGroup;
          that.tabData0.unshift({ tagName: carname, tagClassification: "100" })
          // 赋值小艾的话语
          that.content = carlis.prompt;
          // 赋值单车的内容;
          that.carlist = carlis;
          // 返回到单车页面
          that.carindex = 2;
        } else {
          // 赋值底部标签

          that.tabData0 = carli.tagsGroup;
          // 赋值小艾的话语
          that.content = carli.content;
          // 赋值单车的内容;
          that.carlist = carli;
          // 返回到单车页面
          that.carindex = 2;
        }
        that.zong = true;
        that.zongs = true;

      } else if (data == '8') {
        that.carindex = 2;
        that.tabData0 = carli.tagsGroup;
        that.content = carli.content;
      } else if (data = '单车') {

      }
    });
    Bus.$on('msgda', function(datas) {
      // 赋值底部标签
      that.tabData0 = datas.tagsGroup;
      // 赋值小艾的话语
      that.content = datas.content;
      // 赋值单车的内容;
      that.carlist = datas;
      // 返回到单车页面
      that.carindex = 2;
    });
    Bus.$on('对比', function(datas) {
      // 赋值底部标签
      that.tabData0 = datas.tagsGroup;
      // // 赋值小艾的话语
      that.content = datas.content;
      // // 赋值单车的内容;
      that.carlist = datas;
      // // 返回到单车页面
      that.carindex = 4;
      that.zong = true;
      that.zongs = true;
      that.toggleflag = false;
      that.imghding = false;
      that.duibi = false;
      that.header = false;
    });
    Bus.$on('tanceng', function(datas) {
      if (datas == '提交成功') {
        var carlis = JSON.parse(window.localStorage.getItem('carli'));
        that.content = carlis.content;
        that.carindex = 2;
        MessageBox({
          title: '提示',
          message: '预约已提交!稍后会有卖车顾问为你安排',
        });
      }
    });
    Bus.$on('参数对比', function(datas) {
      // 赋值底部标签
      that.tabData0 = datas.tagsGroup;
      // // 赋值小艾的话语
      that.content = datas.content;
      // // 赋值单车的内容;
      that.carlist = datas;
      // // 返回到单车页面
      that.carindex = 2;
    });
    Bus.$on('口碑对比', function(datas) {
      // 赋值底部标签
      that.tabData0 = datas.tagsGroup;
      // // 赋值小艾的话语
      that.content = datas.content;
      // // 赋值单车的内容;
      that.carlist = datas;
      // // 返回到单车页面
      that.carindex = 2;
    });


  },
  mounted: function() {
    var u = navigator.userAgent;
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    var that = this;
    if (isIOS) {
      that.line = 'normal';
    } else {
      that.line = '1.066667' + 'rem';
    }
  },
  data: function() {
    return {
      // 存入位置数据
      weiarr: [],
      // 记录当前位置的经纬度
      las: '',
      lns: '',
      header: false,
      duibi: false,
      carb: null,
      imghding: false,
      toggleflag: false,
      // 记录数据
      lists_data: '',
      carName: '',
      Contrastss: '0',
      //记录车名
      car_make: '',
      id: '0',
      zong: true,
      zongs: true,
      // 记录预约试驾
      make: '',
      setItem: null,
      timeName: null,
      line: '',
      hi: false,
      // 记录状态
      zhuangone: '',
      boxScrollbottom: '0',
      footer_top: false,
      loadings: false,
      //记录车的名字
      carnames: '',
      // 控制组件显示
      carindex: '',
      // 备份arr
      arrtag: [],
      // 发送按钮默认是不显示;
      hide: false,
      hides: false,
      // 小艾提示语句;
      content: "",
      // 配置页;
      prompt: "",
      // 输入框的值;
      message: "",
      // 小艾的话显示与影藏状态;
      hidden: true,
      // 底部菜单显示与影藏状态;
      menuflag: false,
      // 发送携带的数据
      objStringify: "",
      a: [], //临时数组 储存点击值
      f: [],
      e: [],
      b: "", //发送值
      c: "", //存一下智能选车
      // type类型
      type: "",
      // 发送的值
      sence: "11", //sence=11进入欢迎页 显示li以及小艾欢迎语
      readyState: "",
      // 底部标签的数组
      tabData0: [],
      // 传值的车型数组
      carlist: [],
      carlistone1: [],
      // 传值的车的图片
      imglist2: [],
      // 智能选车 参数对比 参数配置
      imgList1: []
    }
  },
  watch: {
    message: function(value) {
      if (value.replace(/(^s*)|(s*$)/g, "").length == 0) {
        this.hide = true;
        this.hides = false;
      } else {
        this.hides = true;
        this.hide = false;
      }
    }
  },
  methods: {
    // inidizhi: function() {
    //   var that = this;
    //   var benla = that.las;
    //   var benln = that.lns;
    //   var geocoder = new qq.maps.Geocoder();
    //   var address = that.weiarr;
    //   geocoder.getLocation('北京市朝阳区高碑店乡半壁店村388号');
    //   geocoder.setComplete(function(result) {      
    //         console.log(result); 
    //         console.log('获取成功');   
    //   });  

    // },

    getRad: function(d) {
      var PI = Math.PI;
      return d * PI / 180.0;
    },
    GetDistance: function(lat1, lng1, lat2, lng2) {
      var radLat1 = lat1 * Math.PI / 180.0;
      var radLat2 = lat2 * Math.PI / 180.0;
      var a = radLat1 - radLat2;
      var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
      var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
      s = s * 6378.137; // EARTH_RADIUS;
      s = Math.round(s * 10000) / 10000;
      s = s.toFixed(2);
      return s;
    },
    // getDistance: function(lat1, lng1, lat2, lng2) {
    //   let that = this;
    //   var f = that.getRad((lat1 + lat2) / 2);
    //   var g = that.getRad((lat1 - lat2) / 2);
    //   var l = that.getRad((lng1 - lng2) / 2);
    //   var sg = Math.sin(g);
    //   var sl = Math.sin(l);
    //   var sf = Math.sin(f);
    //   var s, c, w, r, d, h1, h2;
    //   var a = 6378137.0;
    //   var fl = 1 / 298.257;
    //   sg = sg * sg;
    //   sl = sl * sl;
    //   sf = sf * sf;
    //   s = sg * (1 - sl) + (1 - sf) * sl;
    //   c = (1 - sg) * (1 - sl) + sf * sl;
    //   w = Math.atan(Math.sqrt(s / c));
    //   r = Math.sqrt(s * c) / w;
    //   d = 2 * w * a;
    //   h1 = (3 * r - 1) / 2 / c;
    //   h2 = (3 * r + 1) / 2 / s;
    //   s = d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
    //   s = s / 1000;
    //   s = s.toFixed(2);
    //   return s;
    // },
    // 添加对的遮罩层
    chuxian: function() {
      this.zongs = true;
      this.zong = true;
      this.toggleflag = false;
      this.imghding = false;
      this.header = false;
      this.duibi = false;
    },
    focusr: function() {
      var u = navigator.userAgent;
      var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      var that = this;
      window.addEventListener('resize', function() {
        if (document.activeElement.tagName == 'INPUT' ||
          document.activeElement.tagName == 'TEXTAREA') {
          window.setTimeout(function() {
            document.activeElement.scrollIntoViewIfNeeded();
          }, 0);
        }
      });
      if (isIOS) {
        that.boxScrollbottom = '0.38';
        setTimeout(function() {
          that.$refs.pathClear.scrollIntoView(true)
        }, 500)
      }
      if (navigator.userAgent.indexOf('UCBrowser') > -1) {
        clearInterval(that.timeName);
        that.timeName = setInterval(function() {
          that.scrollBottom();
        }, 500)
      }
      this.line = 'normal';
    },
    //在ios手机中底部向上滑动;
    scrollBottom: function() {
      var h = document.documentElement.clientHeight || document.body.clientHeight;
      document.body.scrollTop = h - 100;
      document.documentElement.scrollTop = h - 100;
    },
    blurs: function() {
      let ua = navigator.userAgent.toLowerCase();
      setTimeout(function() {
        var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;          
        window.scrollTo(0, Math.max(scrollHeight - 1, 0));
      }, 400);
      this.boxScrollbottom = '0';
      clearInterval(this.timeName);

    },
    // 输入内容事件
    Sendout: function() {
      this.line = 'normal';
      // 发送按钮出现;
      this.hi = true;
      if (this.message.replace(/(^s*)|(s*$)/g, "").length == 0) {
        this.hide = true;
        this.hides = false;

      }
      // 同时影藏底部弹框
      this.menuflag = false;
    },
    keysup: function() {
      // 点击收入按钮切换发送按钮显示与影藏;
      this.hi = !this.hi;
    },

    // 点击浮层里面的内容触发的事件;
    clickmenu1: function(e) {
      this.tabData0 = this.arrtag;
      // 取消弹层
      this.menuflag = false;
      // 缓存里面的点击的内容;
      var iconvalue = e;
      if (iconvalue == "智能选车") {
        this.b = iconvalue;
        this.c = '智能';

      } else if (iconvalue == "参数配置") {
        this.b = iconvalue;
      } else if (iconvalue == "车型对比") {
        this.b = iconvalue;
      } else {
        this.b = iconvalue;
      }
      this.sence = "0"; //更改sence 进入正常会话
      this.sendData(); //发送数据
      clearTimeout(this.setItem);

    },
    click_affirms: function() {
      this.hi = false;
    },
    click_affirm: function() {
      // 影藏发送按钮
      window.localStorage.removeItem('xunhuan');
      window.localStorage.removeItem('Contrasts');
      window.localStorage.removeItem('Contrast');
      this.hi = false;
      this.loadings = true;
      // 归为
      this.boxScrollbottom = '0';
      var keyword = document.getElementsByClassName("voice_left")[0].value;
      // 存入用户输入的话存起来
      window.localStorage.setItem('yonghu', keyword);
      this.b = keyword;
      this.sence = "0"; //更改sence 进入正常会话

      this.sendData(); //发送数据
      this.message = "";
      clearTimeout(this.setItem);

    },
    // 点击标签的事件
    btn_click: function(e) {
      this.loadings = true;
      if (this.type == '41') {
        this.b = "帮我选车" + e.tagName;
        this.id = '0';
        this.sence = "0";
        this.sendData('0'); //发送数据
        // console.log(1);
      } else if (e.tagName == '添加对比') {
        let that = this;
        that.sendDatas();
        that.zongs = false;
        that.zong = false;
        that.imghding = true;
        that.header = true;
      } else if (e.tagName == '预约试驾') {
        let makedata = JSON.parse(window.localStorage.getItem('cas'));

        this.b = '';
        if (this.car_make) {
          this.b = '北京' + this.car_make + '经销商';
          this.sendData('18');
        } else {
          this.b = '北京' + makedata.carContent.allCarInfoResult[0].moduleName + '经销商';
          this.sendData('18');
        }


      } else if (e.tagName == '找4S店') {
        this.carName = '北京' + this.car_make + '经销商';
        this.sendD();

      } else {
        this.b = e.tagName;
        this.id = '201';
        this.sence = "0"; //更改sence 进入正常会话
        this.sendData('0'); //发送数据
      }
      // 点击按钮时让弹框显示
      this.hidden = true;
      // 暂时先停止;
      clearTimeout(this.setItem);
      if (this.zhuangone == '清空') {
        this.a = [];
      }
      // 记录用户点击的是预约试驾按钮
      this.make = e.tagName;

    },
    // 点击小艾头像的事件;
    change: function() {
      var that = this;
      that.hidden = !that.hidden;
    },
    closeToast: function() {
      // 隐藏菜单
      this.menuflag = false;
    },
    toggleMenu: function() {
      //切换菜单
      // this.sence = 12;
      this.menuflag = !this.menuflag;
      this.sendData('12');
    },
    // 建立WebSocket连接
    initWebSocket: function() {
      this.websock = new WebSocket(this.commmonWebConfig.wsuri);
      this.websock.onopen = this.websocketopen;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
      this.websock.onerror = this.websocketerror;
    },
    sendDatas: function() {
      let that = this;
      let obj1 = {
        modelId: 'null',
        brandId: 'all',
      }
      var obj2 = JSON.stringify(obj1);
      let obj = {
        logId: "123",
        caller: {
          appId: "10039",
          token: "cookie"
        },
        user: {
          uuid: "9986645662345678",
          content: '智能选车',
          channel: "3"
        },
        parameters: {
          cityId: '201',
          sence: '14',
          version: "2.2.5",
          device: "iphone 6s",
          system: "ios",
          isRooted: "no",
          senceDataType: "0",
          abstractParam: obj2,
        }
      };
      let objStringify = JSON.stringify(obj);
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
        }, 400);
      }

    },
    sendD: function() {
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
          content: this.carName,
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
        }, 200);
      } else {
        let that = this; //保存当前对象this
        that.initWebSocket();
        setTimeout(function() {
          that.websocketsend(objStringify);
        }, 400);
      }
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
          cityId: this.id,
          sence: sence,
          version: "2.2.5",
          device: "iphone 6s",
          system: "ios",
          isRooted: "no",
          senceDataType: "0",
          abstractParam: "0",
          inputMode: "1001",
          tagClassification: "100",
          pattern: "110"
        }
      };
      // console.log(obj);
      let objStringify = JSON.stringify(obj);
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
        }, 400);
      }
    },
    sendDatass: function() {
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
          cityId: '0',
          sence: '0',
          version: "2.2.5",
          device: "iphone 6s",
          system: "ios",
          isRooted: "no",
          senceDataType: "0",
          abstractParam: this.Contrastss,
          inputMode: "1001",
          tagClassification: "100",
          pattern: "110"
        }
      };
      // console.log(obj);
      let objStringify = JSON.stringify(obj);
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
        }, 400);
      }
    },
    websocketopen: function() {
      var Display_data = window.localStorage.getItem('k');
      var that = this;
      if (Display_data == null) {
        that.$router.push({
          path: "index"
        });
      } else if (Display_data.indexOf('帮我选车') == -1) {
        that.b = Display_data;
        that.sendDatass();

      }

    },
    websocketonmessage: function(e) {
      // console.log('收到消息');
      let that = this;
      that.b = '';
      if (that.hidden == false) {
        that.hidden = true;
      };
      if (that.hidden == true && that.type != '28') {
        clearTimeout(that.setItem);
        that.setItem = setTimeout(function() {
          that.hidden = false;
        }, 9000)
      }
      //关闭并延迟底部标签的loading
      if (that.loadings == true) {
        that.loadings = false;
      }
      that.footer_top = true;
      //数据接收
      let objStringify = JSON.parse(e.data);
      this.type = objStringify.data.type;
      this.lists_data = objStringify.data;
      console.log(objStringify.data);
      console.log("type值为：" + this.type);

      if (this.type == '29') {
        // 点击的是底部菜单
        let arrlist = objStringify.data.abstractContent.layerPopTag.slice(0, 3);
        this.imgList1 = arrlist;

      } else if (this.type == '30') {
        this.duibi = true;
        this.carb = objStringify.data;
        // console.log(this.carb);

      } else if (this.type == '33') {
        // 口碑数据
        this.carindex = 11;
        this.content = objStringify.data.content;
        this.tabData0 = objStringify.data.tagsGroup;
        this.carlist = objStringify.data;

      } else if (this.type == '31') {

        this.carindex = 9;
        this.content = objStringify.data.content;
        this.tabData0 = objStringify.data.tagsGroup;
        this.carlist = objStringify.data;

      } else if (this.type == '32') {
        this.carindex = 10;
        this.content = objStringify.data.content;
        this.tabData0 = objStringify.data.tagsGroup;
        this.carlist = objStringify.data;
      } else if (this.type == '28') {

      } else if (this.type == '41') {
        // 智能选车
        this.content = objStringify.data.content;
        this.tabData0 = objStringify.data.tagsGroup;
      } else if (this.type == '12') {
        // 参数配置
        this.content = objStringify.data.content;
        this.tabData0 = objStringify.data.tagsGroup;
        this.carlist = objStringify.data;
        this.carindex = 2;
        // 存取数据
        window.localStorage.setItem('carli', JSON.stringify(objStringify.data));
        window.localStorage.setItem('cas', JSON.stringify(objStringify.data));
        this.car_make = objStringify.data.carContent.allCarInfoResult[0].moduleName;
      } else if (this.type == '36') {
        // 查看配置
        this.content = objStringify.data.prompt;
        this.tabData0 = objStringify.data.tagsGroup;
        this.carlist = objStringify.data;
        this.carindex = 3;
        // 存取数据
        window.localStorage.setItem('carli', JSON.stringify(objStringify.data));
      } else if (this.type == '25') {

        let quchu = JSON.parse(window.localStorage.getItem('xunhuan'));
        if (quchu != null) {
          this.content = quchu.content;
          this.tabData0 = quchu.tagsGroup;
          this.carlist = quchu;
          this.carindex = 4;
          this.zong = true;
          this.zongs = true;
        } else {
          this.content = objStringify.data.content;
          this.tabData0 = objStringify.data.tagsGroup;
          this.carlist = objStringify.data;
          this.carindex = 4;
          this.zong = true;
          this.zongs = true;
          window.localStorage.setItem('carlis', JSON.stringify(objStringify.data));
        }


      } else if (this.type == '2') {
        this.content = objStringify.data.content;
        this.tabData0 = objStringify.data.tagsGroup;
        this.carindex = 1;
        this.tabData0 = objStringify.data.tagsGroup;
        this.carlist = objStringify.data;
        this.zhuangone = '清空';
      } else if (this.type == '38') {
        let car_data = JSON.parse(window.localStorage.getItem('cas'));
        this.tabData0 = car_data.tagsGroup;
        this.carlist = car_data;
        this.carlists = objStringify.data;
        this.carindex = 7;
      } else if (this.type == '1') {
        if (objStringify.data.content && objStringify.data.tagsGroup.length > 0) {
          this.content = objStringify.data.content;
          this.tabData0 = objStringify.data.tagsGroup;

        } else if (objStringify.data.prompt) {
          this.content = objStringify.data.prompt;
          this.tabData0 = objStringify.data.tagsGroup;
        } else if (objStringify.data.tagsGroup.length == 0) {
          this.content = objStringify.data.content;
        } else if (objStringify.data.tagsGroup.length == '2') {
          this.tabData0 = objStringify.data.tagsGroup;
        } else {
          let carlis = JSON.parse(window.localStorage.getItem('cas'));
          this.tabData0 = carlis.tagsGroup;
        }
      } else if (this.type == '10') {

        var shuju = JSON.stringify(window.localStorage.getItem('carli'));
        if (shuju == 'null') {
          let arrtags = JSON.parse(window.localStorage.getItem('dibu'));
          this.content = objStringify.data.content;
          this.carlist = objStringify.data;
          this.tabData0 = arrtags;
          this.carindex = 5;

        } else if (this.tabData0 == false) {
          let arrtags = JSON.parse(window.localStorage.getItem('dibu'));
          this.content = objStringify.data.content;
          this.carlist = objStringify.data;
          this.tabData0 = arrtags;
          this.carindex = 5;

        } else {
          this.content = objStringify.data.content;
          this.carlist = objStringify.data;
          this.carindex = 5;
        }
        let arrlists = objStringify.data.carContent.dealerInfoResult.priceQueryCsForApps;
        let arr = [];
        for (var i = 0; i < arrlists.length; i++) {
          let data1 = window.localStorage.getItem('las');
          let data2 = window.localStorage.getItem('lns');
          if (this.las && this.lns) {
            let data1 = Number(arrlists[i].latitude);
            let data2 = Number(arrlists[i].longitude);
            arr.push(this.GetDistance(this.las, this.lns, data1, data2));
            this.weiarr = arr;
          } else {
            if (data1 && data2) {
              let data3 = Number(arrlists[i].latitude);
              let data4 = Number(arrlists[i].longitude);
              arr.push(this.GetDistance(data1, data2, data3, data4));
              this.weiarr = arr;
            }
          }

        }
      } else if (this.type == '11') {
        this.carindex = 6;
        this.content = objStringify.data.content;
        this.carlist = objStringify.data;
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
    }
  }
};

</script>
