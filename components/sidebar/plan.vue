<template>
  <div class="plan">
      <div class="plan-bg"></div>
      <div class="plan-wrapper"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.plan{
    position: fixed;
    top: 70px;
    left: 50%;
    margin-left: 260px;
    width: 260px;
    padding: 6px;
    height: 272px;
    border-radius: 4px;
    background-color: var(--module-bg);
    .plan-bg{
        height: 100%;
        width: 100%;
        background-image: url('@/static/plan.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.3;
        z-index: 1;
    }
    .plan-wrapper{
        position: relative;
        z-index: 2;
    }
}
</style>