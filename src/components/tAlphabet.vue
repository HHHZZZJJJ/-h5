<template>
  <div class="al">
    <div class="alphabet">
      <ul>
        <li class="item" v-for="(item, index) in letters" :key="index" ref="item" @click="handleLetterClick(index,item)" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" :style="{'line-height':heights,'height':heis, 'width':widths}">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import eventBus from "./Bus.js";
export default {
  name: 'tAlphabet',
  props: ["cities"],
  data() {
    return {
      touchStatus: false,
      heights: '',
      colors: '',
      heis: '',
      widths: '',
    }
  },
  created: function() {
    var userAgent = navigator.userAgent;
    var that = this;
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
       that.heights = '.45rem';
       that.heis = '.45rem';
       that.widths = '.45rem';
      } else {
       that.heights = '.32rem'; 
       that.heis = '.32rem'; 
       that.widths = '.32rem';

      }
    // if (userAgent.indexOf("Firefox") > -1) {
    //   that.heights = '.32rem';
    //   that.heis = '.32rem';
    //   that.widths = '.32rem';

    // } else if (userAgent.indexOf("Chrome") > -1) {
    //   that.heights = '.32rem';
    //   that.heis = '.32rem';
    //   that.widths = '.32rem';
    // } else if (userAgent.indexOf("Android") > -1) {
    //    that.heights = '.45rem';
    //    that.heis = '.45rem';
    //    that.widths = '.45rem';
    // } else {
    //   that.heights = '.45rem';
    //   that.heis = '.45rem';
    //   that.widths = '.45rem';

    // }
  },
  computed: {
    letters() {
      var letters = [];
      for (let key in this.cities) {
        letters.push(this.cities[key].brand_type);
      }
      return letters
    }

  },
  updated() {},
  methods: {
    handleLetterClick(data, data1) {
      eventBus.$emit('change', String(data));
      eventBus.$emit('changes', String(data1));

      for (var i = 0; i < this.$refs.item.length; i++) {
        if (this.$refs.item[i].innerText == data1) {
          this.$refs.item[i].style.background = '#3c7df7';
          this.$refs.item[i].style.borderRadius = '50%';
          this.$refs.item[i].style.color = '#FFFFFF';
        } else {
          this.$refs.item[i].style.background = '';
          this.$refs.item[i].style.borderRadius = '';
          this.$refs.item[i].style.color = '#999999';
        }
      }


    },

    handleTouchStart() {
      // console.log('开始滑动');
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      // console.log('一直在滑动');
      if (this.touchStatus) {
        //函数节流
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const startY = this.$refs['A'][0].offsetTop;
          const touchY = e.touches[0].clientY;
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            eventBus.$emit('change', this.letters[index])
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      // console.log('停止滑动');
      this.touchStatus = false;
    }
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

.al {
  width: 10rem;
}

.al .alphabet {
  position: fixed;
  top: 2.2rem;
  width: .32rem;
  z-index: 1001;
  right: .293333rem; // background: #fff;
}

.alphabet .item {
  text-align: center;
  .px2px(font-size, 18px);
  color: #999;
  z-index: 10001;
  width: .45rem;
  height: .45rem;
  margin-bottom: .1rem;
}

.alphabet .items {
  text-align: center;
  .px2px(font-size, 18px);
  color: #999;
}

</style>
