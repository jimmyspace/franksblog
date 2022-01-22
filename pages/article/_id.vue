<template>
  <div class="container">
    <div class="page-content">
      文章详情
      {{details}}
    </div>
  </div>
</template>

<script>
import Articles from '@/components/articles/index.vue';
export default {
  components: {
    Articles
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
  methods: {
    
  },
  mounted(){
    
  }
}
</script>

<style lang="less" scoped>

</style>
