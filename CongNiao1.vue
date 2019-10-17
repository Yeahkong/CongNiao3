<template>
    <div class="top-container" id="top">
        <!-- 整站通用的头部及导航条 -->
        <div class="part1">
            <div class="header">
                <h3>
                    <img  class="logo" src="./static/images/logo.png">
                    聪鸟智能家居
                </h3>
            </div>
        </div>

        <!-- 全屏轮播图 -->
        <div class="lunbo">
            <router-view></router-view>
            <div class="change">
                <div class="btn">
                    <router-link to="/home/images"><mt-button>图片</mt-button></router-link>
                </div>
                <div class="btn">
                    <router-link to="/home/video"><mt-button>视频</mt-button></router-link>
                </div>
            </div>
        </div>
        <div class="part3">
            <div class="top">
                <h4 class="title"  id="product">产品优势:性价比最高的智能家居方案</h4>
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
            <!--<div class="tmpl">
                &lt;!&ndash;<ul>
                    <li>
                        <div class="btn1">
                            <a href="/index1.html" ><mt-button size="large">立即购买</mt-button></a>
                        </div>
                    </li>
                    <li>
                        <div class="btn2">
                            <a link="#"><mt-button size="normal">安装维护</mt-button></a>
                        </div>
                    </li>
                    <li>
                        <div class="btn2">
                            <a link="#"><mt-button size="normal">代理销售</mt-button></a>
                        </div>
                    </li>
                </ul>&ndash;&gt;
                <div class="btn-group">
                    <button class="btn btn-default">Action</button> <button data-toggle="dropdown" class="btn btn-default dropdown-toggle"><span class="caret"></span></button>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="#">操作</a>
                        </li>
                        <li class="disabled">
                            <a href="#">另一操作</a>
                        </li>
                        <li class="divider">
                        </li>
                        <li>
                            <a href="#">其它</a>
                        </li>
                    </ul>
                </div>

            </div>-->
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
        <div class="part4">
            <div class="col-md-12 column">
                <h4 class="title" id="design">设计理念</h4>
            </div>

            <div class="row clearfix">
                <div class="col-md-4 column">
                    <img src="./static/images/num5.jpg">
                    <h5>家居控制平台</h5>
                    <p>
                        ①核心技术能结合有线和无线方案的优点；<br>
                        ②具备较高的技术壁垒，计划申请多个发明专利及技术类专利；<br>
                        ③较完善的设计体验达成却能维持较低的亲民价格，目前整套控制系统全国统一售价为1万元，远低于大多数主流竞争对手。

                    </p>
                </div>
                <div class="col-md-4 column">
                    <img src="./static/images/num2.jpg">
                    <h5>推广营销模式</h5>
                    <p>
                        ① 搭建线上、线下、代理商升级抢单机制，三条主线推进市场；<br>
                        ②“智能 台+现场体验+服务资源”的模式，初期主推瞄准的是先县区级地区，其次是三四级城市，以农村包围城市的理念推广。
                    </p>

                </div>
                <div class="col-md-4 column">
                    <img src="./static/images/num3.jpg">
                    <h5>平台搭建理念</h5>
                    <p class="wenzi">
                        建立“用户+产品+服务”零距离连接的共创共赢平台，整体设计开发理念就是要打造一个互动共赢零距离的平台，并以此组建相应的营销及服务支持团队，创用户最佳体验，成为行业引领
                    </p>
                </div>
            </div>
        </div>
        <div class="part5">
            <div class="row clearfix">
                <div class="col-md-6 column">
                    <div class="bottom">
                        <h4 id="company">企业愿景</h4>
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
            </div>
        </div>
        <div class="part6">
            <div class="contact" id="contact">
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
    import 'bootstrap/dist/css/bootstrap.min.css'
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c2abc577b5979ed4b139ee5bf12a5946";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
  /*  // 点击弹出
    import mui from './src/lib/mui/js/mui.js'
    mui('.mui-bar').on('tap','.mui-btn',function(){
        mui('#topPopover').popover('show',document.getElementById("list")); // 将id为list的元素放在想要弹出的位置
    });*/
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



  export default {
      data(){
          return{}
      },
      methods:{

      }
  }
