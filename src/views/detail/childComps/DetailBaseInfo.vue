<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.info-title {
  font-size: 18px;
  margin-top: 4px;
  /* margin-bottom: 0px; */
}
.info-price {
  margin-top: 10px;
  margin-left: 6px;
  position: relative;
  margin-bottom: 0px;
}
.info-price .n-price {
  color: deeppink;
  font-size: 20px;
}
.info-price .o-price {
  text-decoration: line-through;
  color: dimgray;
  font-size: 13px;
}
.info-price .discount {
  /* color: deeppink; */
  font-size: 14px;
  border-radius: 20px;
  display: inline-block;
  width: 65px;
  height: 20px;
  background-color: rgb(230, 28, 28);
  top: -5px;
  position: absolute;
  text-align: center;
}
.info-other {
  margin-top: 30px;
  height: 30px;
  display: flex;
  border-bottom: 1px solid rgb(181, 189, 197);
}
.info-other span {
  flex: 1;
  font-size: 12px;
  /* color: aliceblue; */
}
.info-service {
  width: 100%;
  height: 70px;
  line-height: 70px;
  font-size: 14px;
  display: flex;
  border-bottom:  2px solid rgb(180, 167, 167);
}
.info-service-item {
  flex: 1;
}
.info-service-item img {
  width: 15px;
  height: 15px;
}
</style>