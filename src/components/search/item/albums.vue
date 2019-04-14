<template>
  <div class="container">
    <img class="img" :src="data.artist.picUrl" alt="">
    <div class="content">
      <div class="name">{{data.name}}</div>
      <div class="desc">
        <div class="title">{{data.artist.name}}</div>
        <div class="date">{{data.publishTime | dateFormat}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['data'],
  filters: {
    dateFormat (value) {
      const date = new Date(value)
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate() + 1
      return `${year}.${month}.${day}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.container{
  display: flex;
  padding: px2rem(20) 0;
  box-sizing: border-box;
  .img{
    flex: 0 0 px2rem(200);
    width: px2rem(200);
    height: px2rem(200);
  }
  .content{
    flex: 1;
    display: flex;
    flex-direction: column;
    color: $main-color;
    font-size: px2rem(40);
    justify-content: center;
    margin-left: px2rem(30);
    .name{
      margin-bottom: px2rem(10);
    }
    .desc{
      display: flex;
      flex-direction: row;
      font-size: px2rem(30);
      @include left();
      .title{
      }
      .date{
        color: $main-color-active;
      }
    }

  }
}
</style>
