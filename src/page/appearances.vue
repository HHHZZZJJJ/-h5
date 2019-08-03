<template>
  <div class="hello">
    <h1 class="page-title">Action Sheet</h1>
    <div class="page-actionsheet-wrapper">
      <button class="mint-button mint-button--default mint-button--large" @click="actionSheet">
        <label class="mint-button-text">点击上拉 action sheet</label>
      </button>
    </div>
    <mt-actionsheet :actions="data" v-model="sheetVisible">
    </mt-actionsheet>
    <br>
     <input type="file" accept="image/*" capture="camera">
    <input type="file" accept="video/*" capture="camcorder">
    <input type="file" accept="audio/*" capture="microphone">

  </div>
</template>
<script>
import { Actionsheet } from 'mint-ui';
export default { 
  name: 'hello',
   data() {  
    return {      
      data: [
        { name: '拍照',  method: this.getCamera },
        { name: '从相册中选择',  method: this.getLibrary }
      ],
       sheetVisible: false,
    } 
  },

  methods: {  
    actionSheet: function() { 
      this.sheetVisible = true;  
    },
      getCamera: function() {   
      console.log("打开照相机")  
    },
      getLibrary: function() {   
      console.log("打开相册")  
    } 
  }
}

</script>
<style scoped>


</style>

