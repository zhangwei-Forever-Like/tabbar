<template>
  <div id="app">
    <router-view></router-view>
<TabBar>
  <TabBarItem path="/home">
    <img slot="item-icon" src="./img/home.png">
    <div slot="item-text">首页</div>
  </TabBarItem> 
  <tab-bar-item path="/category"><img slot="item-icon" src="./img/sort.png">
    <div slot="item-text">分类</div></tab-bar-item>
 <tab-bar-item path="/cart"><img slot="item-icon" src="./img/shopping.png">
    <div slot="item-text">购物车</div></tab-bar-item>
 <tab-bar-item path="/profile"><img slot="item-icon" src="./img/my.png">
    <div slot="item-text">我的</div></tab-bar-item>
  </TabBar>
 
  </div>
</template>

<script>
import TabBar from "./tabbar/TabBar.vue";
import TabBarItem from "./tabbar/TabBatItem";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
img {
  width: 20px;
  height: 20px;
}
</style>
