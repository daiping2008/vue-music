<template>
  <div class="head">Music
    <i class="iconfont user">&#xe655;</i>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.head{
  position: fixed;
  top: 0;
  width: 100%;
  height: px2rem(80);
  left: 0;
  background-color: $main-bg;
  color: $main-color-active;
  line-height: px2rem(80);
  text-align: center;
  font-size: px2rem(40);
  .user {
    position: absolute;
    font-size: px2rem(60);
    right: px2rem(10);
    top: 0;
  }
}
</style>
