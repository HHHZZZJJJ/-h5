<template>
	<div class="appointment">
		<!-- 返回按钮 -->
		<div class="push_button">
			<div class="push_buttons">
				<img src="../../static/images/back@2x.png" class="returnimg" @click="Jump">
				<h3 class="titleCar">小艾懂车</h3>
			</div>
		</div>
		<!-- 预约试驾-->
		<div class="Distributor_car">
			<P class="car_imges">
				<span class="imgs">
						<img :src="carlist.carContent.allCarInfoResult[0].picture_url">
					</span>
				<span class="car_name">{{carlist.carContent.allCarInfoResult[0].moduleName}}</span>
				<span class="car_address">{{carlist.carContent.allCarInfoResult[0].style_common_name}}</span>
			</P>
			<div class="Distributor">预约试驾</div>
		</div>
		<div v-if="fill_in" class="test_drive">
			<!-- 填写用户信息 -->
			<div class="user_infor">
				<p class="real">请填写真实消息</p>
			</div>
			<div class="user_one">
				<p>{{carlist.carContent.allCarInfoResult[0].moduleName}}</p>
			</div>
			<div class="user_tow">
				<input type="text" v-model="call_phone.call" maxlength="20" :placeholder="dateinit" @blur="blurs">
			</div>
			<div class="user_tow">
				<input type="text" :placeholder="dateinits" v-model="call_phone.phone" @blur="blurg">
			</div>
			<div class="confirm" v-if="confirm_one">
				<p>确认并选择经销商</p>
			</div>
			<div class="confirms" v-if="confirm_tow">
				<p @click="Send">确认并选择经销商</p>
			</div>
		</div>
		<div v-if="Choice">
			<!-- 填写用户信息 -->
			<div class="user_infor">
				<p class="real">请选择询价经销商</p>
				<p class="positions">
					<img src="../../static/images/address.png">
					<span>北京市</span>
				</p>
			</div>
			<div class="busin">
				<div class="Choices" v-for="(item, index) in carlists.carContent.dealerInfoResult.priceQueryCsForApps" :key="index">
					<p class="Choices_one">
						<label>
							<input type="radio" name="equally" class="xuan" :value="item.vendor_id" v-model="radios" />
						</label>
					</p>
					<div class="positions">
						<p class="Choices_two">{{item.vbi_FullName}}</p>
						<p class="Choices_Three">{{item.vci_SaleAddr}}</p>
						<a>
							<p class="Choices_Four" @click="phones(item.vci_SaleTel)">电话咨询</p>
						</a>
					</div>
				</div>
			</div>
			<div class="Submission">
				<p @click="submits">提交</p>
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

.appointment {
	width: 10rem;
	margin: 0 auto;
	background: url(../../static/images/img_background.png) no-repeat;
	background-size: cover;
}

.appointment .push_button {
	width: 100%;
	height: 1.5rem;
}

.appointment .push_button .push_buttons {
	width: 10rem;
	height: .9rem;
	background: #fff;
	position: relative;
}

.appointment .push_button .push_buttons .returnimg {
	width: .8rem;
	height: .8rem;
}

.appointment .push_button .push_buttons img {
	width: .906667rem;
	height: .906667rem;
	position: absolute;
	top: .1rem;
}

