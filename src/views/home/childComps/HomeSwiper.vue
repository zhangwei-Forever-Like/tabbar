<template>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index" class="homeSwiper">
        <img :src="item.image" alt="">
      </swiper-item>
    </swiper>
    <!-- <div v-for="(item, index) in banners" :key="index" class="homeSwiper">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </div> -->
     <!-- <el-carousel :interval="2000" type="card" height="250px">
	    <el-carousel-item v-for="item in banners" :key="item">
	        <img :src="item.img" style="height:100%;width:100%;">
	    </el-carousel-item>
	 </el-carousel> -->
</template>

<script>
  import {Swiper, SwiperItem} from '../../../components/common/swiper'

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper, 
    SwiperItem
  },
};
</script>

<style>
 .swiper{
  width: 100%;
  height: 200px;
  position: relative;
} 
/* .homeSwiper{
 position: absolute;
} */
.homeSwiper img{
  width: 100%;
  height: 100%;
} 
</style>