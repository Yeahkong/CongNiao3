<template>
    <div class="back">
        <div class="sky">
            <div class="star glow one"></div>
            <div class="star glow two"></div>
            <div class="star glow three"></div>
            <div class="star glow four"></div>
            <div class="star glow five"></div>
            <div class="star glow six"></div>
            <div class="star glow seven"></div>
            <div class="star glow eight"></div>
            <div class="star glow night"></div>
            <div class="star glow ten"></div>
            <div class="star glow eleven"></div>
            <div class="star glow twelve"></div>
            <div class="moon">
                <div class="crater crater1"></div>
                <div class="crater crater2"></div>
                <div class="crater crater3"></div>
            </div>
        </div>
        <div class="test_two_box">
            <video id="myVideo" class="video-js vjs-default-skin vjs-big-play-centered">
                <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
<!--                <source src="//www.51xiye.com/Courierark/apk/e30a67c95950b748bc6b5c9524e7f358.mp4" type="video/mp4">-->
            </video>
        </div>
    </div>

</template>

<script>
    import '../../src/css/style.css'

    /* eslint-disable */
    export default {
        name: "TestTwo",
        data() {
            return {};
        },
        mounted() {
            this.initVideo();
        },
        methods: {
            initVideo() {
                //初始化视频方法
                let myPlayer = this.$video(myVideo, {
                    //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
                    controls: true,
                    //自动播放属性,muted:静音播放
                    autoplay: "muted",
                    //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
                    preload: "auto",
                    //设置视频播放器的显示宽度（以像素为单位）
                    width: "1000px",
                    //设置视频播放器的显示高度（以像素为单位）
                    height: "600px"
                });
            }
        }
    };
</script>

<style scoped>
    .test_two_box{
        height: 570px;
    }
    .video-js{
        margin: 0 auto;
        height: 500px;
    }
    .vjs-big-play-button {
        position: absolute;
        top: 50px;
        left: 50px;
    }


    .video-js .vjs-tech {
        position: absolute;
        top: 20px;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .video-js[data-v-5e50ef68] {
        margin: 0 auto;
        height: 550px;
    }

</style>