import Vue from 'vue'
import VueRouter from 'vue-router'
import Chart from '../views/chart'
import Edit from '../views/edit'
import Error from '../views/error'
import Explain from '../views/explain'
import Food from '../views/food'
import Food_add from '../views/food_add'
import Login from '../views/login'
import Home from '../views/home'
import Register from '../views/register'
import Set from '../views/set'
import Shop from '../views/shop'
import Shop_add from '../views/shop_add'
import User from '../views/user'
import ShopModify from '../views/shop_modify'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home,
        meta: { name: 'Home' },
    },
    {
        path: '/chart',
        component: Chart,
        meta: { name: 'Chart' },
    },
    {
        path: '/edit',
        component: Edit,
        meta: { name: 'Edit' },
    },
    {
        path: '/explain',
        component: Explain,
        meta: { name: 'Explain' },
    },
    {
        path: '/food',
        component: Food,
        meta: { name: 'Food' },
    },
    {
        path: '/food_add',
        component: Food_add,
        meta: { name: 'Food_add' },
    },
    {
        path: '/login',
        component: Login,
        meta: { name: 'Login' },
    },
    {
        path: '/register',
        component: Register,
        meta: { name: 'Register' },
    },
    {
        path: '/set',
        component: Set,
        meta: { name: 'Set' },
    },
    {
        path: '/shop',
        component: Shop,
        meta: { name: 'Shop' },
    },
    {
        path: '/shop_add',
        component: Shop_add,
        meta: { name: 'Shop_add' },
    },
    {
        path: '/shop_modify',
        component: ShopModify,
        name:'shop_modify',
        meta: {
            name: 'ShopModify'
        }
    },
    {
        path: '/user',
        component: User,
        meta: { name: 'User' },
    },
    {
        path: '*',
        component: Error
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router