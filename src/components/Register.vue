<template>
    <div class="re-container">
        <div class="re-form">
            <div class="register">
                <form  method="post" class="biaodan">
                    <input  type="text" placeholder="您的姓名"/>
                    <input  type="text" placeholder="您的手机号"/>
                    <input  type="text" placeholder="您的地址"/>
                    <mt-button type="primary" size="large">提交</mt-button>
                </form>
            </div>
        </div>
    </div>
    
</template>

<script>

</script>

<style lang="scss" scoped>
    .re-container {
        height: 350px;

        .re-form {
            margin: 0 auto;
            width: 370px;
            height: 290px;
            border: 1px solid powderblue;
            position: relative;
            top: 10px;
            border-radius: 5%;
            background-image:url("/static/images/images/图层.jpg");

            .register {
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
