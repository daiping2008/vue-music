<template>
  <div class="search-wrapper">
    <search-bar @clear="clear" :input="q" @bindIuput="bindSearch" class="search"></search-bar>
    <div v-show="!showRes">
      <h2 class="title">热门搜索</h2>
      <div class="content">
        <span @click="bindSearch(item.first)" v-for="(item, index) in hots" :key="index" class="tag">{{item.first}}</span>
      </div>
      <h2 class="title">历史记录<i @click.stop="clearHis" class="iconfont">&#xe626;</i></h2>
      <div class="his-content">
        <div @click="bindSearch(item)" v-for="(item, index) in his" :key="index" class="his-item">
          {{item}}
          <i @click.stop="delHis(index)" class="iconfont">&#xe61b;</i>
        </div>
      </div>
    </div>
    <div v-show="showRes" class="search-res">
      <h1 v-show="songs.length" class="m-title">歌曲</h1>
      <v-song v-for="item in songs" :key="item.id" :data="item"></v-song>
      <h1 v-show="artists.length" class="m-title">歌手</h1>
      <v-artist v-for="item in artists" :key="item.id" :data="item"></v-artist>
      <h1 v-show="albums.length" class="m-title">专辑</h1>
      <v-albums v-for="item in albums" :key="item.id" :data="item"></v-albums>
    </div>
    <v-loading v-show="isLoad" class="loading"></v-loading>
  </div>
</template>

<script>
import VLoading from '@/components/loading'
import VSong from '@/components/search/item/song'
import VArtist from '@/components/search/item/artist'
import VAlbums from '@/components/search/item/albums'
import SearchBar from '@/components/search/searchBar'
import SearchModel from '@/models/search'
const searchMoedl = new SearchModel()
export default {
  data () {
    return {
      hots: [],
      his: [],
      q: '',
      albums: [],
      artists: [],
      mvs: [],
      order: [],
      playlists: [],
      songs: [],
      showRes: false,
      isLoad: false
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
    clearHis () {
      searchMoedl.clearHis()
      this.his = searchMoedl.getHis()
    },
    delHis (index) {
      searchMoedl.delHis(index)
      this.his = searchMoedl.getHis()
    },
    clear () {
      this.init()
    },
    bindSearch (value) {
      this.q = value
      searchMoedl.setHis(value)
      this.showRes = true
      this.isLoad = true
      searchMoedl.getSearchSuggest(value)
        .then(res => {
          this.albums = res.result.albums
          this.artists = res.result.artists
          this.mvs = res.result.mvs
          this.order = res.result.order
          this.playlists = res.result.playlists
          this.songs = res.result.songs
          this.isLoad = false
        })
    },
    init () {
      this.albums = []
      this.artists = []
      this.mvs = []
      this.order = []
      this.playlists = []
      this.songs = []
      this.showRes = false
      this.q = ''
      this.his = searchMoedl.getHis()
      this.isLoad = false
    }
  },
  components: {
    SearchBar,
    VAlbums,
    VArtist,
    VSong,
    VLoading
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.search-wrapper{
  padding: px2rem(150) px2rem(40) 0;
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
  position: fixed;
  left: 0;
  top: px2rem(200);
  width: 100%;
  padding: 0 px2rem(30);
  box-sizing: border-box;
}

.search-res{
  margin-top: px2rem(40);
  .m-title{
    color: $main-color;
    font-size: px2rem(36);
    margin-bottom: px2rem(10);
    margin-top: px2rem(30);
  }
}
.loading{
  position: absolute;
  top: px2rem(520);
  left: 50%;
}
</style>
