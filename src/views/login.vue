<template>
    <div id="login">
        <p>这是登录页面</p>

        <a-carousel autoplay class="acar">
            <div><img src="../assets/project-image1.jpg"/></div>
            <div><img src="../assets/project-image2.jpg"/></div>
            <div><img src="../assets/project-image3.jpg"/></div>
            <div><img src="../assets/project-image4.jpg"/></div>
        </a-carousel>
        <a-divider>With Text</a-divider>
    </div>
</template>

<script>export default {
    name: 'login',
    data() {
        return {}
    }
}
</script>

<style scoped>
    .acar{
        height: 160px;
        margin: 0px 20px;
    }
    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
        border-radius:20px 20px
    }



</style>