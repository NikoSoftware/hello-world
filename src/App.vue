<template>
    <div id="app">
        <div>
            <!--<button @click="mounted">请求</button>-->

            <!--<router-link  to="/home"> 跳转 hello world</router-link>-->
            <!--<router-link  to="/about"> 跳转 about</router-link>-->
            <!--<router-link  to="/login">跳转到 login</router-link>-->

            <!--<router-view/>-->


            <div class="contain">
                <form action="" class="parent">
                    <input type="text" class="search" placeholder="搜索">
                    <a-icon type="search" width="5em" class="btn"/>
                </form>
            </div>

            <div class="tab-contain">
                <a-tabs defaultActiveKey="1" @change="callback">
                    <a-tab-pane tab="推荐" key="1">
                        <a-row>
                            <a-col class="col" :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</a-col>
                            <a-col class="col" :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</a-col>
                            <a-col class="col" :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</a-col>
                        </a-row>

                    </a-tab-pane>
                    <a-tab-pane tab="最热" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
                    <a-tab-pane tab="最新" key="3">Content of Tab Pane 3</a-tab-pane>
                </a-tabs>
            </div>



        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: '我喜欢'
            }
        },
        methods: {
            mounted() {
                this.$fetch('/client/client-msg/getClientMsg', {id: 80})
                    .then((response) => {
                        this.msg = response
                    })
            }
        },
        computed: {
            reversedMessage() {
                return this.msg
            }
        }
    }
</script>

<style>

    * {
        margin: 0;
        padding: 0;
    }

    .contain {
        width: 100%;
        height: auto;
        margin-top: 20px;
        text-align: center;
    }

    .parent {
        margin: auto;
        width: 300px;
        height: 40px;
        border-radius: 18px;
        border: 1px solid #ccc;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;

    }

    .search {
        width: 70%;
        height: auto;
        margin: 5px 15px;
        outline: none;
        border: none;
    }

    .btn {
        height: auto;
        width: auto;
        margin: auto 15px;
        border: none;
        outline: none;
        cursor: pointer;
        text-align: center;
        font-size: 25px;
        vertical-align: middle;
    }
    .tab-contain{
        margin: auto;

    }

    .col{

        background: blueviolet;
    }

</style>
