import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/cart/Cart.vue'
import Category from '../views/category/Category.vue'
import Home from '../views/home/Home.vue'
import Profile from '../views/profile/Profile.vue'
import Detaile from '../views/detail/Detail.vue'

Vue.use(VueRouter)

const routes=[
    {
      path:'/cart',
      component: Cart
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/detail/:iid',
        component:Detaile
    }
]
const router=new VueRouter({
    routes
})
export default router