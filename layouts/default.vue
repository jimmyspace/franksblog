<template>
  <div id="app" :class="theme">
    <desktop-header></desktop-header>
    <nav-bar></nav-bar>
    <nuxt />
    <plan></plan>
    <desktop-footer></desktop-footer>
  </div>
</template>
<script>
import DesktopHeader from '~/components/header/desktopHeader.vue';
import DesktopFooter from '~/components/footer/desktopFooter.vue';
import NavBar from '~/components/sidebar/nav.vue';
import Plan from '~/components/sidebar/plan.vue';
export default {
  components: {
    DesktopHeader,
    DesktopFooter,
    NavBar,
    Plan
  },
  computed: {
    theme(){
      return this.$store.state.theme
    }
  }
}
</script>
<style lang="less">
.container{
  position: relative;
  width: 100%;
  min-height: calc(100% - 80px);
  padding-top: 50px;
  background-color: var(--body-bg);
  color: var(--text-color);
  overflow: auto;
  z-index: 2;
  &::after{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: url('@/static/bgpc.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.1;
    z-index: 0;
  }
  .page-content{
    position: relative;
    left: -53px;
    margin: 0 auto 20px;
    padding-top: 20px;
    width: 600px;
    z-index: 3;
  }
}

</style>
