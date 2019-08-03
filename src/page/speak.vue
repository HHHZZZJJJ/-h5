<template>
  <div class="speak">
    <!-- 返回按钮 -->
    <div class="push_button">
      <div class="push_buttons">
        <img src="../../static/images/back@2x.png" class="returnimg" @click="Returns">
        <h3 class="titleCar">小艾懂车</h3>
      </div>
      <div class="content">
      	<h2>讲段子</h2>
      	<p>昨晚好险，前面查酒驾，我刚喝完酒出来，早知道不走这条道了，距离交巡警越来越近了，心脏突突的跳，手心里全是汗，想要逃跑，但这是单行道，跑也跑不了，轮到我了，我颤抖着张开嘴，对着测酒器吹了一口，机器疯狂的鸣叫，完了，心想这次躲不过去了......警察对我大吼，赶紧滚，跟着凑什么热闹。妈的，酒喝多了，忘记自己是走路的。</p>
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

.speak {
  width: 10rem;
  height: 15rem;
  margin: 0 auto;
  background: url(../../static/images/img_background.png) no-repeat;
  background-size: cover;
  position: relative;
}

.speak .push_button {
  width: 100%;
  height: 1.5rem;
}

.speak .push_button .push_buttons {
  width: 10rem;
  height: 1rem;
  background: #fff;
  position: relative;
}

.speak .push_button .push_buttons .returnimg {
  width: .8rem;
  height: .8rem;
}

.speak .push_button .push_buttons img {
  width: .906667rem;
  height: .906667rem;
  position: absolute;
  top: .1rem;
}

.speak .push_button .push_buttons .titleCar {
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
.speak .content {
  width: 10rem;
  padding-left: .32rem;
  box-sizing: border-box;
}
.speak .content h2 {
 .px2px(font-size, 38px);
 color: #444444;
 font-weight: 600;
 margin-top: .3rem;
}
.speak .content p {
 text-indent: .4rem;
 .px2px(font-size, 28px);
 line-height: .75rem;
}
</style>
<script>
export default {
  name: "speak",
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

    }
  },

}

</script>
