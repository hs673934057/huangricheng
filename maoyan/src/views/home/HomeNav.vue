<template>
    <ul>
        <router-link tag='li' to='/city' class="city">
            <span> 杭州 </span>
            <i class="fas fa-caret-down"></i>
        </router-link>
        <li class="nav">
            <router-link :to="{name:'f-hot'}"  active-class="active">正在热映</router-link>
            <router-link :to="{name:'f-comming'}" active-class="active">即将上映</router-link>
        </li>
        <router-link tag='li' to='/search' class="search">
            <a href="">
                <i class="fas fa-hand-middle-finger"></i>
            </a>
        </router-link>
    </ul>
</template>

<style lang="stylus" scoped>
@import '../../assets/css/theme.styl'
@import '../../assets/css/border.styl'

ul
    display flex
    heihgt .44rem
    border 0 0 1px 0,#ccc 
    .city
        display flex
        flex 70
        justify-content center
        align-items center
        span
            font-size .15rem
            marign-right .1rem
        i
            font-size .08rem
    .nav
        display flex
        flex 255
        justify-content space-around
        align-items center
        a
            text-decoration none 
            font-size .15rem
            color #666
            height 100%
            line-height .44rem
            font-weight bold
            padding 0 .15rem
            border-bottom .02rem solid  transparent
            &.active
                color $theme_color
                border-bottom .02rem solid  $theme_color
    .search
        flex 50
        width .45rem
        height .45rem
        a
            display flex
            width 100%
            height 100%
            justify-content center
            align-items center
            i 
                font-size .2rem
                color #666

</style>