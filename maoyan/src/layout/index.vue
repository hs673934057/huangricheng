<template>
    <div class="lay-out-box">  
        <Tab></Tab>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <TabBar></TabBar>
    </div>
</template>

<script>
import Tab from '../components/common/Tab'
import TabBar from '../components/common/TabBar'
import Home from '../views/home'
export default {
    components:{
        Tab,TabBar,Home
    }
}
</script>
<style lang="stylus" scoped>
.lay-out-box
    display flex
    flex-direction column
    height 100%
</style>