</script>

<style lang="scss" scoped>
    .top-container{
        margin: 0 auto;
        background-color: white;
    }
    .part1{
        margin: 0 auto;
        height: 40px;
        background-color: skyblue;

        img{
            width: 50px;
            height: auto;
            margin-right: 5px;

        }

        h3{
            text-align: center;
            margin: 0 auto;
            color: #ffffff;
            line-height: 40px;


        }
    }
    p{
        color:black;
        line-height: 30px;
    }
    .lunbo {
        width: 100%;
        .change {
            margin-top: 0;
            text-align: center;
            background: rgba(0,0,0,0.7);
            padding: 5px;

            .btn {
                display: inline-block;
                /*opacity: 0.8;*/
                margin: 0 10px;
            }
            .mint-button--default {
                color: white;
                font: 12px "黑体";
                padding: 0;
                height: 20px;
                width: 30px;
                background:rgba(250,50,50,0.8);
            }
        }
    }
    .part3 {
        padding: 10px;
        .top{
            text-align: center;
            margin: 30px 0;
        }
        .one{
            width: 100%;
            background:url("static/images/drew.png") 0 0 no-repeat scroll transparent;
            background-size: 100% 100%;

        }
        .tmpl{
            text-align:center ;
            .btn1 {
                border-radius: 9px;
                height: 30px;
                margin: 20px auto 30px;

                button {
                    background-color: skyblue;
                    opacity: 0.5;
                    color: red;
                    font: bold 15px "新宋体";
                }
            }
            .btn2{
                button{
                        padding: 8px;
                        margin: 5px 20px 0 20px;
                        background-color: red;
                        border-radius: 5px;
                        font:bold 15px "新宋体";
                        color: white;
                        opacity: 0.3;

                    }

                }
            }
        }
    /*body{*/
    /*    font-size:15px;*/
    /*    color: #fff;*/
    /*    text-transform:uppercase;*/
    /*    overflow-x:hidden;*/
    /*}*/

    .part{
        margin:0;
        padding:0;
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
            border-radius: 10px;
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
            background:orangered;
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
        li.oe_heading{
            color:#aaa;
            font-size:16px;
            border-bottom:1px solid #ddd;
        }


        }




    .part4 {
        margin-top: 30px;
        padding: 0 10px;
        text-align: center;
        .row{
            text-align: center;
            margin-top: 20px;
            h5{
                margin-top: 20px;
                font:bold 15px "黑体";
            }
           /* div img{
                cursor: pointer;
                transition: all 0.3s;
            }
            img:hover{
                transform: scale(1.1);
            }*/
            .col-md-4{
                text-align: left;
                margin: 20px auto;
                img{
                    width: 100%;
                    border-radius: 7px;
                    box-shadow: 0 0 10px gray;
                }
            }
        }
    }
    .part5 {
        background: url("static/images/banner.png") 0 0 no-repeat scroll transparent;
        background-size:100% 100%;
        .row{
            padding: 10px ;
            margin-left: 3%;
            line-height: 2%;
            color: white;
           /* div img{
                cursor: pointer;
                transition: all 0.3s;
            }
            img:hover{
                transform: scale(1.2);
            }*/
            .col-md-6{
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
                    color: white;
                    font:14px "宋体";
                    margin-top: 10px;
                    line-height: 20px;
                }

                img{
                margin:2% 5%;
                width: 85%;
                height: 85%;
                }
            }

        }
    }
    .part6 {
        margin-top: 0;
        margin-bottom: 65px;
        background: url("static/images/contact.png") 0 0 no-repeat scroll transparent;
        background-size: 100% 100%;
        .contact{
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
            p{
                line-height: 15px;
                color: #ffffff;
            }
            h5{
                color: lightgray;
                margin-top: 20px;
            }
        }
    }





</style>
