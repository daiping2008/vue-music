<template>
  <div class="container">
    <img v-lazy="data.coverImgUrl" alt="">
    <div class="content">
      <div v-for="(item, index) in data.tracks.slice(0, 3)" :key="index" class="item">{{index+1}} {{item.name}}</div>
    </div>
  </div>
</template>
<script>

export default {
  props: ['data']
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.container{
  display: flex;
  flex-direction: row;
  padding: px2rem(20) px2rem(40);
  box-sizing: border-box;
  > img{
    flex: 0 0 px2rem(250);
    width: px2rem(250);
    height: px2rem(250);
  }
  .content{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: $main-color;
    font-size: px2rem(36);
    margin-left: px2rem(30);
  }
}
</style>
