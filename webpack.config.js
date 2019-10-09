
//由于 webpack 是基于 node 进行构建的，所以 webpack 的配置文件中，任何合法的node代码都是支持的
var path=require('path')

//在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入页面底部
//如果要配置插件，需要在导出的对象中，挂载一个 plugins节点
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    mode:"development",
    entry:path.join(__dirname,'./src/js/main.js'),//入口文件
    output:{
        path:path.join(__dirname,'./dist/'),//输出路径
        // publicPath: '/assets/',
        filename:'bundle.js'  //指定输出文件的名称
    },
    plugins:[//所有 webpack 插件的配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),//指定模板文件的路径
            filename:'index.html',//设置生成的内存页面的名称
            /*assetsSubDirectory: 'static',
            assetsPublicPath: './'*/
        }),
],
    resolve : {
        //创建 import 或 require 的别名，来确保模块引入变得更简单。
        alias : {
            node_modules    : __dirname + '/node_modules',
            service         : __dirname + '/src/service',
            images           : __dirname + '/static/images'
        }
    },

    module: { //配置第三方loader模块的
        rules: [//第三方模块的匹配规则
            { test : /\.css$/,use:['style-loader', 'css-loader'] },//处理 css 文件的 loader ，use 为数组
            { test : /\.less$/,use:['style-loader', 'css-loader','less-loader'] },//处理 less 文件的 loader ，use 为数组
            { test : /\.scss$/,use:['style-loader', 'css-loader','sass-loader'] },//处理 scss 文件的 loader ，use 为数组
            { test : /\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=9232633453440&name=[hash:8]-[name].[ext]' },//&为连接符
            { test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体文件的 url-loader
            //引入bootstrap样式的时候还会引入字体样式
            { test:/\.vue$/,use:'vue-loader'},//处理 .vue 文件的loader
        ]
    },
    performance: {
        hints: 'warning', // 枚举 false关闭
        maxEntrypointSize: 50000000, //入口文件的最大体积，单位字节
        maxAssetSize: 30000000, //生成文件的最大体积，单位字节
        assetFilter: function(assetFilename) { //只给出js文件的性能提示
            return assetFilename.endsWith('.js');
        },

    }

}
