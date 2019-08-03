<template>
	<div class="Contrast">
		<div class="Contrasts">
			<div class="Logos">
				<div class="log" v-for="(item, index) in arr" :key="index">
					<h2>{{item}}</h2>
					<div class="Logos_one">
						<img src="../../static/images/car_icon1.png" class="car_img">
						<span>奔驰</span>
						<img src="../../static/images/arrowNor.png" class="Arrow" @click="hideing(item, index)">
					</div>
					<div class="list" v-for="(item, index) in lists" :key="index" v-if="hides">
						<p class="items" @click="Selection(item)">{{item}}</p>
					</div>
				</div>
			</div>
			<!-- 城市拼音 -->
			<div class="Pinyin">
				<div class="Pinyins" v-for="(item, index) in arr" :key="index" @click="letters(item)">{{item}}</div>
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

.Contrast {
	width: 10rem;
	margin: 0 auto;
}

.Contrast .Contrasts {
	height: 18rem;
	width: 10rem;
	overflow: auto;
}

.Contrast .Contrasts .Logos {
	width: 10rem;
	min-height: 2.026667rem;
	box-sizing: border-box;
	padding: 0 .733333rem 0 .493333rem;
	background: #fff;
}

.Contrast .Contrasts .Logos .log {
	width: 100%;
	min-height: 2.026667rem;
	border-bottom: 1px solid #ebebeb;
}

.Contrast .Contrasts .Logos h2 {
	width: 100%;
	height: .4rem;
	line-height: .4rem;
	color: #333f56;
	.px2px(font-size, 30px);
	padding-left: .3rem;
	padding-top: .1rem;
	box-sizing: border-box;
}

.Contrast .Contrasts .Logos .Logos_one {
	width: 100%;
	height: .746667rem;
	margin-top: .3rem;
	position: relative;
}

.Contrast .Contrasts .Logos .Logos_one .car_img {
	width: 1rem;
	height: 1rem;
}

.Contrast .Contrasts .Logos .Logos_one .Arrow {
	position: absolute;
	right: 1.333333rem;
	width: .266667rem;
	height: .266667rem;
	top: .3rem;
}

.Contrast .Contrasts .Logos .Logos_one span {
	position: absolute;
	width: 5.866667rem;
	height: .426667rem;
	top: 50%;
	padding-left: .4rem;
	box-sizing: border-box;
	margin-top: -.25rem;
	.px2px(font-size, 32px);
}


.Contrast .Contrasts .Logos .Logos_two {
	position: absolute;
	right: 1rem;
	top: 1rem;
}

.Contrast .Contrasts .Pinyin {
	width: .4rem;
	position: fixed;
	right: .346667rem;
	top: 1.5rem;
}

.Contrast .Contrasts .Pinyin .Pinyins {
	display: block;
	width: .4rem;
	height: .45rem;
	line-height: .45rem;
	text-align: center;
	box-sizing: border-box;
	margin-top: .08rem; // border-radius: 50%;
	// background: #3c7df7;
	color: #999999;
}

.Contrast .Contrasts .Logos .log .list {
	width: 8.5rem;
	box-sizing: border-box;
	padding-left: 1.4rem;
	padding-top: .3rem;
}

.Contrast .Contrasts .Logos .log .list .items {
	width: 7.1rem;
	.px2px(font-size, 32px);
	min-height: 1.2rem;
	line-height: 1rem;
	box-sizing: border-box;
	border-bottom: 1px solid #ebebeb;
}

</style>
<script>
import Bus from "./Bus.js";

export default {
	name: "Contrast",
	props: ["carlist", "imglist2", "tabData0"],
	data: function() {
		return {
			arr: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'i', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
			lists: ['奔驰', '奔驰C级', '奔驰B级', '奔驰E级', '奔驰F级', '奔驰D级', '奔驰Z级'],
			hides: false,
			datas: '',
		}
	},
	mounted: function() {


	},

	created: function() {

	},
	updated: function() {

	},
	methods: {
		letters: function(data) {
			console.log(data);
		},
		hideing: function(item, index) {
			console.log(item);
			console.log(index);
			console.log(this.hides);

		},
		Selection: function(data) {

			console.log(data);
			// this.dataIdex = datas;


		}
	},

}

</script>
