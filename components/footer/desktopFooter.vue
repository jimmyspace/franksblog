<template>
    <div class="desktop-footer">
        <div class="motto">{{$t('footer.motto')}}</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.desktop-footer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    color: var(--text-secondary);
    background-color: var(--module-bg);
    transition: background-color .25s;
}
</style>