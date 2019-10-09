
//导入vue-router包
import VueRouter from 'vue-router'

// 导入对应的路由组件
import Register from "../components/Register.vue";
import Jiameng from "../components/Jiameng.vue";
import Images from "../components/Images.vue"
//创建路由对象
var router = new VueRouter({
    routes:[  //配置路由规则
        {path:'/',redirect:'/home'},
        {path:'/home/register',component:Register},
        {path:'/home/jiameng',component:Jiameng},
        {path:'/home/jiameng',component:Jiameng},
        {path:'/home/images',component:Images},
    ],
})

//通过ES6语法暴露路由对象
export default router   
/*向外暴露router*/

