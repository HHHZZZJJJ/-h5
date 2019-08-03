<template>
	<div style="width: 100px; height: 100px; background: pink;">
		<iframe id="geoPage" width=0 height=0 frameborder=0 scrolling="no" src="https://apis.map.qq.com/tools/geolocation?key=PNWBZ-UEX34-72IU6-X2APF-5EWDH-JLBVJ&referer=huangzejun">
		</iframe>
		<div>
			{{ditu}}
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

</style>
<script>
export default {
	name: "ce",
	props: ["carlist", "imglist2", "tabData0"],
	data: function() {
		return {
			ditu: '',
			ditus: '',
			la: '',
			ln: '',
		}
	},
	mounted: function() {

	},

	created: function() {
		let that = this;
		window.addEventListener('message', function(event) {
			console.log(event.data);
			that.ditu = event.data;
			
		}, false);

		this.inidizhi();
	},
	updated: function() {

	},
	methods: {
		inidizhi: function() {
			var that = this;
			var benla = 39.937908;
			var benln = 116.328385;
			var geocoder = new qq.maps.Geocoder();
			var address = '菏泽市巨野县政府';
			console.log(geocoder.getLocation(address));
			console.log(2);
			geocoder.setComplete(function(result) {      
				console.log(result); 
				console.log('获取成功');  
				console.log(result.detail.location.lat);
				console.log(result.detail.location.lng); 
				that.la =  result.detail.location.lat;
				that.ln = result.detail.location.lng;
				console.log(that.getDistance(benla, benln, result.detail.location.lat, result.detail.location.lng));

			});           
			geocoder.setError(function() {        
				console.log('获取失败');
			});
		},
		getRad: function(d) {
			var PI = Math.PI;
			return d * PI / 180.0;
		},
		getDistance: function(lat1, lng1, lat2, lng2) {
			let that = this;
			var f = that.getRad((lat1 + lat2) / 2);
			var g = that.getRad((lat1 - lat2) / 2);
			var l = that.getRad((lng1 - lng2) / 2);
			var sg = Math.sin(g);
			var sl = Math.sin(l);
			var sf = Math.sin(f);
			var s, c, w, r, d, h1, h2;
			var a = 6378137.0; //The Radius of eath in meter.   
			var fl = 1 / 298.257;
			sg = sg * sg;
			sl = sl * sl;
			sf = sf * sf;
			s = sg * (1 - sl) + (1 - sf) * sl;
			c = (1 - sg) * (1 - sl) + sf * sl;
			w = Math.atan(Math.sqrt(s / c));
			r = Math.sqrt(s * c) / w;
			d = 2 * w * a;
			h1 = (3 * r - 1) / 2 / c;
			h2 = (3 * r + 1) / 2 / s;
			s = d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
			s = s / 1000;
			s = s.toFixed(2); //指定小数点后的位数。   
			return s;
		}

	},

}

</script>
