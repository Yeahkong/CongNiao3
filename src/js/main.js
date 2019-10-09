// 入口文件
import Vue from 'vue'
import 'jquery/dist/jquery.min.js'
/*import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'*/
import '../css/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

//1.1 导入路由的包
import VueRouter from 'vue-router'
//1.2 安装路由
Vue.use(VueRouter)
import moment from 'moment'

import {Swiper} from 'swiper'

//定义全局过滤器
Vue.filter('dateFormat',function (dataStr,pattern = "YYYY-MM-DD HH:mm:ss") {
    return  moment(dataStr).format(pattern)
})

// require styles


Vue.use(VueAwesomeSwiper)
import 'vue-awesome-swiper/dist/vue-awesome-swiper.js'



//2.1导入 vue-resource
import VueResource from 'vue-resource'
//2.2安装 vue-resource
Vue.use(VueResource)
// 导入Mint-UI
import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入MUI的样式
import '../lib/mui/css/mui.css'

/*import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)*/
// 按需导入 Mint-UI 中的组件
import { Header, Swipe, SwipeItem ,Button} from 'mint-ui'
import 'mint-ui/lib/style.css'     
//老师没有引入样式能显示，而我不引入就不显示样式，.babelrc文件设置了也没有用
Vue.component( Header.name, Header)
Vue.component( Swipe.name, Swipe)
Vue.component(   SwipeItem.name, SwipeItem) //用以下也可以
// Vue.component(   'mt-swipe-item', SwipeItem)
Vue.component( Button.name, Button)


// 1.3导入自己的 router.js 路由模块
import router from './router.js'
import app from '../../App.vue'
var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router  //1.4挂载路由对象到 vm 实例上

})
