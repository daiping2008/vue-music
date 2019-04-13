<template>
  <div id="app">
    <v-head></v-head>
    <v-tab></v-tab>
    <div class="container">
      <router-view ></router-view>
    </div>
  </div>
</template>
<script>
import VHead from '@/components/head/'
import VTab from '@/components/tab'
export default {
  components: {
    VHead,
    VTab
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.container{
  position: fixed;
  top:px2rem(180);
  left: 0;
  right: 0;
  bottom:0;
  overflow-y: auto;
  background: $main-bg;
}
</style>
