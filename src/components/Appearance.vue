<template>
	<div class="Appearance">
		<!-- 返回按钮 -->
		<div class="push_button">
			<div class="push_buttons">
				<img src="../../static/images/back@2x.png" class="returnimg" @click="Jump">
				<h3 class="titleCar">小艾懂车</h3>
			</div>
		</div>
		<div class="heidings">
			<!-- 外观上面部分 -->
			<div class="Appearance_top">
				<div class="information">
					<!-- 车的信息 -->
					<div class="information_one">
						<p class="car_name">{{carlist.carContent.compareResult[0].carModuleName}}</p>
						<p class="car_years">{{carlist.carContent.compareResult[0].styleName}}</p>
						<p class="car_img"><img :src="carlist.carContent.compareResult[0].brand_logo_url"></p>
						<ul class="list">
							<li>
								<div>
									<p class="pais">{{carlist.carContent.compareResult[0].appearanceCompare[0].value}}</p>
									<p class="pai">{{carlist.carContent.compareResult[0].appearanceCompare[0].name}}</p>
								</div>
							</li>
							<li>
								<div>
									<p class="pais">{{carlist.carContent.compareResult[0].appearanceCompare[1].value}}</p>
									<p class="pai">{{carlist.carContent.compareResult[0].appearanceCompare[1].name}}</p>
								</div>
							</li>
							<li class="li_one">
								<div>
									<p class="p_one">{{carlist.carContent.compareResult[0].appearanceCompare[2].value}}</p>
									<p class="pai">{{carlist.carContent.compareResult[0].appearanceCompare[2].name}}</p>
								</div>
							</li>
						</ul>
					</div>
					<!-- 车的尺寸 -->
					<div class="car_size">
						<div class="car_sizes">
							<img src="../../static/images/two.png" v-show="xians">
							<img src="../../static/images/two.png" v-show="carindexs== 5">
							<img src="../../static/images/three.png" v-show="carindexs== 6">
							<img src="../../static/images/suv.png" v-show="carindexs== 7">
							<img src="../../static/images/mpv.png" v-show="carindexs== 8">
							<span class="car_Wheelbase">{{carlist.carContent.compareResult[0].configure_wheelbase}}mm轴距</span>
							<span class="car_height">{{carlist.carContent.compareResult[0].configure_high}}mm高</span>
							<span class="car_width">{{carlist.carContent.compareResult[0].configure_width}}mm宽</span>
							<span class="car_length">{{carlist.carContent.compareResult[0].configure_length}}mm长</span>
						</div>
					</div>
					<!-- 车的照片 -->
					<div class="car_Photo">
						<img :src="carlist.carContent.compareResult[0].picture_url">
					</div>
				</div>
			</div>
			<!-- 外观下面部分 -->
			<div class="Appearance_top">
				<div class="information">
					<!-- 车的信息 -->
					<div class="information_one">
						<p class="car_name">{{carlist.carContent.compareResult[1].carModuleName}}</p>
						<p class="car_years">{{carlist.carContent.compareResult[1].styleName}}</p>
						<p class="car_img"><img :src="carlist.carContent.compareResult[1].brand_logo_url"></p>
						<ul class="list">
							<li>
								<div>
									<p class="pais">{{carlist.carContent.compareResult[1].appearanceCompare[0].value}}</p>
									<p class="pai">{{carlist.carContent.compareResult[1].appearanceCompare[0].name}}</p>
								</div>
							</li>
							<li>
								<div>
									<p class="pais">{{carlist.carContent.compareResult[1].appearanceCompare[1].value}}</p>
									<p class="pai">{{carlist.carContent.compareResult[1].appearanceCompare[1].name}}</p>
								</div>
							</li>
							<li class="li_one">
								<div>
									<p class="p_one">{{carlist.carContent.compareResult[1].appearanceCompare[2].value}}</p>
									<p class="pai">{{carlist.carContent.compareResult[1].appearanceCompare[2].name}}</p>
								</div>
							</li>
						</ul>
					</div>
					<!-- 车的尺寸 -->
					<div class="car_size">
						<div class="car_sizes">
							<img src="../../static/images/two.png" v-show="xian">
							<img src="../../static/images/two.png" v-show="carindex== 1">
							<img src="../../static/images/three.png" v-show="carindex== 2">
							<img src="../../static/images/suv.png" v-show="carindex== 3">
							<img src="../../static/images/mpv.png" v-show="carindex== 4">
							<span class="car_Wheelbase car_Wheelbases">{{carlist.carContent.compareResult[1].configure_wheelbase}}mm轴距</span>
							<span class="car_height">{{carlist.carContent.compareResult[1].configure_high}}mm高</span>
							<span class="car_width">{{carlist.carContent.compareResult[1].configure_width}}mm宽</span>
							<span class="car_length">{{carlist.carContent.compareResult[1].configure_length}}mm长</span>
						</div>
					</div>
					<!-- 车的照片 -->
					<div class="car_Photo">
						<img :src="carlist.carContent.compareResult[1].picture_url">
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

