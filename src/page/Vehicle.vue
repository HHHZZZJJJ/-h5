<template>
  <div class="Vehicle">
    <!-- 返回按钮 -->
    <div class="push_button">
      <div class="push_buttons">
        <img src="../../static/images/back@2x.png" class="returnimg" @click="Returns">
        <h3 class="titleCar">小艾懂车</h3>
      </div>
    </div>
    <!-- 用车百科 -->
    <div class="Encyclopedias" v-if="defaults">
      <div class="inside">
        <div class="Encyclopedias_left">
          <p class="Title">用车百科</p>
          <p class="Title_img">
            <img src="../../static/images/baike.png">
          </p>
        </div>
        <div class="Encyclopedias_right">
          <ul class="inside_list">
            <li @click="suspension"> 什么是非独立悬架 </li>
            <li @click="clean"> 织绒座椅怎么清洁 </li>
            <li @click="dogs"> 什么叫电子狗 </li>
            <li @click="Calculation">汽车加速时间是怎么计算的</li>
            <li @click="car_xp">车道偏离预警系统管用么</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="suspensions" v-if="indexs==1">
      <h2>非独立悬架</h2>
      <P>非独立悬架的结构特点是两侧车轮由一根整体式车架相连，车轮连同车桥一起通过弹性悬架悬挂在车架或车身的下面。非独立悬架具有结构简单、成本低、强度高、保养容易、行车中前轮定位变化小的优点，但由于其舒适性及操纵稳定性都较差，在现代轿车中基本上已不再使用，多用在货车和大客车上。非独立式悬架特点和种类：非独立式悬架的两侧车轮安装于一根整体式车桥上，车桥通过悬挂与车架相连。这种悬挂结构简单，传力可靠，但两轮受冲击震动时互相影响。而且由于非悬挂质量较重，悬挂的缓冲性能较差，行驶时汽车振动，冲击较大。该悬挂一般多用于载重汽车、普通客车和一些其他车辆上。</P>
    </div>
    <div class="suspensions" v-if="indexs==2">
      <h2>织绒座椅</h2>
      <P>绒布的透气性好，乘坐舒适，可以再买套座套，便于清洗更换，现在的座套也有很不错的，效果也好，价格也合理。织物面料的座椅，处置起来相对简单一些。织绒座椅不是很脏的时候，可用长毛的刷子和吸力强的吸尘器配合，一边刷座椅表面，一边用吸尘器的吸口把污物吸出来。对于特别脏的座椅，清洁时就要进行以下几个步骤：首先用毛刷子清洗较脏的局部，然后用干净抹布蘸少量中性洗涤液，在半干半湿的情况下全面擦拭座椅表面，最后用吸尘器再次清洁座椅并消除多余的水分。用吸尘器清除灰尘，尘埃碎片。如果灰尘凝结在绒布上或很难用吸尘器除去，先用柔软的刷子刷一下再用吸尘器吸。用干的布来擦拭纤维表面，然后将座椅纤维彻底弄干，如果绒布仍很脏，用温和的肥皂水及温水擦拭，然后彻底弄干。如果污垢清不出来，试试市面上卖的纤维清洗剂。在较不明显位置先使用此清洁剂以确定它不会对绒布有负作用。要根据说明书来使用此清洁剂。平时在车里最好不要吃东西，非吃不可时一定要注意，不要让食物的细渣掉落在车座上，以避免滋生螨虫或其他微生物而产生怪味。绒布座椅优优点：1.表面不易破损，寿命长。一旦遇上刀、剪、针等，真皮上就会留下印痕。比较来说，绒布就不会那么娇气了。而且修补起来，绒布的成本也远远低于真皮。当然更重要的是，真皮比绒布更容易出现老化现象，绒布座椅使用寿命更长。2.坐感稳固，防滑。绒布座椅坐上去感觉更稳，不会有打滑的感觉。 另外还有价格低，重量轻，透气性好等特点。缺点：1.容易藏污纳垢，不易清洁。灰尘会深入到座椅深层，因此清洁工作比较繁重，所以绒布座椅来说还需要购买座垫等，否则一旦弄脏，就有可能渗入到座椅内部。2.散热性差些。夏日正午被阳光灼热的车辆，座椅一定很烫。但如果是真皮座椅，用手拍几下就可以散去热气，或者坐上去一段时间就不会感觉那么烫了。而绒布座椅就没有这么好的散热性。</P>
    </div>
    <div class="suspensions" v-if="indexs==3">
      <h2>电子狗</h2>
      <P>狭义的电子狗是指早期的反测速产品，当然现在市场上也还有一定的量在销售，只能在一些地区起有限的作用。电子狗准确地说只是无线信号接收机，比收音机的原理和成本还简单，却在市面上卖200元人民币左右，而且对于流动式照相的根本无法预警。实际上现在各国最多采用的铺地式S线圈不会产生信号，通常厂商会将发射器预先埋设在固定式照相前300到1000公尺处，只要行经路段的车上装有语音型预警机，便可收到预警讯号。</P>
    </div>
    <div class="suspensions" v-if="indexs==4">
      <h2>加速时间</h2>
      <P>加速时间：原地起步加速时间，指汽车从静止状态下，由第一挡起步，并以最大的加速强度(包括选择最恰当的换挡时机)逐步换至高挡后，到某一预定的距离车速或车速所需的时间。目前，常用0--96Km所需的时间（秒数）来评价。超车加速时间，对提高汽车的平均行驶中由某一车速开始，用最高挡或次高挡全力加速至某一高速所需要的时间，用来表示汽车超车时的加速能力。目前常用48--112Km/h所需的时间（秒数）来评价。汽车加速时间，对提高汽车的平均行驶速度有一定影响。特别是在行车途中常常要以最大的加速性来处理相关的紧急情况，比如在交叉路口起步的瞬间，在高速公路超越车辆的时候都能体现出加速性的重要性。</P>
    </div>
    <div class="suspensions" v-if="indexs==5">
      <h2>车道偏离预警系统</h2>
      <P>车道偏离预警系统是一种通过报警的方式辅助驾驶员减少汽车因车道偏离而发生交通事故的系统。车道偏离预警系统提供智能的车道偏离预警，在驾驶员无意识（驾驶员未打转向灯）偏离原车道时，能在偏离车道0.5秒之前发出警报，或方向盘开始震动以提醒驾驶员目前车辆偏离的状况，为驾驶员提供更多的反应时间，大大减少了因车道偏离引发的碰撞事故。</P>
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

