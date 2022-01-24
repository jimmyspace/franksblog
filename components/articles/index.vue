<template>
  <div class="articles">
      <ul class="article-ul">
          <li class="article-li" v-for="item in dataList" :key="item.id">
              <router-link  class="article-poster" :to="{ path: `/article/${item.type}_${item.id}` }">
                 <img src="https://cocobit-course-file-1252614306.cos.ap-chengdu.myqcloud.com/2/%E5%AE%9E%E9%AA%8C2.png" alt="">
              </router-link>
              <div class="article-content">
                  <router-link class="article-title" :to="{ path: `/article/${item.type}_${item.id}` }">
                    {{item.title}}
                  </router-link>
                  <div class="article-brief">
                      <div class="brief-text">
                          {{item.brief}}
                      </div>
                  </div>
                  <div class="article-tips">
                      <div class="article-author">{{item.author}}</div>
                      <div class="article-label">{{item.label}}</div>
                      <div class="article-time">{{item.time}}</div>
                  </div>
              </div>
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
.articles{
    .article-ul{
        .article-li{
            display: flex;
            padding: 6px;
            margin-bottom: 10px;
            height: 132px;
            border-radius: 4px;
            background-color: var(--module-bg);
            transition: background-color .1s;
            overflow: hidden;
            &:hover{
                background-color: var(--module-bg-opaque);
                transition: background-color .1s;
                .article-poster{
                    opacity: 1;
                    transition: opacity .2s;
                    img{
                        margin: 0 -5%;
                        width: 110%;
                        transition: all 0.2s;
                    }
                }
            }
            .article-poster{
                display: flex;
                width: 190px;
                height: 120px;
                border-radius: 2px;
                opacity: 0.8;
                transition: opacity .2s;
                overflow: hidden;
                img{
                    margin: 0;
                    flex-shrink: 0;
                    width: 100%;
                    transition: all 0.2s;
                }
            }
            .article-content{
                display: flex;
                flex-direction: column;
                flex: 1;
                padding-left: 10px;
                .article-title{
                    padding: 0;
                    font-weight: 700;
                    transition: padding .25s;
                    text-decoration: none;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: var(--text-color);
                    &:hover{
                        padding: 0 0 0 6px;
                        transition: padding .25s;
                        text-decoration: underline;
                    }
                }
                .article-brief{
                    flex: 1;
                    padding-top: 3px;
                    font-size: 13px;
                    .brief-text{
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                    }
                }
                .article-tips{
                    display: flex;
                    justify-content: space-between;
                    height: 26px;
                    padding: 4px 0;
                    line-height: 18px;
                    font-size: 12px;
                    color: var(--text-secondary);
                }
            }
        }
    }
}
</style>