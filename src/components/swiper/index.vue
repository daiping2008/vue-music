<template>
  <swiper class="v-swiper" v-if="banners.length" :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item, index) in banners" :key="index">
      <a>
        <img class="banner-item" :src="item.imageUrl" :alt="item.typeTitle">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  props: ['banners'],
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }

}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.banner-item{
  height: px2rem(350);
  width: 100%;
}
.v-swiper /deep/ .swiper-pagination-bullet{
  background: #888!important;
}
.v-swiper /deep/ .swiper-pagination-bullet-active{
  background: #d3d3d3!important;
}
</style>