.Vehicle {
  width: 10rem;
  height: 100%;
  margin: 0 auto;
  background: url(../../static/images/img_background.png) no-repeat;
  background-size: cover;
  position: relative;
}

.Vehicle .push_button {
  width: 100%;
  height: 1.5rem;
}

.Vehicle .push_button .push_buttons {
  width: 10rem;
  height: 1rem;
  background: #fff;
  position: relative;
}

.Vehicle .push_button .push_buttons .returnimg {
  width: .8rem;
  height: .8rem;
}

.Vehicle .push_button .push_buttons img {
  width: .906667rem;
  height: .906667rem;
  position: absolute;
  top: .1rem;
}

.Vehicle .push_button .push_buttons .titleCar {
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

.Vehicle .Encyclopedias {
  width: 10rem;
  height: 4.613333rem;
  padding-left: .4rem;
  padding-right: .4rem;
  box-sizing: border-box;
}

.Vehicle .Encyclopedias .inside {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 5px;
  position: relative;
}

.Vehicle .Encyclopedias .inside .Encyclopedias_left {
  position: absolute;
  width: 2.826667rem;
  height: 4.613333rem;
  left: 0;
  top: 0;
}

.Vehicle .Encyclopedias .inside .Encyclopedias_left .Title {
  width: 2.826667rem;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  .px2px(font-size, 35px);
}

.Vehicle .Encyclopedias .inside .Encyclopedias_left .Title_img {
  width: 2.826667rem;
  height: 3.413333rem;
  position: relative;
}

.Vehicle .Encyclopedias .inside .Encyclopedias_left .Title_img img {
  width: 2.4rem;
  height: 2.88rem;
  position: absolute;
  left: 50%;
  margin-left: -1.2rem;
}

.Vehicle .Encyclopedias .inside .Encyclopedias_right {
  position: absolute;
  right: 0;
  top: 0;
  width: 6.4rem;
  height: 4.613333rem;
}

.Vehicle .Encyclopedias .inside .Encyclopedias_right .inside_list {
  width: 6.4rem;
  height: 2.88rem;
  position: absolute;
  top: .36rem;
}

.Vehicle .Encyclopedias .inside .Encyclopedias_right .inside_list li {
  height: .5rem;
  margin-bottom: .3rem;
  margin-left: .8rem;
  color: #686868;
  .px2px(font-size, 28px);
}

// 非独立悬挂样式
.Vehicle .suspensions {
  width: 10rem;
  height: 13rem;
  overflow: auto;
}

.Vehicle .suspensions h2 {
  .px2px(font-size, 36px);
  text-indent: .5rem;
  color: #444;
  font-weight: bold;
}

.Vehicle .suspensions p {
  padding-left: .2rem;
  padding-right: .2rem;
  text-indent: .8rem;
  line-height: .8rem;
  .px2px(font-size, 29px);
}

</style>
<script>
export default {
  name: "Vehicle",
  props: ["carlist", "imglist2", "tabData0"],
  data: function() {
    return {
      defaults: true,
      indexs: ''
    }
  },

  created: function() {

  },
  updated: function() {

  },
  methods: {
    // 跳转到列表页面
    Returns: function() {

    },
    suspension: function() {
      this.indexs = 1;
      this.defaults = false;
    },
    clean: function() {
      this.indexs = 2;
      this.defaults = false;
    },
    dogs: function() {
      this.indexs = 3;
      this.defaults = false;
    },
    Calculation: function() {
      this.indexs = 4;
      this.defaults = false;
    },
    car_xp: function() {
      this.indexs = 5;
      this.defaults = false;
    }
  },

}

</script>
