<template>
    <div class="fb-header-mobile">
        <mobile-top></mobile-top>
        <mobile-nav></mobile-nav>
        <div v-show="showMobileNav" class="mobile-header-mask"></div>
    </div>
</template>

<script>
import MobileTop from './mobile-top.vue';
import MobileNav from './mobile-nav.vue';
export default {
    components: {
        MobileTop,
        MobileNav
    },
    computed: {
        showMobileNav() {
            return this.$store.state.showMobileNav
        }
    }
}
</script>

<style lang="less" scoped>
.fb-header-mobile{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    background-color: var(--module-bg);
    backdrop-filter: blur(5px);
}
.mobile-header-mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background-color: var(--module-bg);
    backdrop-filter: blur(5px);
    z-index: 2;
}
</style>