.appointment .push_button .push_buttons .titleCar {
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

.appointment .test_drive {
	height: 8rem;
	width: 10rem;
	overflow: auto;
}

.appointment .Distributor_car {
	width: 10rem;
	height: 2.5rem;
	padding-left: .493333rem;
	box-sizing: border-box;
}

.appointment .Distributor_car .car_imges {
	width: 100%;
	height: 1.45rem;
	position: relative;
}

.appointment .Distributor_car .car_imges .imgs img {
	width: 2.3rem;
	height: 1.45rem;
	position: absolute;
	left: 0;
	top: 0;
}

.appointment .Distributor_car .car_imges .car_name {
	position: absolute;
	min-width: 6.666667rem;
	height: .5rem;
	top: .2rem;
	left: 2.45rem;
	box-sizing: border-box;
	.px2px(font-size, 35px);
	color: #4e4e4e;
	font-family: PingFangSC-Medium;
}

.appointment .Distributor_car .car_imges .car_address {
	position: absolute;
	top: .85rem;
	width: 6.666667rem;
	left: 2.45rem;
	min-height: .333333rem;
	.px2px(font-size, 20px);
	color: #4e4e4e;
}

.appointment .Distributor_car .Distributor {
	width: 100%;
	height: 1rem;
	line-height: 1rem;
	.px2px(font-size, 33px); // font-weight: bold;
	color: #444444;
	font-family: PingFangSC-Medium;
}

.appointment .user_infor {
	width: 10rem;
	height: .666667rem;
	padding-left: .533333rem;
	padding-right: .533333rem;
	box-sizing: border-box;
	position: relative;
}

.appointment .user_infor .real {
	height: .666667rem;
	width: 8.986667rem;
	background: #dde2e9;
	line-height: .666667rem;
	padding-left: .2rem;
	box-sizing: border-box;
	color: #999999;
	.px2px(font-size, 22px);
}

.appointment .user_one {
	width: 10rem;
	height: 1.133333rem;
	box-sizing: border-box;
	padding-left: .533333rem;
	padding-right: .533333rem;
}

.appointment .user_one p {
	height: 1.133333rem;
	width: 8.986667rem;
	line-height: 1.133333rem;
	padding-left: .2rem;
	box-sizing: border-box;
	border-bottom: 1px solid #dadede;
	.px2px(font-size, 32px);
	color: #444444;
}

.appointment .user_tow {
	width: 10rem;
	height: 1rem;
	line-height: 1rem;
	box-sizing: border-box;
	padding-left: .533333rem;
	padding-right: .533333rem;
}

.appointment .user_tow input {
	background: none; // outline: none;
	border: 0px;
	height: .8rem;
	width: 8.986667rem;
	line-height: .8rem;
	padding-left: .2rem; // box-sizing: border-box;
	.px2px(font-size, 27px);
	color: #444444;
	border-bottom: 1px solid #dadede;
}

.appointment .confirm {
	width: 10rem;
	height: .853333rem;
	position: relative;
	margin-top: 1.5rem;
}

.appointment .confirm p {
	width: 4rem;
	height: .853333rem;
	line-height: .853333rem;
	text-align: center;
	position: absolute;
	left: 50%;
	margin-left: -2rem;
	background: #adb5c0;
	border-radius: 5px;
	color: #fff;
	.px2px(font-size, 30px);
}

.appointment .confirms {
	width: 10rem;
	height: .853333rem;
	position: relative;
	margin-top: 1.5rem;
}

.appointment .confirms p {
	width: 4rem;
	height: .853333rem;
	line-height: .853333rem;
	text-align: center;
	position: absolute;
	left: 50%;
	margin-left: -2rem;
	background: #3c7df7;
	border-radius: 5px;
	color: #fff;
	.px2px(font-size, 30px);
} // 地理位置
.appointment .user_infor .positions {
	width: 2rem;
	height: .7rem;
	position: absolute;
	right: .5rem;
	top: 0;
}

.appointment .user_infor .positions img {
	width: .293333rem;
	height: .293333rem;
	position: absolute;
	top: 50%;
	margin-top: -.146rem;
}

.appointment .user_infor .positions span {
	.px2px(font-size, 24px);
	color: #abacae;
	height: .7rem;
	position: absolute;
	left: .4rem;
	line-height: .7rem;
	width: 80%;
}

.appointment .Choices {
	width: 10rem;
	min-height: 2.24rem;
	box-sizing: border-box;
	padding: .533333rem .533333rem 0 .506667rem;
	position: relative;
}

.appointment .Choices .positions {
	position: absolute;
	top: .42rem;
	left: 1.35rem;
}

.appointment .Choices .positions p {
	margin-bottom: .1rem;
}

.appointment .Choices .Choices_one {
	width: .533333rem;
	min-height: 2.24rem;
	position: relative;
}




.appointment .Choices .Choices_one label input[type="radio"] {
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	outline: none;
	margin: 0;
	vertical-align: text-bottom;
	background: none;
	border: none;
}

.appointment .Choices .Choices_one label input[type="radio"]:after {
	display: block;
	content: "";
	width: .6rem;
	height: .6rem;
	background-image: url('../../static/images/circleNor.png');
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	left: -.2rem;
	top: .6rem;
}

.appointment .Choices .Choices_one label input[type="radio"]:checked:after {
	width: .6rem;
	height: .6rem;
	background-image: url('../../static/images/circlePress.png');
	background-repeat: no-repeat;
	background-size: cover;
} // .appointment .Choices .Choices_one .xuan { // position: absolute; // width: .44rem; // height: .44rem; // top: 50%; // margin-top: -.22rem; // left: 50%; // margin-left: -.22rem; // }
.appointment .Choices .Choices_two {
	width: 8.466667rem;
	height: .586667rem;
	.px2px(font-size,
	30px);
	color: #1d1d1d;
}

.appointment .Choices .Choices_Three {
	width: 8.466667rem;
	min-height: .466667rem;
	.px2px(font-size,
	22px);
	color: #1d1d1d;
}

.appointment .Choices .Choices_Four {
	width: 1.7rem;
	height: .6rem;
	border: 1px solid #3c7df7;
	line-height: .6rem;
	text-align: center;
	border-radius: 5px;
	color: #568ef7; // position: absolute;
	// left: 1.35rem;
	// top: 1.8rem;
	.px2px(font-size,
	26px);
}

.appointment .busin {
	height: 6.5rem;
	width: 10rem;
	overflow: auto;
}

.appointment .Submission {
	width: 10rem;
	height: .866667rem;
	margin-top: .48rem;
	position: relative;
}

.appointment .Submission p {
	width: 1.733333rem;
	height: .866667rem;
	background: #3c7df7;
	border-radius: .066667rem;
	position: absolute;
	left: 50%;
	margin-left: -.86rem;
	line-height: .866667rem;
	text-align: center;
	.px2px(font-size,
	30px);
	color: #fff;
}

</style>
<script>
import Bus from "./Bus.js";
import { Toast, Radio, MessageBox } from 'mint-ui';
export default {
	name: "Sale",
	props: ["carlist", "carlists", "tabData0"],
	data: function() {
		return {
			call_phone: {
				call: '',
				phone: ''
			},
			confirm_one: true,
			confirm_tow: false,
			fill_in: true,
			Choice: false,
			radios: '',
			car_data: '',
			carlist_arr: '',
			user_number: '',
			user_name: '',
			dateinit: '请填写你的称呼',
			dateinits: '请填写你的手机号',

		}
	},
	watch: {
		call_phone: {　　　　
			handler(newValue, oldValue) {
				var reguser = /^[\u4E00-\u9FA5A-Za-z]{1,20}$/;
				var regusers = reguser.test(newValue.call);
				var reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
				var regs = reg.test(newValue.phone);
				if (regusers && regs) {
					this.confirm_tow = true;
					this.confirm_one = false;
				} else {
					this.confirm_one = true;
					this.confirm_tow = false;
				}　　
			},
			　　　　deep: true　　
		}
	},
	mounted: function() {
		let that = this;
		// 取出记录的数据
		let userName = window.localStorage.getItem('user_call');
		let userNumer = window.localStorage.getItem('user_phone');
		if (userName && userNumer) {
			that.call_phone.call = userName;
			that.call_phone.phone = userNumer;
			that.confirm_tow = true;
			that.confirm_one = false;
		}

	},

	created: function() {

	},
	updated: function() {

	},
	methods: {
		blurs: function() {

		},
		blurg: function() {

		},
		// 返回按钮
		Jump: function() {
			var that = this;
			Bus.$emit("ms", '4');
		},
		// 确认提交
		Send: function() {
			var reguser = /^[\u4E00-\u9FA5A-Za-z]{1,20}$/;
			var regusers = reguser.test(this.call_phone.call);
			var reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
			var regs = reg.test(this.call_phone.phone);
			if (regusers && regs) {
				this.Choice = true;
				this.fill_in = false;
				// 此时此刻记录用户的信息
				window.localStorage.setItem('user_call', this.call_phone.call);
				window.localStorage.setItem('user_phone', this.call_phone.phone);
			} else if (!regusers) {
				Toast('请输入规范的名称');
			} else if (!regs) {
				MessageBox({
					title: '提示',
					message: '请输入规范手机号',
					showCancelButton: true
				});
			} else if (!regusers && !regs) {
				Toast('请输入正确的手机号');
			}

		},
		initWebSocket: function() {
			this.websock = new WebSocket(this.commmonWebConfig.wsuri);
			this.websock.onopen = this.websocketopen;
			this.websock.onmessage = this.websocketonmessage;
			this.websock.onclose = this.websocketclose;
			this.websock.onerror = this.websocketerror;
		},
		sendData: function() {
			//发送数据
			let that = this;
			let obj = {
				logId: "123",
				caller: {
					appId: "10039",
					token: "cookie"
				},
				user: {
					uuid: "9986645662345678",
					content: this.car_data,
					channel: "3"
				},
				parameters: {
					cityId: "201",
					sence: "0",
					version: "2.2.5",
					device: "iphone 6s",
					system: "ios",
					isRooted: "no",
					senceDataType: "0",
					abstractParam: "",
					inputMode: "1001",
					tagClassification: "100",
					pattern: "110"
				}
			};
			// console.log(obj);
			let objStringify = JSON.stringify(obj);
			// console.log(objStringify);
			if (that.websock.readyState === that.websock.OPEN) {
				that.websocketsend(objStringify);
			}
			// 若是 正在开启状态，则等待300毫秒
			else if (that.websock.readyState === that.websock.CONNECTING) {
				let that = this; //保存当前对象this
				setTimeout(function() {
					that.websocketsend(objStringify);
				}, 300);
			} else {
				let that = this; //保存当前对象this
				that.initWebSocket();
				setTimeout(function() {
					that.websocketsend(objStringify);
				}, 500);
			}

			// console.log(this.b);
		},
		websocketopen: function() {
			// console.log(this.websock.readyState);
			this.readyState = this.websock.readyState;
		},
		websocketonmessage: function(e) {

			//数据接收
			let objStringify = JSON.parse(e.data);
			this.type = objStringify.data.type;
		},
		websocketsend: function(agentData) {
			//数据发送
			this.websock.send(agentData);
		},
		websocketclose: function() {
			// console.log(this.websock.readyState);
		},
		websocketerror: function() {
			//失败
		},
		submits: function() {
			var that = this;
			// var strurl = 'http://192.168.55.97:8888/bot-ui/circleController/sendUserClue';
			var strurl = 'https://ai.yiche.com/yc-bot/circleController/sendUserClue';
			// 取出车型id
			var carid = JSON.parse(window.localStorage.getItem('carli'));
			if (that.radios) {

				that.$http.post(strurl, {
						logId: "123",
						caller: {
							appId: "10038",
							token: "cookie"
						},
						req: {
							uuid: "9986645662345678",
							cityId: "0",
							channel: "3",
							action: "1",
							userName: that.call_phone.call,
							mobile: that.call_phone.phone,
							styleId: that.carlist.carContent.allCarInfoResult[0].styleInfos[0].style_id,
							csId: that.radios,
							businessOpportunitySourceID: "H5",
							orderType: "2",
							// 车型id
							modelId: carid.carContent.allCarInfoResult[0].moduleId,
						}
					})
					.then(function(response) {
						// console.log(response);
						if (response.request.status == 200) {
							Bus.$emit("tanceng", '提交成功');
						}
					})
					.catch(function(error) {

					});
			} else {
				Toast('请你选择一家经销商');
			}
		},
		phones: function(number) {
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
			// 	});

			// } else if (userAgent.indexOf("Chrome") > -1) {
			// 	Toast({
			// 		message: '请用手机拨打:' + number,
			// 		duration: 10000
			// 	});
			// } else if(userAgent.indexOf("Android") > -1) {
			//            window.location.href = 'tel://' + number;
			// } else {
			// 	window.location.href = 'tel://' + number;
			// }


		}
	},

}

</script>
