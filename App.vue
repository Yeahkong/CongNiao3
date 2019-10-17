<template>
    <div class="container">
        <div class="part1">
            <div class="row clearfix">
                <div class="col-md-12 column">
                    <ul class="nav nav-tabs">
                        <li >
                            <a href="#home">首页</a>
                        </li>
                        <li>
                            <a href="#product">产品优势</a>
                        </li>
                        <li >
                            <a href="#design">设计理念</a>
                        </li>
                        <li>
                            <a href="#company">企业愿景</a>
                        </li>
                        <li>
                            <a href="#contact">联系我们</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="part2"  id="home">
                <div class="top-title">
                    <h1  class="home">
                        <img class="logo" :src="logo">
                        聪鸟智能家居系统有限公司
                    </h1>
                </div>
            <router-view></router-view>
            <div class="change">
                <div class="btn">
                    <router-link to="/home/images"><mt-button size="large">图片</mt-button></router-link>
                </div>
                <div class="btn">
                    <router-link to="/home/video"><mt-button size="large">视频</mt-button></router-link>
                </div>
            </div>



        </div>
        <div class="part3" id="product">
            <div class="top">
                <h2 class="title"  >产品优势:性价比最高的智能家居方案</h2>
                <h4 class="subtitle">PRODUCT ADVANTAGE:THE MOST COST-EFFECTIVE SMART HOME SOLUTION</h4>

            </div>
            <div class="row clearfix">
                <div class="col-md-12 column">
                    <div class="one">
                        <p>① 稳定性：优于无线控制；兼具有线控制的稳定性，采用成熟的电力线载波技术。</p>
                        <p>② 拓展性：优于有线控制；具备有线控制方式的拓展性，且可随时添置设备，不需单独布线。</p>
                        <p>③ 低廉的价格：优于市场主流有线品牌；产品价格大致为其的20%-30%，具有巨大的竞争优势。</p>
                        <p> ④ 安装及使用寿命：优于有线控制；具有和无线产品差不多的安装便利性，又具有有线产品的使用寿命，没有经常掉线或者几年后性能下降不能使用情况</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="part">

            <!--  <ul class="one" >
                  <li>
                      <div>
                          <a><img src="static/images/timg.jpg"></a>
                          <ul class="two">
                              <li><div><a>立即购买</a></div></li>
                              <li><div><a>安装维护</a></div></li>
                              <li><div><a>代理加盟</a></div></li>
                          </ul>

                      </div>

                  </li>
              </ul>-->
           <!-- <div class="a">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="3" disabled>消息中心</el-menu-item>
                    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                </el-menu>
                <div class="line"></div>
                <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="3" disabled>消息中心</el-menu-item>
                    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                </el-menu>
            </div>-->
          <!--  <div class="b">
                <el-row class="tac">
                    <el-col :span="12">
                    <h5>自定义颜色</h5>
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <div slot="title">
                                <i class="el-icon-menu"></i>
                                <span>导航一</span>
                            </div>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
&lt;!&ndash;                                <el-menu-item index="1-4-1">选项1</el-menu-item>&ndash;&gt;
                            </el-submenu>
                        </el-submenu>
                        &lt;!&ndash;<el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>&ndash;&gt;
                    </el-menu>
                </el-col>
                </el-row>
            </div>-->
            <div class="c">

                <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu index="2">
                        <template slot="title"><!--<i class="el-icon-menu"></i>-->
                            购买</template>
                        <el-menu-item index="2-1">立即购买</el-menu-item>
                        <el-menu-item index="2-2">安装维护</el-menu-item>
                        <el-menu-item index="2-3">代理加盟</el-menu-item>
