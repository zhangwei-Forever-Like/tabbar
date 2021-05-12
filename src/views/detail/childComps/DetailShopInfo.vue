<template>
  <div class="shop-info">
      <div class="shop-top">
          <img :src="shop.logo" alt="">
          <span class="title">{{shop.name}}</span>
      </div>
      <div class="shop-middle">
          <div class="shop-middle-item shop-middle-left">
            <div class="info-sells">
                <div class="sells-count">
                    {{shop.sells|sellCountFilter}}
                </div>
                <div class="sells-text">总销量</div>
            </div>
            <div class="info-goods">
                <div class="goods-count">
                    {{shop.goodsCount}}
                </div>
                <div class="goods-text">全部宝贝</div>
            </div>
          </div>
          <div class="shop-middle-item shop-middle-right">
              <table>
                  <tr v-for="(item,index) in shop.score" :key="index">
                      <td>{{item.name}}</td>
                      <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
                      <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ?'高':'低'}}</span></td>
                  </tr>
              </table>
          </div>
      </div>
      <div class="shop-bottom">
          <div class="enter-shop">进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
      shop:{
          type:Object,
          default(){
              return{}
          }
      },
  },
      filters:{
          sellCountFilter:function(value){
              if(value<10000) return value;
              return (value/10000).toFixed(1)+'万'
          }
      }
}
</script>

<style>
.shop-top{
    width: 100%;
    height: 70px;
    line-height: 70px;
}
.shop-top img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    float: left;
    margin:10px 10px 0;
    border: 1px solid rgb(172, 169, 166);
}
.shop-top span{
    font-size: 14px;
}
.shop-middle{
    width: 100%;
    height: 90px;
}
.shop-middle-left{
    width: 50%;
    height: 60px;
    /* background-color: aqua; */
    float: left;
}
.shop-middle-item .info-sells{
    float: left;
    margin-left: 20px;
    margin-top: 20px;       
}
.shop-middle-item .info-goods{
    float: left;
     margin-left: 20px;
    margin-top: 20px;   
}
.shop-middle-right{
    float:right;
}
.score{
    color: green;
}
.score-better{
    color: hotpink;
}
.better{
     color: green;
}
.better-more{
   color: hotpink;
}
.shop-bottom{
    height: 50px;
    line-height: 50px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(175, 171, 166);
}
.enter-shop{
    height: 50px;
    width: 140px;
    background-color: rgb(213, 203, 219);
    text-align: center;
    margin-left: 110px;
    border-radius: 20px;
    vertical-align: middle;
}
</style>