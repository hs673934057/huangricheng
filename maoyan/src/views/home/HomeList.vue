<template>
  <div class="tab-content">
    <div class="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
      <div class="list-wrap" style="margin-top: 0px;">
          <div v-if='movies'>
              <home-item :data='item' v-for='item in movies.movieList' :key='item.id'>

              </home-item>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import HomeItem from './HomeItem'

export default {
  props: ["movies"],
  components:{
      HomeItem
  },
};
</script>

<style lang="stylus" scoped>
  .tab-content 
    height 100% 
    .page 
        height 100% 

</style>
