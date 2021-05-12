<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  padding:  15px 0 30px;
  text-align: center;
  font-size: 12px;
  border-bottom: 8px solid #eee;
  /* margin-top: 100px; */
}
.recommend-item{
   flex: 1;
}
.recommend-item img{
    width: 65px;
    height: 65px;
}
.recommend-item a{
   text-decoration: none;
   color: rgb(109, 88, 88);
}
</style>