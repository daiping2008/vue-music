<template>
  <div class="rank-wrapper">
    <v-item v-for="(item, index) in cloudMusic" :key="index" :data="item"></v-item>
    <v-loading v-show="!cloudMusic.length" class="loading"></v-loading>
  </div>
</template>

<script>
import VItem from '@/components/rank/item'
import VLoading from '@/components/loading'
import RankModel from '@/models/rank'
const rankModel = new RankModel()
const CLOUD_MUSIC = [0, 1, 2, 3, 4, 15, 23]
export default {
  data () {
    return {
      cloudMusic: []
    }
  },
  mounted () {
    CLOUD_MUSIC.forEach(ele => {
      rankModel.getHot(ele)
        .then(res => {
          this.cloudMusic.push(res.playlist)
        })
    })
  },
  components: {
    VItem,
    VLoading
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.loading{
  position: fixed;
  top: px2rem(300);
  left: 50%;
}
</style>
