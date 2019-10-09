<template>
    <div class="jm-container">
        <div class="jm-form">
            <div class="jiameng">
                <form  method="post" class="biaodan">
                    <input type="text" placeholder="您的姓名"/>
                    <input type="text" placeholder="您的手机号"/>
                    <mt-button type="primary" size="large">提交</mt-button>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
</script>

<style lang="scss" scoped>
    .jm-container{
        margin: 0 auto;
        height: 350px;; /*这里最好不要设置宽度，不然网页变窄的时候表单位置可能不能居中*/
        .jm-form{
            margin: 0 auto;
            width:360px;
            height:  240px;
            border: 1px solid powderblue;
            position: relative;
            top:25px;
            background-color:#FFE8E8;
            border-radius: 5%;
            background-image:url("/static/images/images/图层.jpg");

            .jiameng{
                width: 250px;
                margin: 0 auto;
                position: relative;
                top: 40px;

                input{
                    font-size: 14px;
                    color: red;

                }
            }
        }

    }


</style>
