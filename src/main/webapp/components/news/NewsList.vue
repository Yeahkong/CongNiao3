<template>
    <div>
<!--
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;" class="">
                    <img class="mui-media-object mui-pull-left" src="../../../../images/拥有.jpg">
                    <div class="mui-media-body">
                        <h1>拥有</h1>
                        &lt;!&ndash;<p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>&ndash;&gt;
                        <p class="mui-ellipsis">
                            <span>发表时间：2019-07-23 17：12:21</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../../../images/盼望.jpg">
                    <div class="mui-media-body">
                        <h1>盼望</h1>
                        &lt;!&ndash;<p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>&ndash;&gt;
                        <p class="mui-ellipsis">
                            <span>发表时间：2019-07-23 17：12:51</span>
                            <span>点击：3次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../../../images/坚持.jpg">
                    <div class="mui-media-body">
                        <h1>坚持</h1>
                        &lt;!&ndash;<p class="mui-ellipsis">坚持到黎明，到黄昏，我们的人生如此往复.</p>&ndash;&gt;
                        <p class="mui-ellipsis">
                            <span>发表时间：2019-07-23 17：13:21</span>
                            <span>点击：6次</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
-->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <a href="javascript:;" class="">
                    <img class="mui-media-object mui-pull-left" src="../../../../images/拥有.jpg">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间：{{item.add_time | dateFormat}}</span>
                            <span>点击：{{item.click}}次</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
 import {Toast} from 'mint-ui'
 export default {
     data(){
         return{
             newslist:[]//新闻列表
         }
     },
     created(){
       this.getNewsList();
     },
     methods:{
         getNewsList(){//获取新闻列表
             this.$http.get('api/getnewslist').then( result =>{
                 if(result.body.status === 0){
                 //如果没有失败，应该把数据保存到 data 上
                    this.newslist= result.message;
                 }else{
                     Toast('获取新闻列表失败')
                 }
             })
         }
     }
 }

</script>

<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{font-size: 14px;}
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;  /*缩进*/
                justify-content: space-between;  /*两端对齐*/
            }
        }
    }

</style>