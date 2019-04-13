<template>
  <div id="app">
    <v-head></v-head>
    <v-tab></v-tab>
    <div class="v-container">
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
.v-container{
  padding-top:px2rem(180);
}
</style>
