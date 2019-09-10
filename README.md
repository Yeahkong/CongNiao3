<!-- 告诉项目的一些相关信息 -->
# 描述项目的详细信息

使用idea把代码上传到码云上，比 VScode 更简单方便
## 【主流开源协议之间有何异同？】(https://blog.csdn.net/xiaodaima2016/article/details/83645854)

## 用传统方式（命令行）把修改过后的代码上传到码云
(使用 VSCode 编写代码时)
1.git add .
2.git commit -m "提交信息"
3.git push


## 制作首页 App 组件
1.完成 Header 区域，使用的是 Mint-UI 中的 Header 组件
2.制作底部的 Tabbar 区域，使用的是 MUI 的Tabbat.html
  + 在制作购物车小图标的时候，操作会相对多一些
  + 先把 扩展图片的 css 样式，拷贝到项目中（lib/mui/css/icons-extra.css）
  + 拷贝 扩展字体库 ttf 文件到项目中（lib/mui/fonts/mui-icons-extra.ttf）
  + 为购物车小图标添加如下 样式 'mui-icon mui-icon-extra mui-icon-extra-cart'

3.要在中间区域放置一个 <router-view> 来展示路由匹配到的组件

## 改造 tabbar 为 router-link


## 设置路由高亮


## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1.获取数据，如何获取数据？ -> 使用vue-resource
2.使用 vue-resource 的 this.$http.get 获取数据
3.获取到的数据，要保存到 data 上
4.使用 v-for 循环渲染每个 item 项

## 改造 九宫格 区域的样式