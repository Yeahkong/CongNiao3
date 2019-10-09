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
        <div class="part2">
            <div class="back">
                <div class="sky">
                    <div class="star glow one"></div>
                    <div class="star glow two"></div>
                    <div class="star glow three"></div>
                    <div class="star glow four"></div>
                    <div class="star glow five"></div>
                    <div class="star glow six"></div>
                    <div class="star glow seven"></div>
                    <div class="moon">
                    <div class="crater crater1"></div>
                    <div class="crater crater2"></div>
                    <div class="crater crater3"></div>
                    </div>
                </div>
                <div class="top-title">
                    <h1  class="home" id="home">
                        <img class="logo" :src="logo">
                        聪鸟智能家居系统有限公司
                    </h1>
                    <ul class="direction">
                        <li class="left" @click="move(1000, 1, speed)">
                            <svg class="icon" width="100px" height="100.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  /></svg>
                        </li>
                        <li class="right" @click="move(1000, -1, speed)">
                            <svg class="icon" width="100px" height="100.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"  /></svg>
                        </li>
                    </ul>

                </div>
                <div class="lunbotu">
                    <div id="slider">
                        <div class="window" @mouseover="stop" @mouseleave="play">
                            <ul class="container" :style="containerStyle">
                                <li>
                                    <img :style="{width:imgWidth+'px'}" :src="sliders[sliders.length - 1].img" alt="">
                                </li>
                                <li  v-for="(item, index) in sliders" :key="index">
                                    <img :style="{width:imgWidth+'px'}" :src="item.img" alt="">
                                </li>
                                <li>
                                    <img :style="{width:imgWidth+'px'}" :src="sliders[0].img" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul class="dots">
                        <li v-for="(dot, i) in sliders" :key="i"
                            :class="{dotted: i === (currentIndex-1)}"
                            @click = jump(i+1)>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="part3">
            <div class="top">
                <h2 class="title"  id="product">产品优势:性价比最高的智能家居方案</h2>
                <h4 class="subtitle">PRODUCT ADVANTAGE:THE MOST COST-EFFECTIVE SMART HOME SOLUTION</h4>

            </div>
            <div class="row clearfix">
                <div class="col-md-6 column">
                    <div class="one">
                        <p>① 稳定性：优于无线控制；兼具有线控制的稳定性，采用成熟的电力线载波技术。</p>
                        <p>② 拓展性：优于有线控制；具备有线控制方式的拓展性，且可随时添置设备，不需单独布线。</p>
                        <p>③ 低廉的价格：优于市场主流有线品牌；产品价格大致为其的20%~30%，具有巨大的竞争优势。</p>
                        <p> ④ 安装及使用寿命：优于有线控制；具有和无线产品差不多的安装便利性，又具有有线产品的使用寿命，没有经常掉线或者几年后性能下降不能使用情况</p>
                    </div>

                </div>
                <div class="col-md-6 column">
                    <div class="tmpl">
                        <div class="btn">
                            <div class="btn1">
                                <a link="#"><mt-button size="large">立即购买</mt-button></a>
                            </div>
                        </div>
                        <h3>加盟</h3>
                        <div class="btn">
                            <div class="btn2">
                                <a link="#"><mt-button size="normal">安装维护</mt-button></a>

                            </div>
                            <div class="btn2">
                                <a link="#"><mt-button size="normal">代理销售</mt-button></a>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>

        <div class="part4">
            <div class="">
                <h2 class="title" id="design">设计理念</h2>
                <h4 class="subtitle">DESIGN CONCEPT</h4>
            </div>

            <div class="row clearfix">
                <div class="col-md-4 column">
                    <img src="./static/images/num1.png">
                    <h4>家居控制平台</h4>
                    <div>
                        ①核心技术能结合有线和无线方案的优点；<br>
                        ②具备较高的技术壁垒，计划申请多个发明专利及技术类专利；<br>
                        ③较完善的设计体验达成却能维持较低的亲民价格，目前整套控制系统全国统一售价为1万元，远低于大多数主流竞争对手。

                    </div>
                </div>
                <div class="col-md-4 column">
                    <img src="./static/images/num2.png">
                    <h4>推广营销模式</h4>
                    <div>
                        ① 搭建线上、线下、代理商升级抢单机制，三条主线推进市场；<br>
                        ②“智能 台+现场体验+服务资源”的模式，初期主推瞄准的是先县区级地区，其次是三四级城市，以农村包围城市的理念推广。
                    </div>

                </div>
                <div class="col-md-4 column">
                    <img src="./static/images/num3.png">
                    <h4>平台搭建理念</h4>
                    <div class="wenzi">
                        建立“用户+产品+服务”零距离连接的共创共赢平台，整体设计开发理念就是要打造一个互动共赢零距离的平台，并以此组建相应的营销及服务支持团队，创用户最佳体验，成为行业引领
                    </div>
                </div>
            </div>
        </div>
        <div class="part5">
            <div class="row clearfix">
                <div class="col-md-6 column">
                    <div class="bottom">
                        <h2 id="company">企业愿景</h2>
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
    import  'bootstrap/dist/css/bootstrap.min.css'
    import './src/css/style.css'
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c2abc577b5979ed4b139ee5bf12a5946";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
    export default {
        name: 'slider',
        props: {
            initialSpeed: {
                type: Number,
                default: 30
            },
            initialInterval: {
                type: Number,
                default: 3
            }
        },
        data () {
            return {
                logo:require("./static/images/logo.png"),
                sliders:[
                   /* {
                        img:'static/images/first.png'
                    },*/
                    {
                        img:'http://img.hb.aicdn.com/adeed7d28df6e776c2fa6032579c697381d1a82b7fe00-fwRqgn_fw658',
                    },
                    {
                        img:'http://img.hb.aicdn.com/ab7f48509b3c0353017d9a85ef1d12400c9b2724540d4-p3zouo_fw658'
                    },
                    {
                        img:'http://img.hb.aicdn.com/60f788fc2a846192f224b9e6d4904b30e54926211d3d67-ACFJ9G_fw658'
                    },
                   /* {
                        video:'./static/images/video.mp4'
                    },*/
                ],
                imgWidth:1000,
                currentIndex:1,
                distance:-1000,
                transitionEnd: true,
                speed: this.initialSpeed
            }
        },
        computed:{
            containerStyle() {
                return {
                    transform:`translate3d(${this.distance}px, 0, 0)`
                }
            },
            interval() {
                return this.initialInterval * 1000
            }
        },
        mounted() {
            this.init()
        },
        methods:{
            init() {
                this.play()
                window.onblur = function() { this.stop() }.bind(this)
                window.onfocus = function() { this.play() }.bind(this)
            },
            move(offset, direction, speed) {
                console.log(speed)
                if (!this.transitionEnd) return
                this.transitionEnd = false
                direction === -1 ? this.currentIndex += offset/1000 : this.currentIndex -= offset/1000
                if (this.currentIndex > 4) this.currentIndex = 1
                if (this.currentIndex < 1) this.currentIndex = 4

                const destination = this.distance + offset * direction
                this.animate(destination, direction, speed)
            },
            animate(des, direc, speed) {
                if (this.temp) {
                    window.clearInterval(this.temp);
                    this.temp = null ;
                }
                this.temp = window.setInterval(() => {
                    if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
                        this.distance += speed * direc
                    } else {
                        this.transitionEnd = true
                        window.clearInterval(this.temp)
                        this.distance = des
                        if (des < -4000) this.distance = -1000
                        if (des > -1000) this.distance = -4000
                    }
                }, 20)
            },
            jump(index) {
                const direction = index - this.currentIndex >= 0 ? -1 : 1;
                const offset = Math.abs(index - this.currentIndex) * 1000;
                const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed ;
                this.move(offset, direction, jumpSpeed)
            },
            play() {
                if (this.timer) {
                    window.clearInterval(this.timer)
                    this.timer = null
                }
                this.timer = window.setInterval(() => {
                    this.move(1000, -1, this.speed)
                }, this.interval)
            },
            stop() {
                window.clearInterval(this.timer)
                this.timer = null
            }
        }
    }

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
             font: bold 20px "新宋体";
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
             .col-md-12 {
                 background-color: white;

                 li {
                     border-right: 1px solid gray;

                     a {
                         color:black;
                         font: bold 20px "新宋体";
                     }
                 }
             }
         }

         .part2 {
             height: 700px;
             margin-top:0 ;

             .back{
                 height: 700px;
                 /*background:rgba(0,0,0,0.6);*/
                 background-color:black ;

             }

             .home{
                 background: skyblue;
             }

             .logo {
                 width: 8%;
                 height: auto;
                 margin-bottom: 5px;
                 margin-right: 20px;
             }
             .left, .right{
                 position:absolute;
                 top:50%;
                 transform:translateY(-50%);
                 flex: 22;
                 background-color:rgba(0,0,0,0);
                 border-radius:50%;
                 cursor:pointer;
             }
             .left{
                 left:0;
                 padding-left:5%;
                 padding-top:2%;
             }
             .right{
                 right:0;
                 padding-right:5%;
                 padding-top:2%;
             }

             .lunbotu{
                 position: relative;
                 left: 10%;
                 height:71%;
                 width: 80%;
                 .dots{
                     position:absolute;
                     bottom:0;
                     left:50%;
                     transform:translateX(-50%);
                 }
                 .dots li{
                     display:inline-block;
                     width:15px;
                     height:15px;
                     margin:0 3px;
                     border:1px solid white;
                     border-radius:50%;
                     background-color:#333;
                     cursor:pointer;
                 }
                 .dots .dotted{
                     background-color:orange;
                 }

                 ol,ul{
                     list-style: none;
                 }

                 .window{

                     position:relative;
                     text-align: center;
                     width:1000px;
                     height:500px;
                     margin:35px auto;
                     overflow:hidden;

                 }
                 .container{
                     margin-top: 50px;
                     display:flex;
                     position:absolute;
                 }
                 img{
                     user-select: none;

                 }

                 }


         }

         .part3 {
             margin: 50px 0;

            .one{
                margin-left: 25%;
                width: 110%;
                line-height: 50px;
                background:url("static/images/drew.png") 0 0 no-repeat scroll transparent;
                p{
                    color:black;
                }
            }
             .tmpl{
                 text-align:center ;
                 margin-left: 15%;
                 margin-top: 25px;

                 .btn{
                     margin:  20px 0 0 0;
                     padding: 0;

                     .btn1 {
                         border-radius: 9px;
                         width: 130px;
                         height: 40px;
                         button{
                             background-color: #46529a;
                             color: white;
                             font:bold 25px "新宋体";
                         }
                     }
                     .btn2{
                         display: inline-block;
                         button{
                             background-color: green;
                             border-radius: 5px;
                             font:bold 25px "新宋体";
                             color: white;
                             width: 130px;
                             height: 40px;
                             padding-top: 5px;
                             margin: 0 25px;
                         }

                     }

                 }
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

                         line-height: 30px;
                         font-size: 16px;
                     }
                 }
             }
         }

         .part5 {
             background: url("static/images/banner.png") 0 0 no-repeat scroll transparent;
             background-size:100% 100%;
             .row{
                 padding: 100px 50px;
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
                     text-align: left;
                     margin-top: 10%;
                     line-height: 50px;
                     font-size: 1.6em;
                 }

                 img{
                     margin-left: 20%;
                     width: 75%;
                     height: 75%;
                     margin-top: 10%;

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
