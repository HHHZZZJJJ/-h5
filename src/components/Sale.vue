<template>
	<div class="Sale">
		<!-- 返回按钮 -->
		<div class="push_button">
			<div class="push_buttons">
				<img src="../../static/images/back@2x.png" class="returnimg" @click="Jump">
				<h3 class="titleCar">小艾懂车</h3>
			</div>
		</div>
		<!-- 销售-->
		<div class="business">
			<div class="Distributor_car">
				<P class="car_imges">
					<span class="imgs">
						<img :src="carlist.carContent.salesmanResult.picture_url">
					</span>
					<span class="car_name">{{carlist.carContent.salesmanResult.moduleName}}
					</span>
				</P>
				<P class="Distributor_name">销售</P>
			</div>
			<!-- 销售员信息-->
			<!-- <div class="infor"> -->
			<div class="Salespersons">
				<div class="Salesperson" v-for="(item,index) in carlist.carContent.salesmanResult.salesmanInfo" :key="index">
					<div class="Heads">
						<img src="../../static/images/sales_placeholder@2x.png" class="img1">
						<img :src="item.sCPic" @load="loadImage" class="img2">
					</div>
					<div class="Salesperson_name">{{item.sCName}}</div>
					<div class="gold_medal">
						<p class="gold_medals">金牌销售</p>
						<ul>
							<li><img src="../../static/images/star.png"></li>
							<li><img src="../../static/images/star.png"></li>
							<li><img src="../../static/images/star.png"></li>
							<li><img src="../../static/images/star.png"></li>
							<li><img src="../../static/images/star.png"></li>
						</ul>
						<p class="locals">{{item.vendorName}}</p>
					</div>
					<div class="Telephone" @click="phons(item.sCMobile)">
						<p><img src="../../static/images/phone.png"></p>
						<p class="dian">电话</p>
					</div>
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

.Sale {
	width: 10rem;
	margin: 0 auto;
	background: url(../../static/images/img_background.png) no-repeat;
	background-size: cover;
	position: relative;
}

.Sale .mask_top {
	width: 10rem;
	height: 25rem;
	background: black;
	position: absolute;
	left: 0rem;
	top: 0rem;
	z-index: 2000;
	opacity: 0.5 !important;
}

.Sale .push_button {
	width: 100%;
	height: 1.5rem;
}

.Sale .push_button .push_buttons {
	width: 10rem;
	height: .9rem;
	background: #fff;
	position: relative;
}

.Sale .push_button .push_buttons .returnimg {
	width: .8rem;
	height: .8rem;
}

.Sale .push_button .push_buttons img {
	width: .906667rem;
	height: .906667rem;
	position: absolute;
	top: .1rem;
}