<!--                        <el-menu-item index="2-4">选项4</el-menu-item>-->

                        <!--<el-submenu index="2-4">
                            <div slot="title">选项4</div>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>-->
                    </el-submenu>
                </el-menu>

            </div>


            <div class="oe_wrapper">
                <ul id="oe_menu" class="oe_menu">
                    <li><a href="">购买</a>
                        <div>
                            <ul>
                                <li><a href="#">立即购买</a></li>
                                <li><a href="#">安装维护</a></li>
                                <li><a href="#">代理加盟</a></li>
                            </ul>

                        </div>
                    </li>
                    <!--<li><a href="">Projects</a>
                        <div style="left:-111px;">&lt;!&ndash; -112px &ndash;&gt;
                            <ul>
                                <li class="oe_heading">Fashion Shows</li>
                                <li><a href="#">Milano</a></li>
                                <li><a href="#">Paris</a></li>
                                <li><a href="#">Berlin</a></li>
                                <li><a href="#">New York</a></li>
                                <li><a href="#">London</a></li>
                            </ul>
                            <ul>
                                <li class="oe_heading">Events</li>
                                <li><a href="#">Fashion Party 2011</a></li>
                                <li><a href="#">Evening specials</a></li>
                                <li><a href="#">Fashion Day Milano</a></li>
                                <li><a href="#">Model Workshops</a></li>
                            </ul>
                            <ul>
                                <li class="oe_heading">Media</li>
                                <li><a href="#">Wallpapers</a></li>
                                <li><a href="#">Downloads</a></li>
                                <li><a href="#">Images</a></li>
                                <li><a href="#">Contest 2011</a></li>
                                <li><a href="#">Fashion Mania</a></li>
                                <li><a href="#">Green Earth Day</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="">Fragrances</a>
                        <div style="left:-223px;">
                            <ul class="oe_full">
                                <li class="oe_heading">Fashion Fragrances</li>
                                <li><a href="#">Deálure</a></li>
                                <li><a href="#">Violet Woman</a></li>
                                <li><a href="#">Deep Blue for Men</a></li>
                                <li><a href="#">New York, New York</a></li>
                                <li><a href="#">Illusion</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="">Events</a>
                        <div style="left:-335px;">
                            <ul>
                                <li class="oe_heading">Shows 2010</li>
                                <li><a href="#">Milano</a></li>
                                <li><a href="#">Paris</a></li>
                                <li><a href="#">Berlin</a></li>
                                <li><a href="#">New York</a></li>
                                <li><a href="#">London</a></li>
                            </ul>
                            <ul>
                                <li class="oe_heading">Shows 2011</li>
                                <li><a href="#">Milano</a></li>
                                <li><a href="#">Paris</a></li>
                                <li><a href="#">Berlin</a></li>
                                <li><a href="#">New York</a></li>
                                <li><a href="#">London</a></li>
                            </ul>
                            <ul>
                                <li class="oe_heading">Special Events</li>
                                <li><a href="#">Fashion Party 2011</a></li>
                                <li><a href="#">Fashion Countdown Party 2010</a></li>
                                <li><a href="#">Fashion Day Milano</a></li>
                                <li><a href="#">Model Workshops</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="">Stores</a>
                        <div style="left:-447px;">
                            <ul>
                                <li class="oe_heading">Europe</li>
                                <li><a href="#">Milano</a></li>
                                <li><a href="#">Paris</a></li>
                                <li><a href="#">Berlin</a></li>
                                <li><a href="#">London</a></li>
                            </ul>
                            <ul>
                                <li class="oe_heading">Asia</li>
                                <li><a href="#">Hong Kong</a></li>
                                <li><a href="#">Tokio</a></li>
                                <li><a href="#">New Delhi</a></li>
                                <li><a href="#">Beijing</a></li>
                            </ul>
                            <ul>
                                <li class="oe_heading">United States</li>
                                <li><a href="#">New York</a></li>
                                <li><a href="#">Los Angeles</a></li>
                                <li><a href="#">Seattle</a></li>
                                <li><a href="#">Miami</a></li>
                            </ul>
                        </div>
                    </li>-->
                </ul>
            </div>


        </div>
        <div class="part4" id="design">
            <div class="">
                <h2 class="title" >设计理念</h2>
                <h4 class="subtitle">DESIGN CONCEPT</h4>
            </div>

            <div class="row clearfix">
                <div class="col-md-4 column">
                    <img src="./static/images/num4.jpg">
                    <h4>家居控制平台</h4>
                    <div>
                        ①核心技术能结合有线和无线方案的优点；<br>
                        ②具备较高的技术壁垒，计划申请多个发明专利及技术类专利；<br>
                        ③较完善的设计体验达成却能维持较低的亲民价格，目前整套控制系统全国统一售价为1万元，远低于大多数主流竞争对手。

                    </div>
                </div>
                <div class="col-md-4 column">
                    <img src="./static/images/num2.jpg">
                    <h4>推广营销模式</h4>
                    <div>
                        ① 搭建线上、线下、代理商升级抢单机制，三条主线推进市场；<br>
                        ②“智能 台+现场体验+服务资源”的模式，初期主推瞄准的是先县区级地区，其次是三四级城市，以农村包围城市的理念推广。
                    </div>

                </div>
                <div class="col-md-4 column">
                    <img src="./static/images/num3.jpg">
                    <h4>平台搭建理念</h4>
                    <div class="wenzi">
                        建立“用户+产品+服务”零距离连接的共创共赢平台，整体设计开发理念就是要打造一个互动共赢零距离的平台，并以此组建相应的营销及服务支持团队，创用户最佳体验，成为行业引领
                    </div>
                </div>
            </div>
        </div>
        <div class="part5" id="company">
            <div class="row clearfix">
                <div class="col-md-6 column">
                    <div class="bottom">
                        <h2 >企业愿景</h2>
                        <h4 class="subtitle">ENTERPRICE VISION</h4>
                    </div>


                    <p>
                        搭建创新发展平台，发挥企业、员工、及社会资源最大潜能，提供最实用的智能家居产品，对用户对社会价值回报。<br>
                        企业精神：两创（创新+创造）  两利（利家+利民）<br>
                        企业价值观：共创共享，共惠共赢，自营自驱，创新体验无止境<br>
                        企业战略目标：紧扣时代脉搏，推动推广家居智能，成为行业领航者<br>

                    </p>
                </div>
                <div class="col-md-6 column">
                    <div class="content" >
                        <img src="./static/images/clock.png">
                    </div>

                </div>
