<template>
  <div>
      <nav-bar class="nav"> 
          <div slot="left" class="left">
              <img src="../../../img/x.png" alt="">
          </div>
          <div slot="center" class="title">
              <div v-for="(item,index) in titles" :key="index" class="title-item" :class="{active:index===currentIndex}" @click="titleClick(index)">{{item}}</div>
          </div>
      </nav-bar>
  </div>
</template>
    
<script>
import NavBar from '../../../tabbar/NavBar.vue'
export default {
  components: { NavBar },
  data(){
      return{
          titles:['商品','参数','评论','推荐'],
          currentIndex:0
      }
  },
  methods:{
      titleClick(index){
          this.currentIndex=index
          this.$emit('titleClick',index);
      }
  }
}
</script>

<style>
.nav{
    border-bottom: 1px solid rgb(235, 225, 225);
}
 .title{
     display: flex;
     font-size: 13px;
     /* border-bottom: 1px solid black; */
 }
 .title-item{
     flex: 1;
 }
 .active{
     color: deeppink;
 }
 .left{
     margin-top: 3px;
 }
</style>