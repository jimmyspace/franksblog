<template>
  <div class="mobile-nav" :class="{'show': showMobileNav}">
      <div class="mobile-nav-left">
          <div class="mobile-user">
              <div class="user-info">
                  <div class="user-avatar">
                      <img src="@/static/me.png" alt="">
                  </div>
                  <div class="user-name">
                      <div class="name-info">Frank</div>
                      <div class="user-hope">春风十里</div>
                  </div>
              </div>
              <div class="action-area">
                  <button class="action-btn lang-btn" @click="changeLang">{{lang}}</button>
                  <button class="action-btn theme-btn" @click="changeTheme">{{theme}}</button>
              </div>
          </div>
          <ul class="nav-ul">
            <li class="nav-li">
                <router-link :to="{ path: '/'}">{{$t('nav.cook')}}</router-link>
            </li>
            <li class="nav-li">
                <router-link :to="{ path: '/code'}">{{$t('nav.code')}}</router-link>
            </li>
            <li class="nav-li">
                <router-link :to="{ path: '/life'}">{{$t('nav.life')}}</router-link>
            </li>
            <li class="nav-li">
                <router-link :to="{ path: '/up'}">{{$t('nav.up')}}</router-link>
            </li>
          </ul>
      </div>
      <div class="mobile-nav-right" @click="hideNav"></div>
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
        },
        showMobileNav() {
            return this.$store.state.showMobileNav
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
        },
        hideNav(){
            this.$store.commit('change_showMobileNav', false)
        }
    }
}
</script>

<style lang="less" scoped>
.mobile-nav{
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    color: var(--text-color);
    overflow: hidden;
    transform: translate(-100%);
    transition: all .38s ease-out;
    z-index: 3;
    &.show{
        transform: translate(0);
        transition: all .38s ease-out;
    }
    .mobile-nav-left{
        width: 260px;
        height: 100%;
        background-color: #34393d;
        overflow: hidden;
        .user-info{
            margin-top: 30px;
            display: flex;
            justify-content: center;
            .user-avatar{
                width: 65px;
                height: 65px;
                overflow: hidden;
                img{
                    width: 100%;
                    border: 3px solid rgba(192,192,192,.8);
                    border-radius: 50%;
                }
            }
            .user-name{
                display: flex;
                flex-direction: column;
                height: 65px;
                justify-content: center;
                padding-left: 10px;
                .name-info{
                    font-size: 16px;
                    font-weight: bold;
                    color: #fff;
                }
                .user-hope{
                    color: #0088f5;
                    font-size: 13px;
                }
            }
        }
        .action-area{
            padding: 15px 0;
            display: flex;
            justify-content: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.4);
            .action-btn{
                width: 80px;
                height: 40px;
                color: #fff;
            }
        }
        .nav-ul{
            .nav-li{
                a{
                    display: block;
                    width: 100%;
                    height: 42px;
                    padding: 6px 30px;
                    line-height: 30px;
                    color: #fff;
                    font-size: 14px;
                    font-weight: bold;
                    &:hover, &.nuxt-link-exact-active{
                        color: var(--primary-color);
                        background-color: var(--body-bg);
                    }
                }
            }
        }
    }
    .mobile-nav-right{
        flex: 1;
        height: 100%;
    }
}
</style>