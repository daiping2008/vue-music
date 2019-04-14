<template>
  <div class="container">
    <div class="name">{{data.name}}</div>
    <div class="artist">
      {{data.artists[0].name}}
      <i class="iconfont">&#xe62a;</i>
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
  padding: px2rem(30) 0;
  box-sizing: border-box;
  @include left();
  justify-content: space-between;
  font-size: px2rem(30);
  color: $main-color;
  .name{
    flex: 1;
    margin-right: px2rem(30);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}

</style>
