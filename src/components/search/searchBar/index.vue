<template>
  <div class="container">
    <div class="search-bar">
      <i class="iconfont">&#xe60a;</i>
      <input @keyup.enter="bindKeyup" v-model="q" type="text" placeholder="搜索歌曲，歌手" name="" id="">
      <i class="iconfont">&#xe6b2;</i>
    </div>
  </div>
</template>
<script>
export default {
  props: ['input'],
  data () {
    return {
      q: ''
    }
  },
  methods: {
    bindKeyup () {
      this.$emit('bindIuput', this.q)
    }
  },
  watch: {
    input () {
      this.q = this.input
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.container{
  @include center();
  .search-bar{
    display: flex;
    flex-direction: row;
    height: px2rem(120);
    background-color: $main-bg1;
    color: $main-color;
    padding: 0 px2rem(30);
    box-sizing: border-box;
    border-radius: px2rem(30);
    @include center();
    > i{
      font-size: px2rem(55);
      width: px2rem(40);
      height: px2rem(40);
      color: $main-bg;
      font-weight: 700;
    }
    > input{
      flex: 1;
      background-color: transparent;
      border: none;
      outline: none;
      margin: 0 px2rem(30);
      font-weight: 700;
      font-size: px2rem(36);
    }
  }

}
</style>
