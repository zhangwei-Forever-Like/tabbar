<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }" @click="events(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods:{
      events(index){
        this.currentIndex=index
        this.$emit('tabClick',index)
      }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  z-index: 9;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active {
  color: deeppink;
  border-bottom: 3px solid deeppink;
}
</style>