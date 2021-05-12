<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center" class="shopping">购物街</div>
    </nav-bar>
   <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll" @pullingUp="loadMore" :pullUpLoad="true">
      <home-swiper :banners="banners" />
    <reconmmend-view :recommends="recommends" class="recommends" />
    <feature />
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick" ref="tabControl"
    ></tab-control>
    <goods-list :goods="showGoods"></goods-list>
   </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "../../tabbar/NavBar.vue";
import { getHomeMultidata, getHomeGoods } from "../../network/home.js";
import ReconmmendView from "./childComps/ReconmmendView.vue";
import Feature from "./childComps/Feature.vue";
import TabControl from "../../components/tabControl/TabControl.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import GoodsList from "../../components/goods/GoodsList.vue";
import Scroll from '../../components/common/scroll/Scroll.vue';
import BackTop from '../../components/content/backTop/BackTop.vue';

export default {
  components: {
    NavBar,
    ReconmmendView,
    HomeSwiper,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop:true,
    };
  },
  computed:{
    showGoods(){
    return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick(){
  //  console.log('backTop')
  this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
     this.isShowBackTop=-position.y>1000
    },
    loadMore(){
    //  console.log( "上拉加载更多")
    this.getHomeGoods(this.currentType)
    this.$refs.scroll.refresh()
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(this.banners);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      });
    },

  },
};
</script>

<style scoped>
.home-nav {
  background-color: pink;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 9;
}
li {
  list-style: none;
}
.shopping {
  position: sticky;
  top: 0px;
}
/* .recommends{
  margin-top: 100px;
} */
.content{
  height: 600px;
  overflow: hidden;
}
</style>