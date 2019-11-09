<template>
    <div class="home-box">
        <HomeNav></HomeNav>
        <router-view></router-view>
    </div>
</template>

<script>
import HomeList from './HomeList'
import HomeNav from './HomeNav'

export default {
    components:{
        HomeNav,
        HomeList,
    }
}
</script>

<style lang="stylus" scoped>
.home-box
    flex 1
    height 100%
    flex-direction column
    overflow hidden
</style>