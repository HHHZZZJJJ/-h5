<template>
	<div class="Distributor">
		<!-- 返回按钮 -->
		<div class="push_button">
			<div class="push_buttons">
				<img src="../../static/images/back@2x.png" class="returnimg" @click="Jump">
				<h3 class="titleCar">小艾懂车</h3>
			</div>
		</div>
		<!-- 经销商-->
		<div class="over">
			<div class="Distributor_car">
				<P class="car_imges">
					<span class="imgs">
						<img :src="carlist.carContent.dealerInfoResult.picture_url">
					</span>
					<span class="car_name">
					{{carlist.carContent.dealerInfoResult.moduleName}}
				    </span>
				</P>
				<P class="Distributor_name">经销商</P>
			</div>
			<div class="address" v-for="(item,index) in carlist.carContent.dealerInfoResult.priceQueryCsForApps" :key="index">
				<div class="address_top">
					<p class="address_name">{{item.vbi_FullName}}</p>
					<p class="address_Price" style="font-size: 12px;">{{item.minPrice}}万起</p>
				</div>
				<div class="address_topo">
					<p class="local">
						<img src="../../static/images/address.png"> {{item.vci_SaleAddr}}
					</p>
					<div v-for="(item,inde) in weiarr" class="fenzhong" :key="inde">
						<div v-if="index == inde">
							<p>{{(item/1.2).toFixed(0)}}分钟/</p>
							<p>{{item}}Km</p>
						</div>
					</div>
				</div>
				<div class="address_bottom" @click="callPhone(item.vci_SaleTel)">
					<p class="Telephone">
						<img src="../../static/images/phone.png">
					</p>
					<p class="dian">电话</p>
				</div>
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

.Distributor {
	width: 10rem;
	margin: 0 auto;
	background: url(../../static/images/img_background.png) no-repeat;
	background-size: cover;
}

.Distributor .push_button {
	width: 100%;
	height: 1.5rem;
}

.Distributor .push_button .push_buttons {
	width: 10rem;
	height: .9rem;
	background: #fff;
	position: relative;
}

.Distributor .push_button .push_buttons .returnimg {
	width: .8rem;
	height: .8rem;
}

.Distributor .push_button .push_buttons img {
	width: .906667rem;
	height: .906667rem;
	position: absolute;
	top: .1rem;
}

.Distributor .push_button .push_buttons .titleCar {
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

.Distributor .business {
	// height: 11rem;
	// width: 10rem;
	// background: red;
	// overflow: auto;
}

.Distributor .Distributor_car {
	width: 10rem;
	height: 2.5rem;
	padding-left: .493333rem;
	box-sizing: border-box;
}

.Distributor .Distributor_car .car_imges {
	width: 100%;
	height: 1.4rem;
	position: relative;
}

.Distributor .Distributor_car .car_imges .imgs img {
	width: 2.3rem;
	height: 1.35rem;
	position: absolute;
	left: 0;
	top: 0;
}

.Distributor .Distributor_car .car_imges .car_name {
	position: absolute;
	min-width: 6.666667rem;
	height: .5rem;
	top: 50%;
	left: 2.4rem;
	margin-top: -.27rem;
	padding-left: .133333rem;
	box-sizing: border-box;
	.px2px(font-size, 35px);
	color: #4e4e4e;
	font-family: PingFangSC-Medium;
}

.Distributor .Distributor_car .Distributor_name {
	width: 100%;
	height: 1rem;
	line-height: 1rem;
	.px2px(font-size, 33px); // font-weight: bold;
	color: #444444;
	font-family: PingFangSC-Medium;
}


.Distributor .over {
	margin-top: .1rem;
}

.Distributor .over .address {
	width: 10rem;
	min-height: 1.86rem;
	padding: .186667rem .4rem 0 .45rem;
	box-sizing: border-box;
	border-bottom: 1.5px solid #f0f0f0;
	position: relative;
}

.Distributor .over .address .address_topo .fenzhong {
	width: 2rem;
	position: absolute;
	right: .85rem;
	top: 0rem;
	text-align: left;
	color: #999999;
}

.Distributor .over .address .address_top {
	width: 100%;
	position: relative;
}

.Distributor .over .address .address_topo {
	width: 100%;
	min-height: .5rem;
	position: relative;
	margin-top: .1rem;
	margin-bottom: .2rem;
}

.Distributor .over .address .address_topo .local {
	width: 5.6rem;
	min-height: .8rem;
	.px2px(font-size, 22px);
	color: #999999;
	font-family: PingFangSC-Regular;
}

.Distributor .over .address .address_topo .local img {
	width: .24rem;
	height: .29rem;
}

.Distributor .over .address .address_top .address_name {
	width: 5.426667rem; // min-height: .44rem;
	.px2px(font-size, 28px);
	color: #333;
	font-family: PingFangSC-Medium;
}

.Distributor .over .address .address_top .address_Price {
	width: 2.3rem;
	height: .426667rem;
	position: absolute;
	right: .95rem;
	top: .05rem;
	box-sizing: border-box;
	padding-left: .373333rem;
	color: #FA9D5B;
	.px2px(font-size, 26px);
	font-family: PingFangSC-Regular;
}

.Distributor .over .address .address_bottom {
	width: .8rem;
	height: 1rem;
	position: absolute;
	top: 50%;
	margin-top: -.5rem;
	right: .18rem;
}

.Distributor .over .address .address_bottom .Telephone {
	width: .45rem;
	min-height: .45rem;
}

.Distributor .over .address .address_bottom .Telephone img {
	width: .45rem;
	height: .45rem;
}

.Distributor .over .address .address_bottom .dian {
	color: #6d9af8;
	height: .45rem;
	width: .8rem;
	position: absolute;
	left: 50%;
	margin-left: -.45rem;
}

</style>
<script>
import Bus from "./Bus.js";
import { Toast } from 'mint-ui';
export default {
	name: "Distributor",
	props: ["carlist", "imglist2", "tabData0", "weiarr"],
	data: function() {
		return {}
	},
	mounted: function() {
		// console.log(this.weiarrlocal);

	},
	computed: {


	},
	created: function() {},
	updated: function() {

	},
	methods: {
		// 返回按钮
		Jump: function() {
			var that = this;
			var shuju = JSON.stringify(window.localStorage.getItem('carli'));
			if (shuju == 'null') {
				Bus.$emit("ms", '9你' + that.carlist.carContent.dealerInfoResult.moduleName);
			} else {
				Bus.$emit("ms", '4');
			}
		},
		// 打电话
		callPhone: function(number) {
			var userAgent = navigator.userAgent;
			if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
				window.location.href = 'tel://' + number;
			} else {
				Toast({
					message: '请用手机拨打:' + number,
					duration: 10000
				})
			}
			
			// if (userAgent.indexOf("Firefox") > -1) {
			// 	Toast({
			// 		message: '请用手机拨打:' + number,
			// 		duration: 10000
			// 	})
			// } else if (userAgent.indexOf("Chrome") > -1) {
			// 	Toast({
			// 		message: '请用手机拨打:' + number,
			// 		duration: 10000
			// 	})
			// } else if(userAgent.indexOf("Android") > -1) {
			//            window.location.href = 'tel://' + number;
			// } else {
			// 	window.location.href = 'tel://' + number;

			// }
		}
	},

}

</script>
