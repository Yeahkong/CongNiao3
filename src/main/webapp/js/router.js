
//导入vue-router包
import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import NewsList from "../components/news/NewsList.vue";


//创建路由对象
var router = new VueRouter({
    routes:[  //配置路由规则
        {path:'/',redirect:'/home'},
        { path: '/home',component: HomeContainer },
        { path: '/member',component: MemberContainer },
        { path: '/shopcar',component: ShopcarContainer },
        { path: '/search',component: SearchContainer },
        { path: '/home/newslist',component: NewsList },
    ],
    linkActiveClass:'mui-active'  //覆盖默认的路由高亮的类，原本默认的叫做
    // router-link-active 点击切换的时候才显示
})

//通过ES6语法暴露路由对象
export default router   
/*向外暴露router*/

