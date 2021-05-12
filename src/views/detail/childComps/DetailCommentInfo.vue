<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.info-header {
  width: 100%;
  height: 60px;
  /* background-color: deeppink; */
  border-top: 4px solid rgb(199, 205, 211);
  border-bottom: 2px solid rgb(199, 205, 211);
  line-height: 60px;
}
.header-title{
    float: left;
    margin-left: 20px;
}
.header-more{
    float: right;
    margin-right: 20px;
}
.info-user{
    width: 100%;
    height: 70px;
    line-height: 70px;
}
.info-user img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 15px;
    float: left;
}
.info-user span{
    /* margin-top: -40px; */
    float: left;
}
.info-detail p{
    font-size: 14px;
}
.info-imgs{
    display: flex;
    height: 200px;
    padding-bottom: 20px;
    border-bottom: 4px solid rgb(202, 196, 187);
}
.info-imgs img{
    height: 200px;
    flex: 1;
}
</style>