.Appearance {
	width: 10rem;
	margin: 0 auto;
	background: url(../../static/images/img_background.png) no-repeat;
	background-size: cover;
}

.Appearance .push_button {
	width: 100%;
	height: 1.2rem;
}

.Appearance .push_button .push_buttons {
	width: 10rem;
	height: .9rem;
	background: #fff;
	position: relative;
}

.Appearance .push_button .push_buttons .returnimg {
	width: .8rem;
	height: .8rem;
}

.Appearance .push_button .push_buttons img {
	width: .906667rem;
	height: .906667rem;
	position: absolute;
	top: .1rem;
}

.Appearance .push_button .push_buttons .titleCar {
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

.Appearance .heidings {
	width: 10rem;
	height: 12.5rem;
	overflow: auto;
}

.Appearance .Appearance_top {
	width: 10rem;
	height: 5.9rem;
	margin-bottom: .3rem;
	position: relative;
}

.Appearance .Appearance_top .information {
	width: 10rem;
	height: 2.84rem;
}

.Appearance .Appearance_top .information .information_one {
	width: 7rem;
	min-height: 2.8rem;
	background: #a3a5b3;
	margin-left: .24rem;
	padding: .2rem .2rem 0 .2rem;
	box-sizing: border-box;
	position: relative;
}

.Appearance .Appearance_top .information .information_one .car_name {
	width: 5.866667rem;
	height: .48rem;
	line-height: .48rem;
	color: #fff;
	font-size: .4rem;
	margin-bottom: .005rem;
}

.Appearance .Appearance_top .information .information_one .car_years {
	width: 6rem;
	height: .44rem;
	line-height: .5rem;
	color: #fff;
	font-size: .266667rem;
}

.Appearance .Appearance_top .information .information_one .car_img {
	width: .533333rem;
	height: .533333rem;
}

.Appearance .Appearance_top .information .information_one .car_img img {
	width: .533333rem;
	height: .533333rem;
	position: absolute;
	right: .3rem;
	top: .2rem;
}

.Appearance .Appearance_top .information .information_one .list {
	width: 6.8rem;
	height: 1.3rem;
	position: absolute;
	bottom: .165rem;
}

.Appearance .Appearance_top .information .information_one .list li {
	display: inline-block;
	width: 2.15rem;
	height: 1.3rem;
	background: #7d8597;
	color: #d8dae0;
	border-radius: 3px;
	position: relative;
	text-align: center;
}

.Appearance .Appearance_top .information .information_one .list li div {
	width: 2.15rem;
	height: 1rem;
	position: absolute;
	top: 50%;
	margin-top: -.5rem;
}

.Appearance .Appearance_top .information .information_one .list li div p {
	margin-bottom: .05rem;
}

.Appearance .Appearance_top .information .information_one .list li div .pais {
	font-size: .4rem;
	font-weight: bold;
}

.Appearance .Appearance_top .information .information_one .list li div .pai {
	font-size: .226667rem; // -webkit-transform: scale(0.9, 0.9);
	// -moz-transform: scale(0.9, 0.9);
	// -o-transform: scale(0.9, 0.9);
	// transform: scale(0.9, 0.9);
	text-align: center;
}

.Appearance .Appearance_top .information .information_one .list li div .p_one {
	font-size: .4rem;
	font-weight: bold;
	color: #fff; // width: 1.85rem;
	text-align: center;
}


.Appearance .Appearance_top .information .car_size {
	margin-top: .4rem;
	width: 10rem;
	height: 2.573333rem;
	position: relative;
}

.Appearance .Appearance_top .information .car_size .car_sizes {
	width: 4.2rem;
	height: 2.8rem;
	position: absolute;
	left: .22rem;
}

.Appearance .Appearance_top .information .car_size .car_sizes img {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
}

.Appearance .Appearance_top .information .car_size .car_sizes span {
	color: #565657;
	font-size: .213333rem; // .px2px(font-size, 10px); 
	// -webkit-transform: scale(0.94, 0.94);
	// -moz-transform: scale(0.94, 0.94);
	// -o-transform: scale(0.94, 0.94);
	// transform: scale(0.94, 0.94);
}

.Appearance .Appearance_top .information .car_size .car_sizes .car_Wheelbase {
	position: absolute;
	top: 0rem;
	width: .893333rem;
	text-align: center;
	left: 2.3rem;
}

.Appearance .Appearance_top .information .car_size .car_sizes .car_Wheelbases {
	position: absolute;
	top: 0rem;
	width: .893333rem;
	text-align: center;
	left: 2.3rem;
}

.Appearance .Appearance_top .information .car_size .car_sizes .car_height {
	position: absolute;
	width: .893333rem;
	text-align: center;
	top: 1rem;
	left: -.1rem;
}

.Appearance .Appearance_top .information .car_size .car_sizes .car_width {
	position: absolute;
	width: .893333rem;
	text-align: center;
	top: 1.9rem;
	left: .85rem;
}

.Appearance .Appearance_top .information .car_size .car_sizes .car_length {
	position: absolute;
	width: .893333rem;
	text-align: center;
	top: 1.9rem;
	left: 2.3rem;
}

.Appearance .Appearance_top .information .car_Photo {
	width: 3.6rem;
	height: 2.5rem;
	position: absolute;
	right: 0;
	bottom: 0;
}

.Appearance .Appearance_top .information .car_Photo img {
	width: 100%;
	height: 100%;
}

</style>
<script>
import Bus from "./Bus.js";
import { Toast, Radio } from 'mint-ui';
export default {
	name: "Sale",
	props: ["carlist", "imglist2", "tabData0"],
	data: function() {
		return {
			arr: [],
			carindex: '',
			carindexs: '',
			xian: true,
			xians: true,
		}
	},
	watch: {

	},
	mounted: function() {
		let that = this;
		let lefcar = JSON.parse(window.localStorage.getItem('Contrast'));
		let rightcar = JSON.parse(window.localStorage.getItem('Contrasts'));
		if (rightcar != null) {
			that.carlist.carContent.compareResult[0].styleName = rightcar.carContent.compareResult[0].styleName;
			that.carlist.carContent.compareResult[0].appearanceCompare[0].value = rightcar.carContent.compareResult[0].appearanceCompare[0].value;
			that.carlist.carContent.compareResult[0].appearanceCompare[0].name = rightcar.carContent.compareResult[0].appearanceCompare[0].name;
			that.carlist.carContent.compareResult[0].appearanceCompare[1].value = rightcar.carContent.compareResult[0].appearanceCompare[1].value;
			that.carlist.carContent.compareResult[0].appearanceCompare[1].name = rightcar.carContent.compareResult[0].appearanceCompare[1].name;
			that.carlist.carContent.compareResult[0].appearanceCompare[2].value = rightcar.carContent.compareResult[0].appearanceCompare[2].value;
			that.carlist.carContent.compareResult[0].appearanceCompare[2].name = rightcar.carContent.compareResult[0].appearanceCompare[2].name;

		}
		if (lefcar != null) {
			that.carlist.carContent.compareResult[1].styleName = lefcar.carContent.compareResult[1].styleName;
			that.carlist.carContent.compareResult[1].appearanceCompare[0].value = lefcar.carContent.compareResult[1].appearanceCompare[0].value;
			that.carlist.carContent.compareResult[1].appearanceCompare[0].name = lefcar.carContent.compareResult[1].appearanceCompare[0].name;

			that.carlist.carContent.compareResult[1].appearanceCompare[1].value = lefcar.carContent.compareResult[1].appearanceCompare[1].value;
			that.carlist.carContent.compareResult[1].appearanceCompare[1].name = lefcar.carContent.compareResult[1].appearanceCompare[1].name;

			that.carlist.carContent.compareResult[1].appearanceCompare[2].value = lefcar.carContent.compareResult[1].appearanceCompare[2].value;
			that.carlist.carContent.compareResult[1].appearanceCompare[2].name = lefcar.carContent.compareResult[1].appearanceCompare[2].name;

		}

	},

	created: function() {
		let that = this;
		if (that.carlist.carContent.bjCompareRes[1].level == 'suv') {
			that.carindex = '3';
			that.xian = false;
		} else if (that.carlist.carContent.bjCompareRes[1].level == '紧凑型车') {
			that.carindex = '1';
			that.xian = false;
		} else if (that.carlist.carContent.bjCompareRes[1].level == 'mpv') {
			that.carindex = '4';
			that.xian = false;
		} else if (that.carlist.carContent.bjCompareRes[1].level == '中大型车') {
			that.carindex = '4';
			that.xian = false;
		}

		if (that.carlist.carContent.bjCompareRes[0].level == '紧凑型车') {
			that.carindexs = '5';
			that.xians = false;
		} else if (that.carlist.carContent.bjCompareRes[0].level == '中大型车') {
			that.carindexs = '6';
			that.xians = false;
		} else if (that.carlist.carContent.bjCompareRes[0].level == 'suv') {
			that.carindexs = '7';
			that.xians = false;
		} else if (that.carlist.carContent.bjCompareRes[0].level == 'mpv') {
			that.carindexs = '8';
			that.xians = false;
		}

	},
	updated: function() {

	},
	methods: {
		// 返回按钮
		Jump: function() {
			var that = this;
			var shuju = JSON.stringify(window.localStorage.getItem('carli'));
			// console.log(shuju);
			if (shuju == 'null') {
				Bus.$emit("ms", '9你' + that.carlist.carContent.compareResult[0].carModuleName);
			} else {
				Bus.$emit("ms", '4');
			}
			window.localStorage.removeItem('xunhuan');
			window.localStorage.removeItem('Contrasts');
			window.localStorage.removeItem('Contrast');

		},
	},

}

</script>
