<template>
    <div class="top-container">
       <!-- <div id="header">
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    &lt;!&ndash; Brand and toggle get grouped for better mobile display &ndash;&gt;
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>

                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <img class="logo-img" alt="Brand" src="/static/images/logo1.png">
                    </div>
                    &lt;!&ndash; Collect the nav links, forms, and other content for toggling &ndash;&gt;
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="active"><a href="#header">首页 <span class="sr-only">(current)</span></a><p class="line-top hidden-xs"></p></li>
                            <li><a href="#about_us">产品优势</a></li>
                            <li><a href="#contact">设计理念</a></li>
                            <li><a href="#cooperation">联系我们</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>-->
        <!-- 整站通用的头部及导航条 -->

        <!-- 全屏轮播图 -->
        <!--<div id="carousel-example-generic" class="carousel slide my-slide" data-ride="carousel">
            &lt;!&ndash; Indicators &ndash;&gt;
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class=""></li>
                <li data-target="#carousel-example-generic" data-slide-to="1" class="active"></li>
            </ol>
            &lt;!&ndash; Wrapper for slides &ndash;&gt;
            <div class="carousel-inner" role="listbox">
                <div class="item">
                    <a target="_blank" href="#">
                        <img src="images/banner1.jpg" alt="美国签证代办" style="width:100%;">
                    </a>
                </div>
                <div class="item active">
                    <a target="_blank" href="#">
                        <img src="images/banner2.jpg" alt="美国签证加急预约" style="width:100%;">
                    </a>
                </div>
            </div>
        </div>-->



        <div class="mui-content">
            <ul class="mui-table-view mui-table-view-chevron">
                <li id="switch" class="mui-table-view-cell">
                    定时轮播
                    <div class="mui-switch">
                        <div class="mui-switch-handle"></div>
                    </div>
                </li>
            </ul>
        </div>
        <div id="slider" class="mui-slider" >
            <div class="mui-slider-group mui-slider-loop">
                <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href="#">
                        <img src="./static/images/first.png">
                    </a>
                </div>
                <!-- 第一张 -->
                <div class="mui-slider-item mui-active">
                    <a href="#">
                        <img src="./static/images/lunbo2.png">
                    </a>
                </div>
                <!-- 第二张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="./static/images/first.png">
                    </a>
                </div>
                <!-- 第三张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="./static/images/lunbo2.png">
                    </a>
                </div>
                <!-- 第四张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="./static/images/first.png">
                    </a>
                </div>
                <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href="#">
                        <img src="./static/images/lunbo2.png">
                    </a>
                </div>
            </div>
            <div class="mui-slider-indicator">
                <div class="mui-indicator mui-active"></div>
                <div class="mui-indicator"></div>
                <div class="mui-indicator"></div>
                <div class="mui-indicator"></div>
            </div>
        </div>
        <!-- 全屏轮播图 -->
        <!-- 我们的优势 -->
        <div class="index-row our-service" style="padding-bottom:50px;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 main-title">
                        <h2 class="h1">我们的优势</h2>

                        <p class="line line-big"></p>

                        <h2>
                            <small>汇聚全国TOP贷款机构，各机构贷款利率、服务一站式对比</small>
                        </h2>
                    </div>
                    <div class="col-sm-4" style="padding:25px;">
                        <div class="our-whyus-item">
                            <img src="images/earth.png" alt="" style="margin-top:76px;">
                            <div class="conent_topul_text">
                                <span>贷款</span>
                                <i>速度快</i>
                            </div>
                            <p class="conent_topul_p"><i>1</i>分钟申请<i> 10</i>分钟审批 最快<i>2</i>小时到账</p>
                        </div>
                    </div>
                    <div class="col-sm-4" style="padding:25px;">
                        <div class="our-whyus-item">
                            <img src="images/lines.png" alt="" style="margin-top:76px;">
                            <div class="conent_topul_text">
                                <span>额度</span>
                                <i>范围广</i>
                            </div>
                            <p class="conent_topul_p"><i>1000-20万，</i>超低利率任意申请</p>
                        </div>
                    </div>
                    <div class="col-sm-4" style="padding:25px;">
                        <div class="our-whyus-item">
                            <img src="images/rockets.png" alt="" style="margin-top:76px;">
                            <div class="conent_topul_text">
                                <span>贷款</span>
                                <i>机构多</i>
                            </div>
                            <p class="conent_topul_p"><i>量身推荐</i>祝您成功贷到款</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 我们的优势 -->
        <!-- 关于我们 -->
        <div id="about_us" class="index-row our-client" style="overflow:hidden;padding-bottom:0;">
            <div>
                <div class="row">
                    <div class="col-sm-12 main-title">
                        <h2 class="h1">关于我们</h2>

                        <p class="line line-big"></p>

                        <h2>
                            <small>我们是专业贷款机构</small>
                        </h2>
                    </div>
                    <div class="col-sm-12 text-center card-box" style="padding-bottom:0;">
                        <div class="about_box">
                            <img src="images/about-me-bg.png" alt="" width="100%">
                            <div class="about_text">
                                <p class="about_text_c">常州晨夏信息科技有限公司，成立于2017年，总部位于广州。是一家专注为年轻人提供智能消费金融服务的互联网金融公司。依托庞大的征信数据集、先进的数据挖掘技术和智能搜索技术，帮助借款用户通过手机轻松实现贷款需求。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 关于我们 -->

        <!-- 联系我们 -->
        <div id="contact" class="index-row our-news" style="padding-bottom: 50px;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 main-title">
                        <h2 class="h1">联系我们</h2>

                        <p class="line line-big"></p>

                        <h2>
                            <small>金融互联网信息公司</small>
                        </h2>
                    </div>
                    <div class="col-sm-6">
                        <div class="media our-news-item">
                            <div class="media-left">
                                <img class="media-object" src="images/company.png" alt="">
                            </div>
                            <div class="media-body">
                                <p>常州晨夏信息科技有限公司</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="media our-news-item">
                            <div class="media-left">
                                <img class="media-object" src="images/contact.png" alt="">
                            </div>
                            <div class="media-body">
                                <p>陈经理</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="media our-news-item">
                            <div class="media-left">
                                <img class="media-object" src="images/address.png" alt="">
                            </div>
                            <div class="media-body">
                                <p>广东省佛山市禅城区季华四路16号首层</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="media our-news-item">
                            <div class="media-left">
                                <img class="media-object" src="images/cooperation.png" alt="">
                            </div>
                            <div class="media-body">
                                <p>商务合作：15348019330</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="media our-news-item">
                            <div class="media-left">
                                <img class="media-object" src="images/cooperation.png" alt="">
                            </div>
                            <div class="media-body">
                                <p>合作微信：ksyh666</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 联系我们 -->
        <!-- 我们的客户 -->
        <div id="cooperation" class="index-row our-client" style="padding-bottom: 50px;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 main-title">
                        <h2 class="h1">我们的客户</h2>

                        <p class="line line-big"></p>

                        <h2>
                            <small>他们与佰宝袋建立了合作关系</small>
                        </h2>
                    </div>
                    <div class="col-xs-4 col-sm-3 col-md-2 our-client-item">
                        <div class="our-client-logo">
                            <img class="img-responsive center-block" src="images/client1.png" alt="中国重汽">
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-3 col-md-2 our-client-item">
                        <div class="our-client-logo">
                            <img class="img-responsive center-block" src="images/client2.png" alt="中国中冶">
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-3 col-md-2 our-client-item">
                        <div class="our-client-logo">
                            <img class="img-responsive center-block" src="images/client3.png" alt="宝钢集团">
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-3 col-md-2 our-client-item">
                        <div class="our-client-logo">
                            <img class="img-responsive center-block" src="images/client4.png" alt="中国水电">
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-3 col-md-2 our-client-item">
                        <div class="our-client-logo">
                            <img class="img-responsive center-block" src="images/client5.png" alt="河北建工">
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-3 col-md-2 our-client-item">
                        <div class="our-client-logo">
                            <img class="img-responsive center-block" src="images/client6.png" alt="格力集团">
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-3 col-md-2 our-client-item">
                        <div class="our-client-logo">
                            <img class="img-responsive center-block" src="images/client7.png" alt="山东山推">
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-3 col-md-2 our-client-item">
                        <div class="our-client-logo">
                            <img class="img-responsive center-block" src="images/client8.png" alt="福田汽车">
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-3 col-md-2 our-client-item">
                        <div class="our-client-logo">
                            <img class="img-responsive center-block" src="images/client9.png" alt="联想集团">
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-3 col-md-2 our-client-item">
                        <div class="our-client-logo">
                            <img class="img-responsive center-block" src="images/client10.png" alt="冀中能源">
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-3 col-md-2 our-client-item">
                        <div class="our-client-logo">
                            <img class="img-responsive center-block" src="images/client11.png" alt="腾讯集团">
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-3 col-md-2 our-client-item">
                        <div class="our-client-logo">
                            <img class="img-responsive center-block" src="images/client12.png" alt="中国石油">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 我们的客户 -->


        <!--返回顶部-->
        <div id="share">
            <a id="totop" title="返回顶部">返回顶部</a>
            <!--<a href="http://www.17sucai.com/" target="_blank" class="sina">关注站长素材新浪微博</a>
            <a href="http://www.17sucai.com/" target="_blank" class="tencent">关注站长素材腾讯微博</a>-->
        </div>
        <!--返回顶部-->
        <div id="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <p><a>copyright@2016-2017 佰宝袋 All Right Reserved.</a></p>

                        <div style="width:300px;margin:0 auto; padding:20px 0; text-align: center;">
                            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010102002687" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                                <img src="images/ghs.png" style="float:left;">
                                <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#fafafa;">京公网安备 11010102002687号</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import $ from 'jquery'
    // import 'jquery/dist/jquery.min.js'

    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c2abc577b5979ed4b139ee5bf12a5946";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
    $(function () {
        /**通用-banner大图自定义缩放**/
        var zoomWidth = 992; //缩放阀值992px, 即所有小于992px的视口都会对原图进行缩放, 只是缩放比例不同
        var maxWidth = 1920; //最大宽度1920px
        var ratio = 1; //缩放比例
        var viewWidth = window.innerWidth; // 视口宽度
        var zoomSlider = function () {
            if (viewWidth < 768) { //当视口小于768时(移动端), 按992比例缩放
                ratio = viewWidth / zoomWidth; //视口宽度除以阀值, 计算缩放比例
            } else if (viewWidth < zoomWidth) { //当视口界于768与992之间时, bootstrap主宽度为750, 这区间图片缩放比例固定.
                ratio = zoomWidth / (zoomWidth + (zoomWidth - 750));
            } else { // PC端不缩放
                ratio = 1;
            }
            //ratio = viewWidth / zoomWidth; //视口宽度除以阀值, 计算缩放比例
            //ratio = (ratio<=1) ? ratio : 1; //如果比例值大于1, 说明视口宽度高于阀值, 则不进行任何缩放
            var width = maxWidth * ratio; //缩放宽度
            $(".my-slide img").each(function () {
                $(this).css({
                    "width": width,
                    "max-width": width,
                    "margin-left": -(width - viewWidth) / 2
                }); //图片自适应居中, 图片宽度与视口宽度差除以2的值, 设置为负margin
            });
        }
        /**通用-我们的成绩等数字滚动特效**/
        var numOptions = {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
            prefix: '',
            suffix: ''
        }
        var runNumber = function () {
            $('.run-number').each(function () {
                var oTop = $(this).offset().top;
                var sTop = $(window).scrollTop();
                var oHeight = $(this).height();
                var oIndex = $(this).index('.run-number');
                //console.log(oTop+'\r\n'+sTop+'\r\n'+oHeight+'\r\n'+$(window).height());
                if (oTop >= sTop && (oTop + (oHeight / 2)) < (sTop + $(window).height())) {
                    numGroup[oIndex].start();
                    //console.log('元素'+$(this).index('.run-number')+'可见');
                } else {
                    //console.log('元素'+$(this).index('.run-number')+'不可见');
                }
            });
        }

        zoomSlider(); //页面加载时初始化并检查一次.
        runNumber(); //页面加载时判断一次
        /**视口发生变化时的事件**/
        $(window).resize(function () {
            viewWidth = window.innerWidth; // 重置视口宽度
            zoomSlider();//判断是否绽放banner
            runNumber();//判断是否执行动画
        });
        /**滚动事件**/
        $(window).scroll(function () {
            runNumber();
        });

        //首先将#back-to-top隐藏
        $("#totop").hide();

        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        $(function(){

            $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#totop").fadeIn();
                }else{
                    $("#totop").fadeOut();
                }
            });

            //当点击跳转链接后，回到页面顶部位置
            $("#totop").click(function(){
                $('body,html').animate({scrollTop:0},500);
                return false;
            });

        });

        //首页-我们的服务
        $('.card-item').each(function () {
            $(this).mouseover(function () {
                $(this).addClass('card-active');
                $(this).siblings().removeClass('card-active');
                $(this).find(".btn").addClass('btn-outline-inverse').removeClass('btn-outline-blue');
                $(this).siblings().find(".btn").addClass('btn-outline-blue').removeClass('btn-outline-inverse');
            });
        });

    });
    // import 'bootstrap/dist/js/bootstrap.min.js'
    import './src/js/countUp.min.js'
    import './src/css/main.css'
    import './src/css/common.css'
    //     数字滚动插件
    import './src/css/style.css'


    import mui from './src/lib/mui/js/mui.min.js'
    mui.init({
        swipeBack:true //启用右滑关闭功能
    });

</script>

<style lang="scss" scoped>
    .top-container{
        margin: 0 auto;
    }
    .logo-img{
        width: 50%;
    }



</style>
