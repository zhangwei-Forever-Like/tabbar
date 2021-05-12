<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
props: {
  path:String
},
data(){
  return{

  }
},
methods:{
  itemClick(){
    this.$router.replace(this.path)
  }
}
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
</style>