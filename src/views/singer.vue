<template>
  <div class="container">
    <div v-for="(item, index) in artists" :key="index" ref="listGroup">
      <h1 class="title" :ref="item.title">{{item.title}}</h1>
      <v-singer v-for="d in item.items" :key="d.id" :data="d"></v-singer>
    </div>
    <div ref="letter" @touchmove.stop.prevent="touchMove" v-if="letters.length" class="letter-wrapper">
      <div :class="{active:letterIndex===index}" @click="bindClick(index)" v-for="(item, index) in letters" :key="index">{{item.slice(0,1)}}</div>
    </div>
    <div ref="fixedtitle" v-show="fixedTitle" class="title-fixed">{{fixedTitle}}</div>
    <v-loading v-show="!artists.length" class="loading"></v-loading>
  </div>
</template>

<script>
import VLoading from '@/components/loading'
import VSinger from '@/components/singer/item'
import SingerModel from '@/models/singer'
import pinyin from 'pinyin'
const singerModel = new SingerModel()
const HOT_NAME = '热门'
const HOT_SINGERS = 10
export default {
  data () {
    return {
      artists: [],
      listHeight: [],
      fixedTitle: '',
      letterIndex: 0,
      titleHeight: 0,
      diff: 0
    }
  },
  computed: {
    letters () {
      const res = []
      for (let i = 0; i < this.artists.length; i++) {
        res.push(this.artists[i].title)
      }
      return res
    }
  },
  mounted () {
    singerModel.getSinger()
      .then(res => {
        this.artists = this._normalizeArtists(res.artists)
      })

    window.addEventListener('scroll', e => {
      const scrollTop = document.documentElement.scrollTop
      for (let index = 0; index < this.listHeight.length; index++) {
        const height = this.listHeight[index]
        const height2 = this.listHeight[index + 1]
        if (index <= this.listHeight.length - 2 && scrollTop >= height - 1 && scrollTop < height2) {
          this.fixedTitle = this.letters[index]
          this.diff = height2 - scrollTop
          // console.log(this.diff)
          this.letterIndex = index
        }
      }
    }, 100)
  },
  watch: {
    artists () {
      setTimeout(() => {
        const list = this.$refs.listGroup
        this.titleHeight = list[0].children[0].clientHeight
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < list.length; i++) {
          height += list[i].clientHeight
          this.listHeight.push(height)
        }
      }, 100)
    },
    diff (newVal) {
      if (newVal > 0 && newVal <= this.titleHeight) {
        console.log(newVal)
        this.$refs.fixedtitle.style.transform = `translate3d(0,${newVal - this.titleHeight}px,0)`
      } else {
        this.$refs.fixedtitle.style.transform = 'translate3d(0, 0, 0)'
      }
    }
  },
  methods: {
    touchMove (e) {
      this.startY2 = e.touches[0].clientY
      const index = parseInt((this.startY2 - this.$refs.letter.offsetTop) / 20)
      this._scrollTo(index)
    },
    bindClick (index) {
      this._scrollTo(index)
      this.fixedTitle = this.letters[index]
    },

    _scrollTo (index) {
      // 检测index是否合法
      if (index < 0 || index >= this.listHeight.length) return

      window.scrollTo({
        top: this.listHeight[index],
        bahavior: 'smooth'
      })
      this.letterIndex = index
    },
    _normalizeArtists (artists) {
      const map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      for (let i = 0; i < HOT_SINGERS; i++) {
        map['hot'].items.push(artists[i])
      }
      artists.forEach((ele) => {
        // 获取首字母
        const key = pinyin(ele.name)[0][0].charAt(0).toUpperCase()
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(ele)
      })
      const res = []
      const hot = []
      for (const key in map) {
        if (key.match(/[A-Z]/)) {
          res.push(map[key])
        }
        if (map[key].title === HOT_NAME) {
          hot.push(map[key])
        }
      }
      res.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(res)
    }
  },
  components: {
    VSinger,
    VLoading
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.title,
.title-fixed{
  color: $main-color;
  background-color: $main-bg1;
  height: px2rem(60);
  line-height: px2rem(60);
  padding-left: px2rem(30);
  font-size: px2rem(34);
  font-weight: 700;
}
.title-fixed{
  position: fixed;
  top: px2rem(180);
  left: 0;
  width: 100%;
}
.letter-wrapper{
  flex-direction: column;
  position: fixed;
  top: px2rem(300);
  right: px2rem(6);
  z-index: 100;
  color: $main-color;
  > div{
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    &.active{
      color: $main-color-active;
    }
  }
}
.loading{
  position: absolute;
  left: 50%;
  top: px2rem(550);
}
</style>
