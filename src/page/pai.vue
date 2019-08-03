<template>
    <div class="pai">
        <div class="push_button">
            <div class="push_buttons">
                <img src="../../static/images/back@2x.png" class="returnimg" @click="Returns">
                <h3 class="titleCar">拍照识车</h3>
            </div>
        </div>
        <div v-if="quan">
            <div class="region">
                <div v-for="(urls, index) in imgs">
                    <!--    <div v-on:click="deleteImg(index)"></div> -->
                    <img :src="urls" />
                </div>
            </div>
            <div class="Photograph" @click="imgClick" v-if="displays">
                <p>开始拍照</p>
            </div>
            <div class="Remake" v-if="displayss">
                <p class="shoot" @click="Remakes">
                    <img src="../../static/images/group.png">
                    <span>重拍</span>
                </p>
                <p class="confirm" @click="Distinguish">
                    <img src="../../static/images/confirm.png">
                    <span>确认</span>
                </p>
            </div>
            <input style="float: left; display: none;" type="file" id='uploadFile' accept="image/*" v-on:change="readLocalFile()">
        </div>
        <div class="information" v-if="pipei" @click="fan">
            <p class="information_one"><img src="../../static/images/4936.png"></p>
            <p class="information_two">
                <span>30万-50万</span>
            </p>
            <p class="information_Three"><span>匹配度50%</span></p>
        </div>
    </div>
</template>
<script>
export default {
    name: "pai",
    data() {
        return {
            imgs: [],
            displays: true,
            displayss: false,
            quan: true,
            pipei: false
        }
    },
    methods: {
        // 点击匹配
        fan: function() {

            this.displays = true;
            this.displayss = false;
            this.imgs = [];
            this.quan = true;
            this.pipei = false;
        },
        // 确认事件
        Distinguish: function() {
            console.log('发送图片');
            this.pipei = true;
            this.quan = false;
        },
        // 重拍事件
        Remakes: function() {
            this.displays = true;
            this.displayss = false;
            this.imgs = [];
        },
        // 返回按钮
        Returns: function() {

        },
        // 删除图片
        // deleteImg: function(index) {
        //     this.imgs.splice(index, 1);
        // },
        // 图片click
        imgClick: function() {
            console.log('jjj');
            document.getElementById("uploadFile").click();

        },
        // 点击选中图片
        readLocalFile: function() {
            var localFile = document.getElementById("uploadFile").files[0];
            var reader = new FileReader();
            var content;
            var current = this;
            reader.onload = function(event) {
                content = event.target.result;
                current.imgs.push(content); //获取图片base64代码
            }
            reader.onerror = function(event) {
                alert('error')
            }
            content = reader.readAsDataURL(localFile, "UTF-8");
            var sss = document.getElementById("uploadFile").value;
            console.log(sss);
            if (sss) {
                this.displays = false;
                this.displayss = true;
            } else {
                this.displays = true;
                this.displayss = false;
            }
        }
    },
    mounted() {

    },
    created() {

    },
    components: {

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

.pai {
    width: 10rem;
    height: 100%;
    margin: 0 auto;
    position: relative;
}

.pai .push_button {
    width: 100%;
    height: 1.5rem;
}

.pai .push_button .push_buttons {
    width: 10rem;
    height: 1rem;
    background: #fff;
    position: relative;
}

.pai .push_button .push_buttons .returnimg {
    width: .8rem;
    height: .8rem;
}

.pai .push_button .push_buttons img {
    width: .906667rem;
    height: .906667rem;
    position: absolute;
    top: .1rem;
}

.pai .push_button .push_buttons .titleCar {
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

.pai .Photograph {
    width: 10rem;
    height: 1rem;
    position: relative;
}

.pai .Photograph p {
    position: absolute;
    width: 2rem;
    height: 1rem;
    background: skyblue;
    line-height: 1rem;
    text-align: center;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -1rem;
    color: #fff;
    border-radius: 10px;
}

.pai .region {
    width: 10rem;
    height: 5rem;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 1rem;
    overflow: hidden;
    background: #676C5D;
}

.pai .region img {

    position: absolute;
    max-width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

.pai .Remake {
    width: 10rem;
    height: 1.4rem;
    position: relative;
}

.pai .shoot {
    position: absolute;
    height: 1.4rem;
    width: 2.5rem;
    position: absolute;
    left: 0;
    top: 0; // background: pink;
}

.pai .shoot img {
    width: .8rem;
    height: .7rem;
    position: absolute;
    right: 0;
    top: .2rem;
}

.pai .shoot span {
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    bottom: -.3rem;
    .px2px(font-size, 30px);
}

.pai .confirm {
    position: absolute;
    height: 1.4rem;
    width: 2rem;
    position: absolute;
    left: 50%;
    margin-left: -1rem;
    top: 0;
}

.pai .confirm img {
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: 50%;
    margin-left: -.45rem;
}

.pai .confirm span {
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: 50%;
    margin-left: -.45rem;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    bottom: -.3rem;
    .px2px(font-size, 30px);
}

.pai .information {
    width: 10rem;
    height: 2rem;
    padding-left: .266667rem;
    padding-right: .266667rem;
    box-sizing: border-box;
    position: relative;
    background: #fff;
}

.pai .information .information_one {
    width: 3rem;
    height: 2rem;
    position: absolute;
    left: 0;
    top: 0;
}

.pai .information .information_one img {
    width: 100%;
    height: 100%;
}

.pai .information .information_Three {
    width: 3rem;
    height: 2rem;
    position: absolute;
    right: 0;
    top: 0;
}

.pai .information .information_Three span {
    display: block;
    width: 3rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    .px2px(font-size, 30px);
}

.pai .information .information_two {
    width: 3rem;
    height: 2rem;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -1.5rem;
}

.pai .information .information_two span {
    display: block;
    width: 3rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    .px2px(font-size, 30px);
}

</style>
