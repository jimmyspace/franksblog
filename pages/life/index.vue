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
    await store.dispatch('getLifes');
    return
  },
  computed: {
    articles(){
      return this.$store.state.lifes
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
