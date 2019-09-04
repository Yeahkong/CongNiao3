<template>
    <div class="app-container">
        <!-- 顶部 Header 区域 -->
        <!-- <mt-header fixed title="Mint-UI全局导入"></mt-header> -->
        <mt-header fixed title="Vue项目"></mt-header>

        <!-- 中间的路由 router-view 区域 -->
		<router-view></router-view>

        <!-- 底部的 Tabbar 区域 -->
		
		<!--原本下面第一个类中有 mui-active ->高亮功能，后在router.js中配置了就删了-->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
        <h1>123</h1>
        <!-- <h1>按需导入还要导入样式，.babelrc文件里面设置的根本就没用到，太气人了</h1> -->
        
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.app-container{
    padding-top:40px;
}

</style>