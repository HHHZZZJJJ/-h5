<template>
	<div class="Decoration">
		<!-- 返回按钮 -->
		<div class="push_button">
			<div class="push_buttons">
				<img src="../../static/images/back@2x.png" class="returnimg" @click="Jump">
				<h3 class="titleCar">小艾懂车</h3>
			</div>
		</div>
		<div class="heidings">
			<!-- 上面图片 -->
			<div class="carimg_top">
				<img v-if="carlist.carContent.compareResult[0].insidepicture_url!==''" :src="carlist.carContent.compareResult[0].insidepicture_url">
				<div v-if="carlist.carContent.compareResult[0].insidepicture_url==''">
					<img src="../../static/images/neishikoudidadi.png">
					<h4>图片暂无,小艾会抓紧提供哒</h4>
				</div>
				<div class="tishi">
					<h2>{{carlist.carContent.compareResult[0].moduleName}}</h2>
				</div>
			</div>
			<!-- 下面图片 -->
			<div class="carimg_top">
				<img v-if="carlist.carContent.compareResult[1].insidepicture_url!==''" :src="carlist.carContent.compareResult[1].insidepicture_url">
				<div v-if="carlist.carContent.compareResult[1].insidepicture_url==''">
					<img src="../../static/images/neishikoudidadi.png">
					<h4>图片暂无,小艾会抓紧提供哒</h4>
				</div>
				<div class="tishi">
					<h2>{{carlist.carContent.compareResult[1].moduleName}}</h2>
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

.Decoration {
	width: 10rem;
	margin: 0 auto;
}

.Decoration .push_button {
	width: 100%;
	height: 1rem;
}

.Decoration .push_button .push_buttons {
	width: 10rem;
	height: .9rem;
	background: #fff;
	position: relative;
}

.Decoration .push_button .push_buttons .returnimg {
	width: .8rem;
	height: .8rem;
}

.Decoration .push_button .push_buttons img {
	width: .906667rem;
	height: .906667rem;
	position: absolute;
	top: .1rem;
}

.Decoration .push_button .push_buttons .titleCar {
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

.Decoration .heidings {
	width: 10rem;
	height: 100%;
}

.Decoration .carimg_top {
	width: 10rem;
	height: 7.5rem;
	position: relative;
}

.Decoration .carimg_top img {
	width: 10rem;
	height: 7.5rem;
}

.Decoration .carimg_top h4 {
	width: 10rem;
	height: 2rem;
	line-height: 2rem;
	text-align: center;
	position: absolute;
	bottom: .8rem;
	z-index: 100;
	color: #525252;
}

.Decoration .carimg_top .tishi {
	width: 6rem; // position: absolute;
}

.Decoration .carimg_top .tishi h2 {
	min-width: 2rem;
	padding-left: .18rem;
	padding-right: .16rem; // min-height: .8rem;
	line-height: .65rem;
	background: rgba(0, 0, 0, 0.30);
	color: #fff;
	border-radius: 5px;
	.px2px(font-size, 30px);
	position: absolute;
	z-index: 100;
	left: 1.5rem;
	top: .5rem;
	margin-right: 1.5rem;
	box-sizing: border-box;
}

</style>
<script>
import Bus from "./Bus.js";
import { Toast, Radio } from 'mint-ui';
export default {
	name: "Decoration",
	props: ["carlist", "imglist2", "tabData0"],
	data: function() {
		return {
			arr: [],

		}
	},
	watch: {

	},
	mounted: function() {
		let that = this;
		let lefcar = JSON.parse(window.localStorage.getItem('Contrast'));
		let rightcar = JSON.parse(window.localStorage.getItem('Contrasts'));
		if (rightcar != null) {
			that.carlist.carContent.compareResult[0].insidepicture_url = rightcar.carContent.compareResult[0].insidepicture_url;
			that.carlist.carContent.compareResult[0].moduleName = rightcar.carContent.compareResult[0].moduleName;
		}
		if (lefcar != null) {
			that.carlist.carContent.compareResult[1].insidepicture_url = lefcar.carContent.compareResult[1].insidepicture_url;
			that.carlist.carContent.compareResult[1].moduleName = lefcar.carContent.compareResult[1].moduleName;
		}

	},

	created: function() {

	},
	updated: function() {

	},
	methods: {
		// 返回按钮
		Jump: function() {
			var that = this;
			var shuju = JSON.stringify(window.localStorage.getItem('carli'));
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
