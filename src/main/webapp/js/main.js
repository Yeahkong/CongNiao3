// 入口文件
import Vue from 'vue'
// 导入Mint-UI
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 导入MUI的样式
import '../../../lib/mui/css/mui.css'

// 按需导入 Mint-UI 中的组件
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'     
//老师没有引入样式能显示，而我不引入就不显示样式，.babelrc文件设置了也没有用
Vue.component( Header.name, Header)



import app from '../../../../App.vue'
var vm = new Vue({
    el:'#app',
    render: c => c(app)
})




