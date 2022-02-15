<template>
  <div class="fb-mobile-top">
      <div class="left-menu-icon" @click="showNav">
          <img v-show="theme === 'dark'" src="@/static/menu-icon-white.png" alt="">
          <img v-show="theme === 'light'" src="@/static/menu-icon.png" alt="">
      </div>
      <div class="fb-top-title">
          <img v-show="theme === 'light'" src="@/static/logo-blank-w.png" alt="">
          <img v-show="theme === 'dark'" src="@/static/logo-white-w.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
    computed: {
        theme(){
            return this.$store.state.theme;
        },
        showMobileNav() {
            return this.$store.state.showMobileNav
        }
    },
    methods: {
        showNav(){
            this.$store.commit('change_showMobileNav', true)
        }
    }
}
</script>

<style lang="less" scoped>
.fb-mobile-top{
    position: relative;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 1;
    .left-menu-icon{
        position: absolute;
        top: 10px;
        left: 10px;
        width: 40px;
        height: 40px;
        padding: 5px;
        overflow: hidden;
        img{
            width: 26px;
            height: 26px;
        }
    }
    .fb-top-title{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        line-height: 30px;
        text-align: center;
        padding: 15px 0;
        img{
            width: 100px;
        }
    }
}
</style>