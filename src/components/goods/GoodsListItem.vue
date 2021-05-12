<template>
  <div class="goodsListItem" @click="itemClick">
    <img :src="showImage" alt="" />
    <div class="goods">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods:{
    itemClick(){
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  }
};
</script>

<style>
.goodsListItem {
  width: 44%;
  height: 270px;
  display: inline-block;
  position: relative;
  margin: 10px;
}
.goodsListItem img {
  width: 100%;
  height: 250px;
}
.goods p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 2px;
}
.goodsListItem .price{
color: deeppink;
font-size: 12px;
margin-top: 2px;
/* background-color: blue; */
/* text-align: center; */
margin-left: 30px;
/* margin-top: 2px; */
/* position: absolute; */
}
.goods .collect{
    font-size: 12px;
    margin-left: 30px;
    position: relative;
}
.goods .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../img/star.png") 0 0/14px 14px;
}
</style>