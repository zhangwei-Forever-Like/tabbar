<template>
  <div class="goods-info"  v-if="Object.keys(detailInfo).length!=0">
      <div class="infi-desc clear-fix">
          <div class="start">
          </div>
          <div class="desc">{{detailInfo.desc}}</div>
          <div class="end"></div>
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
          <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad" alt="">
      </div>
  </div>
</template>

<script>
export default {
props:{
    detailInfo:{
        type:Object
    }
},
data(){
    return{
        counter:0,
        imagesLength:0
    }
},
methods:{
    imgLoad(){
        if(++this.counter===this.imagesLength){
            this.$emit('imageLoad')
        }
    }
},
watch:{
    detailInfo(){
        this.imagesLength=this.detailInfo.detailImage[0].list.length
    }
}
}
</script>

<style>
.infi-desc .desc{
    font-size: 13px;
    margin-left: 10px;
    margin-top: 20px;
}
.info-key{
    font-size: 14px;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
}
.info-list img{
    width: 100%;
    height: 350px;
}
</style>