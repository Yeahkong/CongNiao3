<template>
    <div class="app-container">
        <!-- 顶部 Header 区域 -->
        <!-- <mt-header fixed title="Mint-UI全局导入"></mt-header> -->
        <mt-header fixed title="Vue项目"></mt-header>

        <!-- 中间的路由 router-view 区域 -->


        <!-- 底部的 Tabbar 区域 -->
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
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