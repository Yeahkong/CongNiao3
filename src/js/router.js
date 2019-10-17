
//导入vue-router包
import VueRouter from 'vue-router'

// 导入对应的路由组件
import Images from "../components/Images.vue"
import Videos from "../components/Videos.vue"
/*import Images from "../components/Image1.vue"
import Videos from "../components/Video1.vue"*/
//创建路由对象
var router = new VueRouter({
    routes:[  //配置路由规则
        {path:'/',redirect:'/home/images'},
        {path:'/home/images',component:Images},
        {path:'/home/video',component:Videos},
    ],
})

//通过ES6语法暴露路由对象
export default router   
/*向外暴露router*/

