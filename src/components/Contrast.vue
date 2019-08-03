<template>
  <div class="carlists">
      <t-list :cities="cities" :carName="carName"></t-list>
      <t-alphabet :cities="cities"></t-alphabet>
  </div>
</template>
<script>
import tList from "./tList.vue";
import tAlphabet from './tAlphabet.vue';
export default {
  name: 'carlists',
  props: ["carb"],
  data() {
    return {
      cities: {},
      carName: '',
      hotCities: []
    }
  },
  components: {
    tList,
    tAlphabet
  },
  methods: {
    
  },
  mounted() {

    var car_datas = JSON.parse(window.localStorage.getItem('cas'));
    if(this.carb) {
      this.cities = this.carb.carContent.brandsAndModelsCarListBean;
    } 

    if(car_datas) {
      this.carName = car_datas.carContent.allCarInfoResult[0].moduleName;
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
  .carlists {
    width: 10rem;
    margin: 0 auto;
  }
 
}

</style>
