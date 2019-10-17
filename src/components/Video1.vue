<template>
    <div class="back">
        <div class="test_two_box">
            <video id="myVideo" class="video-js vjs-default-skin vjs-big-play-centered">
                <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
<!--                <source src="//www.51xiye.com/Courierark/apk/e30a67c95950b748bc6b5c9524e7f358.mp4" type="video/mp4">-->
            </video>
        </div>
    </div>

</template>

<script>
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
                    autoplay: "muted",//"sound"
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
        height: 200px;
    }
    .video-js{
        margin: 0 auto;
        height: 200px;
    }
    .vjs-big-play-button {
        position: absolute;
        left: 0;
    }


    .video-js .vjs-tech {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .video-js[data-v-5e50ef68] {
        margin: 0 auto;
        height: 200px;
    }
    .vjs-text-track-display{
        position: absolute;
        top: 0;
        left: 0;
    }
    .myVideo-dimensions{
        width:100%;
        height: 200px;
        margin: 0 auto;
        padding: 0;
    }
</style>