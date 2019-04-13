<template>
  <div class="tab-container">
    <router-link active-class="active" tag="div" :to="tab.to" v-for="(tab,index) in tabs" :key="index">
      <span>{{tab.name}}</span>
    </router-link>
  </div>
</template>
<script>
import { config } from '@/config'
export default {
  data () {
    return {
      tabs: config.tabs
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.tab-container{
  display: flex;
  flex-direction: row;
  @include center();
  position: fixed;
  top: px2rem(80);
  left: 0;
  width: 100%;
  height: px2rem(100);
  background-color: $main-bg;
  > div{
    flex: 1;
    display: flex;
    position: relative;
    height: 100%;
    @include center();
    color: $main-color;
    font-size: px2rem(30);
    font-weight: 700;
    span{
      display: flex;
      position: relative;
      @include center();
      height: 100%;
      &::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: px2rem(6);
        background-color: $main-color-active;

      }
    }
    &.active{
      color: $main-color-active;
    }

  }
}
</style>
