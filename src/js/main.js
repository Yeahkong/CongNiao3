// 入口文件

/*var Vue = require('vue')
var VueRouter = require('vue-router')
Vue.use(VueRouter)*/
//也可以用下面的方法
import Vue from 'vue'
//1.1 导入路由的包
import VueRouter from 'vue-router'
//1.2 安装路由
Vue.use(VueRouter)
/*import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import  'bootstrap/dist/css/bootstrap.min.css'*/



// 1.3导入自己的 router.js 路由模块
import router from './router.js'

//2.1导入 vue-resource
import VueResource from 'vue-resource'
//2.2安装 vue-resource
Vue.use(VueResource)
// 导入Mint-UI
import MintUI from 'mint-ui'
Vue.use(MintUI)


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入MUI的样式
import '../lib/mui/css/mui.css'
import '../lib/mui/js/mui.min.js'

// 按需导入 Mint-UI 中的组件
import { Swipe, SwipeItem } from 'mint-ui'
// import 'mint-ui/lib/style.css'
//老师没有引入样式能显示，而我不引入就不显示样式，.babelrc文件设置了也没有用
Vue.component( Swipe.name, Swipe)
Vue.component( SwipeItem.name, SwipeItem) //用以下也可以
import 'mint-ui/lib/style.css'

import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$video = Video

import app from '../../App.vue'
// import app from '../../CongNiao.vue'
// import app from '../../CongNiao1.vue'
var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router  //1.4挂载路由对象到 vm 实例上

})
/*function check() {
    var userAgentInfo=navigator.userAgent;
    var Agents =new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod");
    var flag=true;
    for(var v=0;v<Agents.length;v++) {
        if(userAgentInfo.indexOf(Agents[v])>0) {
            flag=false;
            break;
        }
    }
    return flag;
}*/
