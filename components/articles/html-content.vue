<template>
  <div class="html-content" v-html="htmlString">

  </div>
</template>

<script>
export default {
    props: {
        htmlString: {
            type: String,
            default(){
                return ""
            }
        }
    }
}
</script>

<style lang="less">
.html-content{
    h2{
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: bold;
    }
    h3{
        margin-bottom: 10px;
        font-size: 15px;
        font-weight: bold;
    }
    h4{
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: bold;
    }
    p{
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 2;
    }
    img{
        max-width: 100%;
    }
    .bold{
        font-weight: bold;
    }
    .underline{
        text-decoration: underline;
    }
}
</style>