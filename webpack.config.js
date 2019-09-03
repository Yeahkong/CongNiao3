
//由于 webpack 是基于 node 进行构建的，所以 webpack 的配置文件中，任何合法的node代码都是支持的
var path=require('path')

//在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入页面底部
//如果要配置插件，需要在导出的对象中，挂载一个 plugins节点
var htmlWebpackPlugin = require('html-webpack-plugin')

//当以命令形式运行 webpack 或 webpack-dev-server 的时候，工具会发现，我们并没有提供要打包的文件的入口和出口文件，
//此时，它会检查项目根目录中的配置文件，并读取这个文件，就拿到了导出的这个配置对象，然后根据这个对象，进行打包构建
module.exports={
    entry:path.join(__dirname,'./src/main/webapp/js/main.js'),//入口文件
    output:{
        path:path.join(__dirname,' ./mui/bundle.js'),//输出路径
        filename:'bundle.js'  //指定输出文件的名称
    },
    plugins:[//所以webpack 插件的配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/main/webapp/index.html'),//指定模板文件的路径
            filename:'index.html'//设置生成的内存页面的名称
        })
    ],
    module: { //配置第三方loader模块的
        rules: [//第三方模块的匹配规则
            { test : /\.css$/,use:['style-loader', 'css-loader'] },//处理 css 文件的 loader ，use 为数组
            { test : /\.less$/,use:['style-loader', 'css-loader','less-loader'] },//处理 less 文件的 loader ，use 为数组
            { test : /\.scss$/,use:['style-loader', 'css-loader','sass-loader'] },//处理 scss 文件的 loader ，use 为数组
            { test : /\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=63344&name=[hash:8]-[name].[ext]' },//&为连接符
            //处理图片文件的 loader这里的 use 不是数组，因为只用一个loader，引入图片大小为 62518 byte
            //1.图片大小 > limit 值 ---> 名称为32位的 hash 值 --> 想要显示图片原本的名字 --> 在 limit 后面增加 name=[name].[ext]
            //2.图片大小 < limit 值 ---> 名称转为 base64 格式字符串，这时增加 name=[name].[ext]也没什么用，还是显示 base64 字符串
            //进行 limit 测试时，每次都要重启 terminal
            //如果引入了两个文件夹中同名的图片，若图片大小分别为：62518、 66708 字节
            //1.假设 ：limit 值为 60718, 如果不做处理，两张图片会显示一样，图片名也会一样，第二张图片会把第一张图片覆盖了
            //2.假设 ：limit 值为 62510，图片的大小都< limit 值，两张图片显示不一样 --->图片名为 base64 字符串
            //3.假设 ：limit 值为 63344, 一张图片大于 limit 值，一张图片小于 limit 值，两张图片不做其他处理都会显示出来
            //但是名称不一样，小于 limit 值的图片，名称是 base64 字符串，大于 limit 值的图片，名称是原本的图片名称
            //针对假设1的解决方法：改为name=[hash:8]-[name].[ext] ---> [hash:8] 表示一个八位数的 hash 值，后面连接的是图片名称
            { test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体文件的 url-loader
            //引入bootstrap样式的时候还会引入字体样式
            { test:/\.vue$/,use:'vue-loader'},//处理 .vue 文件的loader
        ]
    }

}