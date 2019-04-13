<template>
  <div class="search-wrapper">
    <search-bar :input="q" @bindIuput="bindSearch" class="search"></search-bar>
    <div>
      <h2 class="title">热门搜索</h2>
      <div class="content">
        <span @click="bindSearch(item.first)" v-for="(item, index) in hots" :key="index" class="tag">{{item.first}}</span>
      </div>
      <h2 class="title">历史记录<i class="iconfont">&#xe626;</i></h2>
      <div class="his-content">
        <div @click="bindSearch(item)" v-for="(item, index) in his" :key="index" class="his-item">{{item}}<i class="iconfont">&#xe61b;</i></div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/search/searchBar'
import SearchModel from '@/models/search'
const searchMoedl = new SearchModel()
export default {
  data () {
    return {
      hots: [],
      his: [],
      q: ''
    }
  },
  mounted () {
    this.his = searchMoedl.getHis()
    searchMoedl.getSearchHot()
      .then(res => {
        this.hots = res.result.hots
      })
  },
  methods: {
    bindSearch (value) {
      this.q = value
      searchMoedl.setHis(value)
      searchMoedl.getSearchSuggest(value)
        .then(res => {
          console.log(res)
        })
    }
  },
  components: {
    SearchBar
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.search-wrapper{
  padding: 0 px2rem(40);
  box-sizing: border-box;
  .title{
    color: $main-color2;
    font-size: px2rem(40);
    line-height: px2rem(40);
    margin: px2rem(50) 0;
    i.iconfont{
      float: right;
    }
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    .tag{
      color: $main-color2;
      background-color: $main-bg1;
      padding: px2rem(8) px2rem(20);
      border-radius: px2rem(10);
      margin: 0 px2rem(20) px2rem(20) 0;
    }
  }
  .his-content{
    .his-item{
      width: 100%;
      color: $main-color2;
      margin-bottom: px2rem(25);
      i.iconfont{
        float: right;
      }
    }
  }
}
.search{
  margin-top: px2rem(30);
}
</style>
