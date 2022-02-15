<template>
  <div class="plan">
      <div class="plan-bg"></div>
      <div class="plan-wrapper">
          <div class="plan-title">{{$t('plan.title')}}</div>
          <ul class="plan-ul">
              <li class="plan-li done">
                  Nuxt(vue-ssr)
              </li>
              <li class="plan-li">
                  Express
              </li>
              <li class="plan-li">
                  Nginx
              </li>
              <li class="plan-li">
                  Css
              </li>
              <li class="plan-li">
                  Webpack
              </li>
              <li class="plan-li">
                  Vue
              </li>
              <li class="plan-li">
                  React
              </li>
              <li class="plan-li">
                  Eletorn
              </li>
              <li class="plan-li">
                  Typescript
              </li>
              <li class="plan-li">
                  Android
              </li>
              <li class="plan-li">
                  Machine Learning
              </li>
              <li class="plan-li">
                 Security
              </li>
              <li class="plan-li">
                  Algorithms
              </li>
          </ul>
      </div>
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
    height: 320px;
    border-radius: 4px;
    background-color: var(--module-bg);
    z-index: 9;
    .plan-bg{
        position: absolute;
        top: 0;
        left: 0;
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
        padding: 0 10px;
        .plan-title{
            height: 40px;
            line-height: 40px;
            font-weight: bold;
            text-align: center;
            color: var(--link-color);
        }
        .plan-ul{
            .plan-li{
                float: left;
                margin: 0 10px 10px 0;
                height: 30px;
                line-height: 30px;
                padding: 0 8px;
                color: var(--text-secondary);
                border-radius: 4px;
                &.done{
                    color: var(--link-color);
                    background-color: var(--module-bg-darker-2);
                }
            }
        }
    }
}
</style>