<template>
<div>
    <home-list :movies='movies'></home-list>
</div>
</template>


<script>
import HomeList from './HomeList'
import BScroll from 'better-scroll';

export default {
    components:{
        HomeList
    },
    mounted(){
        this.$store.dispatch('getMovies'),
         new BScroll('.page')

     },
     computed:{
         movies(){
             return this.$store.state.home.movies
         }
     }
}
</script>

<style lang="stylus" scoped>
div
    flex 1
    height 100%
    overflow hidden
</style>