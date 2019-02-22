<template>
    <div id="about">
      <h1>{{msg}}</h1>
        <a-button style="loading:true;type: primary"  >button</a-button>
        <a-button :loading='true' type="danger">button</a-button>

        <a-button type="primary">Primary</a-button>
        <a-button>Default</a-button>
        <a-button type="dashed">Dashed</a-button>
        <a-button type="danger">Danger</a-button>



        <h4>Basic</h4>
        <a-button-group style="margin-top: 20px ">
            <a-button>Cancel</a-button>
            <a-button type="primary">OK</a-button>
        </a-button-group>
        <br/>
        <div style="width: 100%;height: auto;background-color: sandybrown;text-align:center">
        <a-button-group style="margin: 10px 20px;">
            <a-button disabled>L</a-button>
            <a-button disabled>M</a-button>
            <a-button disabled>R</a-button>
        </a-button-group>
        </div>
        <br/>
        <a-button-group style="margin-top: 20px ">
            <a-button type="primary">L</a-button>
            <a-button>M</a-button>
            <a-button>M</a-button>
            <a-button type="dashed">R</a-button>
        </a-button-group>

        <h4>With Icon</h4>
        <a-button-group>
            <a-button type="primary">
                <a-icon type="left" />Go back
            </a-button>
            <a-button type="primary">
                Go forward<a-icon type="right" />
            </a-button>
        </a-button-group>
        <a-button-group>
            <a-button type="primary" icon="cloud" />
            <a-button type="primary" icon="cloud-download" />
        </a-button-group>
    </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: '这是关于界面'
    }
  },
}
</script>

<style scoped>

</style>
