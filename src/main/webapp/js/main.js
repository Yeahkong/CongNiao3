// 入口文件
import Vue from 'vue'


//1.1 导入路由的包
import VueRouter from 'vue-router'
//1.2 安装路由
Vue.use(VueRouter)

//2.1导入 vue-resource
import VueResource from 'vue-resource'
//2.2安装 vue-resource
Vue.use(VueResource)

// 导入Mint-UI
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 导入MUI的样式
import '../../../lib/mui/css/mui.css'
import '../../../lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'     
//老师没有引入样式能显示，而我不引入就不显示样式，.babelrc文件设置了也没有用
Vue.component( Header.name, Header)
Vue.component( Swipe.name, Swipe)
Vue.component(   'mt-swipe-item', SwipeItem) //用SwipeItem.name会显示错误


// 1.3导入自己的 router.js 路由模块
import router from './router.js'

import app from '../../../../App.vue'
var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router  //1.4挂载路由对象到 vm 实例上

})




