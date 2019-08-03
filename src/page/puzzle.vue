<template>
  <div class="puzzle">
    <<!-- a src="https://h5.ai.yiche.com/ai/h5/V1.0/pintuv20/index.html?#/v=1">点击我</a> -->
    <span @click="my_Event">点击拼图选车</span>
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

</style>
<script>
export default {
  name: "speak",
  props: ["carlist", "imglist2", "tabData0"],
  data: function() {
    return {
     
    }
  },
  created: function() {

  },
  updated: function() {

  },
  methods: {
   my_Event() {
    window.location.href = "https://h5.ai.yiche.com/ai/h5/V1.0/pintuv20/index.html?#/v=1";
   }
  },

}

</script>
