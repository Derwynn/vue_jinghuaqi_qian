import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import News from '@/components/News'
import News_details from '@/components/News_details'
import Product from '@/components/Product'
import Product_details from '@/components/Product_details'
import Contact from '@/components/contact'
import Longin from '@/components/Longin'
import Register from '@/components/Register'
import Cart from '@/components/Cart'



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Index},
    {path: '/index', component: Index},
    {path: '/about', component: About},
    {path: '/news', component: News},
    {path: '/news_details', component: News_details},
    {path: '/product', component: Product},
    {path: '/product_details', component: Product_details},
    {path: '/contact', component: Contact},
    {path: '/login', component: Longin},
    {path: '/register', component: Register},
    {path: '/cart', component: Cart},
  ]
})
