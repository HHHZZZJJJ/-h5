import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/Index'
import Home from '../components/Home'
// 测试经销商
// import Distributor from '../components/Distributor'
// 测试销售页面
// import Sale from '../components/Sale'
// 预约试驾
// import appointment from '../components/appointment'
// 对比页面
// import Contrast from '../components/Contrast'
// 外观对比
// import Appearance from '../components/Appearance'
// 内饰对比
// import Decoration from '../components/Decoration'
// 口碑对比
// import Tablet from '../components/Tablet'
// 用车百科
// import Vehicle from '../page/Vehicle'
// 讲段子
// import speak from '../page/speak'
// 拼图选车(需要咨询一下超哥问题)
// import puzzle from '../page/puzzle'
// 颜值选车
// import appearances from '../page/appearances'
// 我的车库
// import Garage from '../page/Garage'
// 拍照识车
// import Ce from '../page/ce'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/index',
			name: 'index',
			component: index
		},
		{
			path: '/Home',
			name: 'Home',
			component: Home,
		},
		// {
		// 	path: '/Ce',
		// 	name: 'Ce',
		// 	component: Ce,
		// },
		// 经销商找4s点
		// {
		// 	path: '/Distributor',
		// 	name: 'Distributor',
		// 	component: Distributor,
		// },
		// 找销售询问底价 销售列表
		// {
		// 	path: '/Sale',
		// 	name: 'Sale',
		// 	component: Sale,
		// },
		// 预约试驾
		// {
		// 	path: '/appointment',
		// 	name: 'appointment',
		// 	component: appointment,
		// },
		// 对比页面
		// {
		// 	path: '/Contrast',
		// 	name: 'Contrast',
		// 	component: Contrast,
		// },
		// 外观对比
		// {
		// 	path: '/Appearance',
		// 	name: 'Appearance',
		// 	component: Appearance,
		// },
		// 内饰对比
		// {
		// 	path: '/Decoration',
		// 	name: 'Decoration',
		// 	component: Decoration,
		// },
		// 口碑对比
		// {
		// 	path: '/Tablet',
		// 	name: 'Tablet',
		// 	component: Tablet
		// },
		// 用车百科
		// {
		// 	path: '/Vehicle',
		// 	name: 'Vehicle',
		// 	component: Vehicle
		// },
		// 讲段子
		// {
		// 	path: '/speak',
		// 	name: 'speak',
		// 	component: speak
		// },
		// 拼图选车
		// {
		// 	path: '/puzzle',
		// 	name: 'puzzle',
		// 	component: puzzle
		// },
		// 颜值选车
		// {
		// 	path: '/appearances',
		// 	name: 'appearances',
		// 	component: appearances
		// },
		// 测试拍照识车
		// {
		// 	path: '/pai',
		// 	name: 'pai',
		// 	component: pai
		// },
		// 我的车库
		// {
		// 	path: '/Garage',
		// 	name: 'Garage',
		// 	component: Garage
		// },
		{
			path: '/',
			redirect: '/index'
		}
	]
})
