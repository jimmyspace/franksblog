<template>
    <div class="fb-header">
        <div class="fb-header-wrapper">
            <div class="fb-home-link">
                <div class="fb-logo">Frank</div>
                <div class="fb-describe">{{$t('header.title')}}</div>
            </div>
            <div class="fb-head-actions">
                <button class="action-btn lang-btn" @click="changeLang">{{lang}}</button>
                <button class="action-btn theme-btn" @click="changeTheme">{{theme}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        theme() {
            return this.$store.state.theme;
        },
        lang(){
            const locale = this.$store.state.locale;
            return locale === 'zh-CN' ? '中' : 'EN';
        }
    },
    methods: {
        changeTheme(){
            const theme = this.$store.state.theme === 'light' ? 'dark' : 'light';
            this.$store.commit('change_theme', theme)
        },
        changeLang(){
            const locale = this.$store.state.locale === 'zh-CN' ? 'en-US' : 'zh-CN';
            this.$store.commit('change_lang', locale);
            this.$i18n.locale = locale
        }
    }
}
</script>

<style lang="less" scoped>
.fb-header{
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: var(--module-bg);
    backdrop-filter: blur(5px);
    justify-content: center;
    transition: background-color .25s;
    z-index: 100;
    .fb-header-wrapper{
        display: flex;
        width: 1050px;
        justify-content: space-between;
        .fb-home-link{
            display: flex;
            align-items: center;
            color: var(--link-color);
            .fb-logo{
                width: 80px;
                font-size: 16px;
                font-weight: bold;
            }
            .fb-describe{
            }
        }
        .fb-head-actions{
            display: flex;
            width: 100px;
            button{
                flex: 1;
                color: var(--link-color);
            }
        }
    }
}
</style>