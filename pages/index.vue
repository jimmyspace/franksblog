<template>
  <div class="container">
    <div class="page-content">
      <articles :dataList="articles"></articles>
    </div>
  </div>
</template>

<script>
import Articles from '@/components/articles/index.vue';
export default {
  components: {
    Articles
  },
  async asyncData({ store }){
    await store.dispatch('getCooks');
    return
  },
  computed: {
    articles(){
      return this.$store.state.cooks
    }
  },
  methods: {
    
  },
  mounted(){
    
  }
}
</script>

<style lang="less" scoped>

</style>