.Sale .push_button .push_buttons .titleCar {
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


.Sale .Distributor_car {
	width: 10rem;
	height: 2.4rem;
	padding-left: .493333rem;
	box-sizing: border-box;
}

.Sale .Distributor_car .car_imges {
	width: 100%;
	height: 1.4rem;
	position: relative;
}

.Sale .Distributor_car .car_imges .imgs img {
	width: 2.3rem;
	height: 1.35rem;
	position: absolute;
	left: 0;
	top: 0;
}

.Sale .Distributor_car .car_imges .car_name {
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

.Sale .Distributor_car .Distributor_name {
	width: 100%;
	height: 1rem;
	line-height: 1rem;
	.px2px(font-size, 33px); // font-weight: bold;
	color: #444444;
	font-family: PingFangSC-Medium;
}

.Sale .Salespersons {
	width: 10rem;
	height: 100%;
}

.Sale .Salesperson {
	width: 10rem;
	height: 2.2rem;
	padding: .2rem .933333rem 0 .48rem;
	box-sizing: border-box;
	border-bottom: 1px solid #f0f0f0;
	position: relative;
}

.Sale .Salespersons .dians {
	width: 4.8rem;
	height: 1.2rem;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-top: -.6rem;
	margin-left: -2.4rem;
	z-index: 20001;
	background: #fff;
}

.Sale .Salesperson .Heads {
	width: 1.26rem;
	height: 1.26rem;
	position: relative;
}

.Sale .Salesperson .Heads .img1 {
	width: 1.26rem;
	height: 1.26rem;
	border-radius: 50%;
	position: absolute;
	left: 0;
	top: 0;
}

.Sale .Salesperson .Heads .img2 {
	width: 1.26rem;
	height: 1.26rem;
	border-radius: 50%;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 10;
}

.Sale .Salesperson .Salesperson_name {
	width: 6.626667rem;
	height: .386667rem;
	position: absolute;
	top: .03rem;
	left: 2rem;
	.px2px(font-size, 29px);
	color: #333333;
	font-family: PingFangSC-Medium;
}

.Sale .Salesperson .gold_medal {
	width: 6rem;
	height: .533333rem;
	position: absolute;
	top: .6rem;
	left: 2rem;
}

.Sale .Salesperson .gold_medal .gold_medals {
	width: 1.413333rem;
	height: .453333rem;
	background: #f9ebe1;
	border-radius: .066667rem;
	color: #FA9D5B;
	line-height: .453333rem;
	text-align: center;
	.px2px(font-size, 22px);
	border: 1px solid #f5a623;
}

.Sale .Salesperson .gold_medal ul {
	width: 1.733333rem;
	height: .32rem;
	position: absolute;
	left: 1.85rem;
	top: .1rem;
}

.Sale .Salesperson .gold_medal ul li {
	float: left;
	width: .293333rem;
	height: .293333rem;
	margin-right: .053333rem;
	box-sizing: border-box;
}

.Sale .Salesperson .gold_medal ul li img {
	width: 100%;
	height: 100%;
}

.Sale .Salesperson .gold_medal .locals {
	width: 6.266667rem;
	height: .5rem;
	line-height: .5rem;
	.px2px(font-size, 23px);
}

.Sale .Salesperson .Telephone {
	width: 1rem;
	height: 1rem;
	position: absolute;
	right: .4rem;
	top: 50%;
	margin-top: -.4rem;
}

.Sale .Salesperson .Telephone img {
	width: .45rem;
	height: .45rem;
}

.Sale .Salesperson .Telephone .dian {
	color: #6d9af8;
	width: 1rem;
	position: absolute;
	left: 50%;
	margin-left: -.6rem;
}

.Sale .business {
	width: 10rem;
}

</style>
<script>
import Bus from "./Bus.js";
import { Toast } from 'mint-ui';
export default {
	name: "Sale",
	props: ["carlist", "imglist2", "tabData0"],
	data: function() {
		return {
			// 记录手机号
			number: '',
			islogin: true,
			islogins: false,
			xianshi: true,
			xianshis: false,
			toggleflag: false,
		}
	},
	mounted: function() {
		this.loadImage();

	},

	created: function() {

	},
	updated: function() {

	},
	methods: {
		// 图片的onlod事件
		loadImage: function() {
			this.islogin = false;
			this.islogins = true;
		},
		// 返回按钮
		Jump: function() {
			var that = this;
			Bus.$emit("ms", '4');
		},
		phons: function(number) {
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
			// 	this.number = number;
			// 	this.toggleflag = true;
			// 	ModalHelper.afterOpen();
			// } else if (userAgent.indexOf("Chrome") > -1) {
			// 	ModalHelper.afterOpen();
			// 	this.toggleflag = true;
			// 	this.number = number;
			// 	Toast({
			// 		message: '请用手机拨打:' + number,
			// 		duration: 10000
			// 	});
			// } else if (userAgent.indexOf("Android") > -1) {
			// 	window.location.href = 'tel://' + number;
			// } else {
			// 	window.location.href = 'tel://' + number;
			// }
		}
	},

}

</script>
