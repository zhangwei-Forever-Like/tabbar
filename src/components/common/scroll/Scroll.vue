<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    console.log(this.$refs.wrapper);
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad:this.pullUpLoad
    });
    this.scroll.on('scroll',(position)=>{
        // console.log(position)
        this.$emit('scroll',position)
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
  },
  methods:{
    finishPullUp(){
      // this.scroll.finishPullUp()
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
    },
    scrollTo(x,y,time){
      // this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
      this.scroll.scrollTo(x,y,time)
    },
    refresh(){
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    getCurrentY(){
      return this.scroll.y ? this.scroll.y : 0
    }
  }
};
</script>

<style scoped>
</style>