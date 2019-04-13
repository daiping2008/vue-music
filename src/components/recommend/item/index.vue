<template>
  <div class="container">
    <img class="img" v-lazy="data.picUrl" alt="">
    <div class="content">
      <h2 class="title">{{data.name}}</h2>
      <p class="sub-title">{{data.copywriter}}</p>
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
  padding: px2rem(30) px2rem(40);
  box-sizing: border-box;
  .img {
    flex: 0 0 px2rem(120);
    width: px2rem(120);
    height: px2rem(120);
  }
  .content{
    flex: 1;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    padding-left: px2rem(40);
    padding-right: px2rem(40);
    box-sizing: border-box;
    .title{
      width: 90%;
      color: $main-color3;
      font-size: px2rem(36);
      line-height: px2rem(40);
      text-overflow:ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .sub-title{
      width: 90%;
      color: $main-color2;
      align-items: center;
      font-size: px2rem(30);
      line-height: px2rem(34);
      text-overflow: ellipsis;
      white-space:nowrap;
      overflow: hidden;
    }
  }
}
</style>
