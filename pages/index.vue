<template>
  <div class="container">
    <div class="page-content"></div>
  </div>
</template>

<script>

export default {
  components: {
  },
  methods: {
    doRequest() {
      this.$axios.get('/api/code?type=android');
    }
  },
  mounted(){
    this.doRequest();
  }
}
</script>

<style lang="less" scoped>

</style>
