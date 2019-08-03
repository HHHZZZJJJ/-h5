<template>
  <div class="xiaoai" ref="pathClears">
    <!-- 添加loading图 -->
    <div class="carloading" v-show="loadings">
      <img src="../../static/images/loading.gif">
    </div>
    <homePage></homePage>
    <div class="footer-head">
      <!-- 小艾头像 -->
      <div class="picfooter">
        <img src="../../static/images/blink.gif" alt class="picicon" @click="change">
        <!-- 小艾吐出的话语 -->
        <div v-show="hidden" class="speak">
          <p class="contennt_dialoguetxt_js_cue">{{content}}</p>
        </div>
      </div>
      <!-- 底部标签按钮 -->
      <div class="tab-option">
        <ul class="tabs">
          <li class="mini-tabs" v-for="(item,i) in tabData0" :key="i" :channel="item.channel" @click="btn_click(item)">{{item.tagName}}
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
              <img :src="'https://d2.yiche.com/ai20/'+item.labelIcon" alt>
              <span class="spanid1">{{item.labelName}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部发送 -->
    <div class="input_list" :style="{'bottom':boxScrollbottom+'rem'}" ref="pathClear">
      <img src="../../static/images/keys.png" class="keys" @click="keysup">
      <input type="text" placeholder="把你想说的告诉我吧！" class="voice_left" v-model="message" @click="Sendout" @blur="blurs" @keyup.enter="click_affirm" @focus="focusr" id="dom" :style="{'line-height':line}">
      <img src="../../static/images/more.png" class="buttom_img" @click="toggleMenu">
      <div v-if="hi">
        <input type="submit" value="发送" class="btn_sub" v-if="hide" @click="click_affirms">
        <input type="submit" value="发送" class="btn_subs" @click="click_affirm" v-if="hides">
      </div>
    </div>
    <!-- 引入地图 -->
     <iframe id="geoPage" width=0 height=0 frameborder=0 scrolling="no" src="https://apis.map.qq.com/tools/geolocation?key=PNWBZ-UEX34-72IU6-X2APF-5EWDH-JLBVJ&referer=huangzejun">
    </iframe>
  </div>
</template>
<style type="text/css" lang="less" scoped>
@import "../assets/css/index.less";

</style>
<script>
import homePage from "./Homepage.vue";
import { Swipe, SwipeItem, Indicator } from "mint-ui";
import Bus from "./Bus.js";
export default {
  name: "Home",
  components: { homePage },
  created: function() {
    let that = this;
    //钩子函数建立websocket连接
    that.initWebSocket();
    that.loadings = true;
    that.loadDemo();
    // 清除数据
    window.localStorage.removeItem('xunhuan');
    window.localStorage.removeItem('Contrast');
    window.localStorage.removeItem('Contrasts');
    // 获取当前位置
    window.addEventListener('message', function(event) {
      if (event.data != null) {

        that.las = event.data.lat;
        that.lns = event.data.lng;
        window.localStorage.setItem('las', that.las);
        window.localStorage.setItem('lns', that.lns);
      }
    }, false);


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
      las: '',
      lns: '',
      setItem: null,
      timeName: null,
      line: '',
      hi: false,
      disableds: true,
      lock: false,
      boxScrollbottom: '0',
      timer: null,
      // loading
      loadings: false,
      // 手机与移动的bottom
      boxScrollBottom: '',
      displaypc: '',
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
      c: [],
      d: [],
      zhi: '',
      b: "", //发送值
      // type类型
      type: "",
      // 发送的值
      sence: "11", //sence=11进入欢迎页 显示li以及小艾欢迎语
      readyState: "",
      // 底部标签的数组
      tabData0: [],
      // 传值的车型数组
      carlist: [],
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
        }, 300)

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
      this.hi = true;
      this.line = 'normal';
      if (this.message.replace(/(^s*)|(s*$)/g, "").length == 0) {
        this.hide = true;
        this.hides = false;
      }
      // 发送按钮出现;
      // this.hide = true;
      // 同时影藏底部弹框
      this.menuflag = false;

    },
    keysup: function() {
      // 点击收入按钮切换发送按钮显示与影藏;
      this.hi = !this.hi;
    },

    // 点击浮层里面的内容触发的事件;
    clickmenu1: function(e) {
      // 取消弹层
      this.menuflag = false;
      // 缓存里面的点击的内容;
      var iconvalue = e;
      if (iconvalue == "智能选车") {
        this.b = iconvalue;
        this.zhi = iconvalue;
      } else if (iconvalue == "参数配置") {
        this.b = iconvalue;
      } else if (iconvalue == "车型对比") {
        this.b = iconvalue;
      } else {

      }
      this.sence = "0"; //更改sence 进入正常会话
      this.sendData(); //发送数据
      var that = this;
      clearTimeout(that.setItem);

    },
    click_affirms: function() {
      this.hi = false;
    },
    click_affirm: function() {
      // 影藏发送按钮
      this.hi = false;
      this.loadings = true;
      // 归为
      this.boxScrollbottom = '0';
      var keyword = document.getElementsByClassName("voice_left")[0].value;
      this.b = keyword;
      this.sence = "0"; //更改sence 进入正常会话
      this.sendData(); //发送数据
      window.localStorage.setItem('k', keyword);
      // 清除输入的内容
      this.message = "";
      var that = this;
      clearTimeout(that.setItem);

    },
    // 点击标签的事件
    btn_click: function(e) {
      this.loadings = true;
      if (e.tagName == "智能选车") {
        this.b = e.tagName;
      } else if (this.type == "41") {
        this.b = "帮我选车" + e.tagName;
      } else if (e.tagName == "车型对比") {
        this.b = e.tagName;
      } else if (this.type == '1') {
        if (this.b == '车型对比') {
          this.c.push('车型对比');
          this.c.push(e.tagName);
          this.b = this.c.join();
        } else if (this.b == '参数配置') {
          this.d.push('参数配置');
          this.d.push(e.tagName);
          this.b = this.d.join();
        }
      } else if (e.tagName == "参数配置") {
        this.b = e.tagName;
      }

      this.sence = "0"; //更改sence 进入正常会话
      this.sendData(); //发送数据
      // 点击按钮时让弹框显示
      this.hidden = true;
      var that = this;
      clearTimeout(that.setItem);
      //把数据传入给Home
      // console.log(this.b);
      window.localStorage.setItem('k', this.b);

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
      this.menuflag = !this.menuflag;
      this.sendData('12');
    },
    loadDemo: function() {
      if (window.WebSocket) {} else {}
    },
    // 建立WebSocket连接
    initWebSocket: function() {
      let that = this;
      that.websock = new WebSocket(that.commmonWebConfig.wsuri);
      that.websock.onopen = that.websocketopen;
      that.websock.onmessage = that.websocketonmessage;
      that.websock.onclose = that.websocketclose;
      that.websock.onerror = that.websocketerror;
    },
    sendData: function(sences) {
      //发送数据
      let that = this;
      let obj = {
        logId: "123",
        caller: {
          appId: "10039",
          token: "cookie"
        },
        user: {
          uuid: "888888",
          content: that.b,
          channel: "3"
        },
        parameters: {
          cityId: "0",
          sence: sences,
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
      console.log(obj);
      let objStringify = JSON.stringify(obj);
      if (that.websock.readyState === that.websock.OPEN) {
        that.websocketsend(objStringify);
      }
      // 若是 正在开启状态，则等待300毫秒
      else if (that.websock.readyState === that.websock.CONNECTING) {
        setTimeout(function() {
          that.websocketsend(objStringify);
        }, 300);
      } else {
        that.initWebSocket();
        setTimeout(function() {
          that.websocketsend(objStringify);
        }, 500);
      }
    },
    websocketopen: function(e) {
      // console.log('打开连接');
      var that = this;
      // 链接成功发送数据
      that.sendData('11');

    },
    websocketonmessage: function(e) {
      var that = this;
      var objStringify = JSON.parse(e.data);
      that.type = objStringify.data.type;
      if (that.hidden == false) {
        that.hidden = true;
      }
      if (that.hidden == true && that.type != '28') {
        clearTimeout(that.setItem);
        that.setItem = setTimeout(function() {
          that.hidden = false;
        }, 10000)
      }
      //数据接收
      console.log(objStringify.data);
      console.log("type值为：" + this.type);
      //关闭并延迟底部标签的loading
      if (that.loadings == true) {
        that.loadings = false;
      }
      if (that.type == '28') {
        // 进厂页面
        that.tabData0 = objStringify.data.tagsGroup;
        that.content = objStringify.data.content;
        //向Homepage（主页）组件里传值，
        Bus.$emit("msg", objStringify);
        // 记录存储底部标签
        window.localStorage.setItem('dibu', JSON.stringify(objStringify.data.tagsGroup));
      } else if (that.type == '41') {
        // 点击的是智能选车
        that.content = objStringify.data.content;
        that.tabData0 = objStringify.data.tagsGroup;
        that.lock = true;
        that.b = '';
      } else if (that.type == '1') {
        // 点击的是车型对比
        if (objStringify.data.tagsGroup == false) {
          that.content = objStringify.data.content;
        } else if (objStringify.data.content == null) {
          that.content = objStringify.data.prompt;
          that.tabData0 = objStringify.data.tagsGroup;
        } else {
          that.content = objStringify.data.content;
          that.tabData0 = objStringify.data.tagsGroup;
        }


      } else if (that.type == '29') {
        // 点击是功能菜单
        let arrlist = objStringify.data.abstractContent.layerPopTag.slice(0, 3);
        that.imgList1 = arrlist;

      } else if (that.type == "2") {
        that.carlist = objStringify.data;
        for (var i in objStringify.data.carContent.allCarInfoResult) {
          that.imglist2.push(
            objStringify.data.carContent.allCarInfoResult[i].picture_url
          );
        }
        that.$router.push({
          path: "Home"
        });
        window.localStorage.setItem('Transformation', JSON.stringify(that.carlist));
        // 单车页
        // 记录第一进入Home页面
        window.localStorage.setItem('记录', '第一次进入');
      } else if (that.type == '10') {
        that.$router.push({
          path: "Home"
        });
        window.localStorage.setItem('记录', '第一次进入');
      } else if (that.type == "12") {
        that.carlist = objStringify.data;
        that.$router.push({
          path: "Home"
        });
        window.localStorage.setItem('记录', '第一次进入');
        // 配置页
      } else if (that.type == "36") {
        that.carlist = objStringify.data;
        that.content = objStringify.data.prompt;
        that.$router.push({
          path: "Home"
        });
        window.localStorage.setItem('记录', '第一次进入');
        // 两车配置参数对比
      } else if (that.type == "25") {
        that.carlist = objStringify.data;
        that.$router.push({
          path: "Home"
        });
        window.localStorage.setItem('记录', '第一次进入');
        // 俩车外观对比
      } else if (that.type == "31") {
        that.carlist = objStringify.data;
        that.$router.push({
          path: "Home"
        });
        window.localStorage.setItem('记录', '第一次进入');
        // 俩车内饰对比
      } else if (that.type == "32") {
        that.carlist = objStringify.data;
        that.$router.push({
          path: "Home"
        });
        window.localStorage.setItem('记录', '第一次进入');
        // 俩车口碑对比
      } else if (that.type == "33") {
        that.carlist = objStringify.data;
        that.$router.push({
          path: "Home"
        });
        window.localStorage.setItem('记录', '第一次进入');
        // 获取销售列表(暂时不用写)
      } else if (that.type == "11") {
        that.carlist = objStringify.data;
      }
    },
    websocketsend: function(agentData) {
      // console.log(agentData);
      let that = this;
      //数据发送
      that.websock.send(agentData);
    },
    websocketclose: function(e) {
      //关闭
      // console.log("WebSocket关闭");
      // console.log(this.websock.readyState);

    },
    websocketerror: function(e) {
      // console.log("WebSocket连接失败");
      // 连接失败在重链;
      this.initWebSocket();
    }
  }
};

</script>
