<template>
    <div class="fb-nav">
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
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.fb-nav{
    position: absolute;
    top: 70px;
    left: 50%;
    margin-left: -525px;
    width: 160px;
    z-index: 9;
    overflow: hidden;
    .nav-ul{
        .nav-li{
            margin-bottom: 6px;
            a{
                display: block;
                width: 100%;
                height: 42px;
                padding: 10px 8px;
                line-height: 22px;
                border-radius: 4px;
                font-weight: 700;
                color: var(--text-secondary);
                transition: background-color .06s;
                will-change: background-color;
                letter-spacing: .5px;
                font-size: 14px;
                &:hover{
                    color: var(--primary-color);
                    background-color: var(--module-bg-lighter);
                    transition: background-color .06s;
                }
            }
        }
    }
}
</style>