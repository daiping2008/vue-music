<template>
  <div class="container">
    <img class="img" v-lazy="data.img1v1Url" alt="">
    <div class="content">
      {{data.name}}
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
  padding: px2rem(20) px2rem(40);
  box-sizing: border-box;
  font-size: px2rem(30);
  .img{
    flex: 0 0 px2rem(120);
    width: px2rem(120);
    height: px2rem(120);
    border-radius: 50%;
  }
  .content{
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: px2rem(40);
    color: $main-color;
  }
}
</style>
