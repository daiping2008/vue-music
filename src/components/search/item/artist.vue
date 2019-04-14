<template>
  <div class="container">
    <img class="img" :src="data.picUrl" alt=""/>
    <div class="name">{{data.name}}</div>
    <div v-if="data.alias.length" class="sub-name">({{data.alias[0]}})</div>
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
  @include left();
  color: $main-color;
  padding: px2rem(30) 0;
  font-size: px2rem(30);
  .img{
    width:px2rem(200);
    height:px2rem(200);
    border-radius:50%;
  }
  .name {
    margin-left: px2rem(30);
    margin-right: px2rem(20);
    color: $main-color-active;
  }
}
</style>
