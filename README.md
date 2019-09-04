<!-- 告诉项目的一些相关信息 -->
# 描述项目的详细信息
## 【主流开源协议之间有何异同？】(https://blog.csdn.net/xiaodaima2016/article/details/83645854)

## 用传统方式（命令行）把修改过后的代码上传到码云
1.git add .
2.git commit -m "提交信息"
3.git push


## 制作首页 App 组件
1.完成 Header 区域，使用的是 Mint-UI 中的 Header 组件
2.制作底部的 Tabbar 区域，使用的是 MUI 的Tabbat.html
+ 在制作购物车小图标的时候，操作会相对多一些
+ 先把 扩展图片的 css 样式，拷贝到项目中（lib/mui/css/）
+ 拷贝 扩展字体库 ttf 文件到项目中（lib/mui/fonts/）
+ 为购物车小图标添加如下 样式 'mui-icon mui-icon-extra mui-icon-extra-cart'

3.要在中间区域放置一个 <router-view> 来展示路由匹配到的组件

## 改造 tabbar 为 router-link


## 设置路由高亮


## 点击 tabbar 中的路由链接，展示对应的路由组件
