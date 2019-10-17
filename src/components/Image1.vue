<template>
    <div id="slider">
        <mt-swipe :auto="4000" ><!--轮播时间间隔，记得设置轮播图高度，不然不显示-->
            <mt-swipe-item><img src="../../static/images/lunbo1.png"></mt-swipe-item>
            <mt-swipe-item><img src="../../static/images/lunbo2.png"></mt-swipe-item>
            <mt-swipe-item><img src="../../static/images/lunbo3.png"></mt-swipe-item>
            <mt-swipe-item><img src="../../static/images/lunbo4.png"></mt-swipe-item>
        </mt-swipe>

    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
    }
</script>
<style lang="scss" scoped>
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
    .mint-swipe { /*不设置的话轮播图显示不了，高度为0*/
        height: 200px;
        width: 100%;
        img{
            height: 200px;
            width: 100%;

        }

    }
</style>