<!--                <img src="./static/images/ball.png">-->
            </div>
        </div>
        <div class="part6" id="contact">
            <div class="contact" >
                <p>电话：123456789</p>
                <p>手机：15739395395</p>
                <p>邮箱：1232424324@qq.com</p>
                <p>地址：浙江省杭州市余杭区崇贤创新产业园A座</p>
                <h5>@CopyRight 2019 by Themesflat.com</h5>

            </div>
        </div>

   </div>
</template>

<script>

    import  'bootstrap/dist/css/bootstrap.min.css'
    import './src/css/style.css'
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c2abc577b5979ed4b139ee5bf12a5946";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
    import 'element-ui/lib/theme-chalk/index.css';
    import 'vue/dist/vue.js'
    export default {
        data () {
            return {
                logo:require("./static/images/logo.png"),
                activeIndex: '1',
                activeIndex2: '1',
                isCollapse: true
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
    import $ from 'jquery/dist/jquery.js'

    $(function() {
        var $oe_menu		= $('#oe_menu');
        var $oe_menu_items	= $oe_menu.children('li');
        var $oe_overlay		= $('#oe_overlay');

        $oe_menu_items.bind('mouseenter',function(){
            var $this = $(this);
            $this.addClass('slided selected');
            $this.children('div').css('z-index','9999').stop(true,true).slideDown(200,function(){
                $oe_menu_items.not('.slided').children('div').hide();
                $this.removeClass('slided');
            });
        }).bind('mouseleave',function(){
            var $this = $(this);
            $this.removeClass('selected').children('div').css('z-index','1');
        });

        $oe_menu.bind('mouseenter',function(){
            var $this = $(this);
            $oe_overlay.stop(true,true).fadeTo(200, 0.6);
            $this.addClass('hovered');
        }).bind('mouseleave',function(){
            var $this = $(this);
            $this.removeClass('hovered');
            $oe_overlay.stop(true,true).fadeTo(200, 0);
            $oe_menu_items.children('div').hide();
        })
    });

</script>

<style lang="scss" scoped>

    .container {
        width: 100%;
        padding: 0;
        background-color: white;
        h1{
            text-align: center;
            color: #ffffff;
            font: bold 300% "楷体";
            margin: 0 auto;
            padding-top:0.5%;
        }
        h2 {
            text-align: center;
            margin-top: 15px;
            margin-bottom: 0;
            font: bold 40px "新宋体";
        }
        h3{
            margin-top: 35px;
            text-align: center;
            font:bold 30px "新宋体";
        }
        h4{
            font: bold 25px "新宋体";
            margin-top: 0;
            margin-bottom: 30px;

        }
        p{
            color: #ffffff;
            font: bold 22px "新宋体";
            line-height: 40px;
        }
        .top{
            margin-bottom: 50px;
        }
        .subtitle{
            text-align: center;
            font: 20px "新宋体";
            color: #999899;
        }
        .part1 {
            position: fixed;
            z-index: 188;
            width: 100%;
            background-color:gainsboro;
            margin: 0 auto;
            .row{


            }
            .col-md-12 {
                /*position: absolute;
                text-align: center;*/
                display: flex;

                justify-content: center; /* 水平居中 */

                li {

                    a {
                        color:deepskyblue;
                        font: 20px "標楷體";
                    }
                }
            }
        }

        .part2 {
            margin-top:45px ;
            background-color: black;

            .home{
                background: skyblue;
            }

            .logo {
                width: 120px;
                height: auto;
                margin-bottom: 5px;
                margin-right: 20px;
            }
            .change{
                margin-top: 0;
                text-align: center;
                .btn{
                    color: skyblue;

                }
                .mint-button--default {
                    background-color: skyblue;
                    color: white;
                    font-size: 15px;

                }
            }
        }

        .part3 {
            margin: 50px 0;

            .one{
                padding: 0 200px;
                text-align:left;
                background:url("static/images/drew.png") 0 0 no-repeat scroll transparent;
                p{
                    color:black;
                }
            }

        }

        .part{
            .b{
                .el-menu-vertical-demo:not(.el-menu--collapse) {
                    width: 200px;
                    min-height: 400px;
                }
            }
            .c{
                margin: 0;
                padding:0;
                position: fixed;
                top: 350px;
                right: 50px;
                ul.el-menu--horizontal>.el-submenu .el-submenu__title {
                    border-radius: 10px;


                }
                .el-menu--horizontal{
                    width:165px ;
                }
                ul.el-menu-demo.el-menu--horizontal.el-menu{
                    border-radius: 20px;
                    width:65px ;
                    margin: 0;
                    padding: 0;
                    li.el-submenu{
                        border-radius: 20px;
                        div .el-submenu__title{
                            padding: 0 0;
                            color: #000000;
                            width: 30px;
                            height: 30px;
                        }
                    }


                }
                .el-icon-menu{
                        margin: 0;
                        padding: 0;
                    }

                .el-menu--horizontal{
                    position: fixed;
                    right: 0;
                    width: 50px;



                }
                .el-submenu{
                }


            }
            /*margin:0;*/
            /*padding:0;*/
            /* .oe_overlay{
                 background:#000;
                 opacity:0;
                 position:fixed;
                 top:0px;
                 right:0px;
                 width:100%;
                 height:100%;
             }*/
            ul.oe_menu{
                list-style:none;
                position:fixed;
                right: 0;
                margin:30px 0px 0px 40px;
                clear:both;
            }
            ul.oe_menu > li{
                position:fixed;
                right: 0;
                top:300px;
            }
            ul.oe_menu > li > a{
                display:block;
                border-radius: 7px;
                background-color:#101010;
                text-decoration:none;
                font-weight:bold;
                font-size:12px;
                width:35px;
                height:25px;
                padding:5px;
                margin:1px;






























                text-shadow:0px 0px 1px #000;
                opacity:0.8;
            }
            .oe_wrapper ul.hovered > li > a{
                background-color: orangered;
                color: white;
                text-shadow:0px 0px 1px #FFF;
            }
            ul.oe_menu div{
                position:fixed;
                top: 300px;
                right:35px;
                border-radius: 10px;
                background:skyblue;
                padding-top: 10px;
                height:100px;
                display:none;
            }
            ul.oe_menu div ul li a{
                text-decoration:none;
                color:#222;
                margin:5px 20px 0 -15px;
                display:block;
                font-size:13px;
                padding:2px 0;
            }

            ul.oe_menu div ul li a:hover{
                background:#000;
                color:#fff;

            }
            ul.oe_menu li ul{
                list-style:none;
                float:left;
                width: 100px;
                text-align: left;
            }


        }

        .part4 {
            margin-top: 50px;
            .row{
                text-align: center;
                margin: 0 100px;
                h4{
                    margin-top: 30px;
                }
                div img{
                    cursor: pointer;
                    transition: all 0.3s;
                }
                img:hover{
                    transform: scale(1.1);
                }
                .col-md-4{
                    text-align: left;
                    padding: 20px 50px;
                    img{
                        width: 100%;
                    }
                    div{

                        line-height: 34px;
                        font-size: 16px;

                    }
                }
            }
        }

        .part5 {
            background: url("static/images/banner.png") 0 0 no-repeat scroll transparent;
            background-size:100% 100%;
            .row{
               /* img{
                width: 100%;
                }*/
                 padding: 70px 50px;
                 margin-left: 3%;
                 line-height: 2%;
                 color: white;
                 div img{
                     cursor: pointer;
                     transition: all 0.3s;
                 }
                 img:hover{
                     transform: scale(1.2);
                 }
                 .bottom{
                     h2{
                         text-align: left;
                         margin-bottom: 0;
                     }
                     h4{
                         text-align: left;
                     }
                 }
                 p{
                     line-height: 50px;
                     text-align: left;
                     margin-top: 7%;
                     font-size: 1.3em;
                 }

                 img{
                     margin-left: 10%;
                     margin-top: 5%;
                     width: 600px;

                 }
            }

        }
        .part6 {
            margin-top: 0;
            background: url("static/images/contact.png") 0 0 no-repeat scroll transparent;
            background-size: 100% 100%;
            .contact{
                text-align: center;
                padding-top: 30px;
                padding-bottom: 10px;
                p{
                    line-height: 20px;
                }
                h5{
                    color: lightgray;
                    margin-top: 20px;
                }
            }
        }

    }


</style>