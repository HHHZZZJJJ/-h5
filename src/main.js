import Vue from 'vue'
import App from './App'
import router from './router'
// es6变为es5
import 'babel-polyfill';
import Axios from 'axios'
import _commmonWebConfig from './utils/config.js?v=10'
// 引入公共样式
import '../static/css/common.css'
// 引入mit-ui
import MintUI from 'mint-ui'
// mint-ui/lib/style.css 里面修改过.mint-msgbox
import 'mint-ui/lib/style.css'
// 引入真机测试js
// import vConsole from './vconsole/vconsole.js'
Vue.use(MintUI)
Vue.prototype.$http = Axios
Vue.prototype.commmonWebConfig = _commmonWebConfig
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
