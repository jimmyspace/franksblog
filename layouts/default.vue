<template>
  <div id="app" :class="theme">
    <desktop-header></desktop-header>
    <nav-bar></nav-bar>
    <nuxt />
    <desktop-footer></desktop-footer>
  </div>
</template>
<script>
import DesktopHeader from '~/components/header/desktopHeader.vue';
import DesktopFooter from '~/components/footer/desktopFooter.vue';
import NavBar from '~/components/sidebar/nav.vue';
export default {
  components: {
    DesktopHeader,
    DesktopFooter,
    NavBar
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
  height: 100%;
  padding-top: 50px;
  background-color: var(--body-bg);
  overflow: hidden;
  .page-content{
    margin: 0 auto;
    width: 600px;
    min-height: 600px;
    background-color: #fff;
  }
}
</style>
