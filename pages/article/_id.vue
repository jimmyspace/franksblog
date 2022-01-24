<template>
  <div class="container">
    <div class="page-content">
      <div class="details">
        <div class="details-type">{{details.type}}</div>
        <h1>{{details.title}}</h1>
        <div class="details-tips">
          <span class="author">作者：{{details.author}}</span>
          <span class="label">标签：{{details.label}}</span>
          <span class="time">时间：{{details.time | formatDate}}</span>
        </div>
        <div class="details-banner">
          <img src="https://cocobit-course-file-1252614306.cos.ap-chengdu.myqcloud.com/2/%E5%AE%9E%E9%AA%8C2.png" alt="">
        </div>
        <div class="details-content">
          <html-content :htmlString="details.content"></html-content>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HtmlContent from '@/components/articles/html-content.vue';
import formatDate from '@/utils/formatDate.js';
export default {
  components: {
    HtmlContent
  },
  async asyncData({ store, route }){
    await store.dispatch('getDetails', route.params.id);
    return
  },
  computed: {
    details(){
      return this.$store.state.details
    }
  },
  filters: {
    formatDate(time){
      const data = new Date(Number(time));
      return formatDate(data, 'yyyy-MM-dd hh:mm')
    }
  },
  methods: {
    
  },
  mounted(){
    
  }
}
</script>

<style lang="less" scoped>
.details{
  position: relative;
  padding: 1rem 2rem;
  border-radius: 4px;
  background-color: var(--module-bg);
  transition: background-color .25s;
  overflow: hidden;
  .details-type{
    position: absolute;
    top: -11px;
    left: -32px;
    transform: rotate(-45deg);
    width:98px;
    height: 56px;
    line-height: 78px;
    text-align: center;
    transform-origin: center;
    color: #fff;
    font-weight: 700;
    font-size: 12px;
    background-color: #0088f5b3;
  }
  h1{
    font-weight: 700;
    font-size: 19px;
    margin: 10px 0;
    text-align: center;
  }
  .details-tips{
    margin-bottom: 20px;
    text-align: center;
    font-size: 12px;
    span{
      &:nth-child(2){
        margin: 0 20px;
      }
    }
  }
  .details-banner{
    width: 100%;
    height: 200px;
    border-radius: 2px;
    border: 0.618rem solid var(--module-bg-darker-1);
    opacity: .9;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  .details-content{
    margin: 20px 0 40px;
  }
}
</style>
