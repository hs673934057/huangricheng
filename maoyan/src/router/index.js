import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Cinema from '../views/cinema'
import Mine from '../views/mine'
import HomeComming from '../views/home/HomeComming.vue'
import HomeHot from '../views/home/HomeHot.vue'
import City from '../views/city'
import Search from '../views/search'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            redirect: '/home/f-hot',
            children: [{
                    path: 'f-comming',
                    component: HomeComming,
                    name: 'f-comming',
                },
                {
                    path: 'f-hot',
                    component: HomeHot,
                    name: 'f-hot'
                }
            ]
        },
        {
            path: '/cinema',
            component: Cinema
        },
        {
            path: '/mine',
            component: Mine
        },
        {
            path: '/city',
            component: City,
        },
        {
            path: '/search',
            component: Search,
        },
        {
            path: '*',
            compontent: Error
        }
    ]

})

export default router