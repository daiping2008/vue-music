<template>
  <div class="recommend">
    <v-swiper :banners="banners"></v-swiper>
    <div class="content">
      <h1 class="title">热门歌单推荐</h1>
      <v-loading v-show="!list.length" class="loading"></v-loading>
      <v-rec-item v-for="item in list" :key="item.id" :data="item"></v-rec-item>
    </div>
  </div>
</template>

<script>
import VSwiper from '@/components/swiper'
import VRecItem from '@/components/recommend/item'
import VLoading from '@/components/loading'
import RecomModel from '@/models/recom'
const recomModel = new RecomModel()
export default {
  data () {
    return {
      banners: [],
      list: []
    }
  },
  mounted () {
    recomModel.getBanner()
      .then(res => {
        this.banners = res.banners
      })
    recomModel.getRecommendList()
      .then(res => {
        this.list = res.result
      })
  },
  components: {
    VSwiper,
    VRecItem,
    VLoading
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.recommend{
  position: relative;
}
.loading{
  position: absolute;
  left: 50%;
  top: px2rem(550);
}
.title{
  color: $main-color-active;
  font-size: px2rem(38);
  text-align: center;
  margin: px2rem(40) 0 px2rem(10);
  font-weight: 700;
}

</style>
