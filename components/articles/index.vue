<template>
  <div class="articles">
      <ul class="article-ul">
          <li class="article-li" v-for="item in dataList" :key="item.id">
              <div class="article-title">{{item.title}}</div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: { 
       dataList: {
           type: Array,
           default() {
               return []
           }
       } 
    }
}
</script>

<style lang="less" scoped>

</style>