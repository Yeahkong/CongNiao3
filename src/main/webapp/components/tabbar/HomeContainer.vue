<!--  -->
<template>
  <div>
    <!--轮播图区域-->
    <mt-swipe :auto="4000">
      <!--在组件中，使用v-for循环的话，一定要使用 key-->
      <!--<mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt="">
      </mt-swipe-item>  -->
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
      <mt-swipe-item>4</mt-swipe-item>
      <mt-swipe-item>5</mt-swipe-item>
    </mt-swipe>

    <!--九宫格改造成六宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9 ">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
        <img src="../../../../images/menu1.jpg"alt="">
        <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../../../images/menu7.png"alt="">
        <div class="mui-media-body">图片分享</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../../../images/menu3.png"alt="">
        <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../../../images/menu8.jpg"alt="">
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../../../images/menu5.png"alt="">
        <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../../../images/menu6.jpg"alt="">
        <div class="mui-media-body">联系我们</div></a></li>
    </ul>

<!--    <h3> 这是 Home 组件 </h3>-->
  </div>
</template>

<script>/*写业务逻辑的*/
import { Toast } from 'mint-ui'


  export default {
    data(){
      return{
          lunbotuList:[//保存轮播图的数组

          ]
      };
    },
    created(){
      this.getLunbotu();
    },
    methods:{
      getLunbotu(){ //获取轮播图数据的方法
        // this.$http.get('api/getlunbo').then(result => {
        this.$http.get('http://jsonplaceholder.typicode.com/todos').then(result => {
          console.log(result.body);

         /* if(result.body.status === 0){
          //  成功了
            this.lunbotuList = result.body.message;
            Toast('加载轮播图成功。。。')
          }else{
          //  失败了
            Toast('加载轮播图失败。。。')
          }*/
        });
      }
    }
  }

</script>

<style lang="scss" scoped>/*scss里面样式可以嵌套*/
  .mint-swipe{                     /*不设置的话轮播图显示不了，高度为0*/
    height: 200px;
  /* 为轮播图设置样式，方法1*/
/*    .mint-swipe-item:nth-child(1){ !*轮播图的类名都一样，.mint-swipe-item:nth-child(1)-> 交集选择器，不是后代选择器*!
      background-color: #8a6de9;
    }
    .mint-swipe-item:nth-child(2){
      background-color: gold;
    }
    .mint-swipe-item:nth-child(3){
      background-color: deepskyblue;
    }*/
    /*方法2*/
    .mint-swipe-item{
      &:nth-child(1){ /*不写&符号表示后代选择器，写了表示交集选择器*/
        background-color: #8a6de9;
      }
      &:nth-child(2){ /*不写&符号表示后代选择器，写了表示交集选择器*/
        background-color: skyblue;
      }
      &:nth-child(3){ /*不写&符号表示后代选择器，写了表示交集选择器*/
        background-color: hotpink;
      }
      &:nth-child(4){ /*不写&符号表示后代选择器，写了表示交集选择器*/
        background-color: gold;
      }
      &:nth-child(5){ /*不写&符号表示后代选择器，写了表示交集选择器*/
        background-color: red;
      }
    }
  }
/* .ul{   !*在上面ul列表的class里面的mui-grid-9后面加一个ul*!
   background-color: #fff;
 }*/
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: 0;
  img{
    width: 60px;
    height: 60px;
  }
  .mui-media-body{
    font-size: 13px;
  }
}

</style>

