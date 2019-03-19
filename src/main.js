import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'
//二级路由
import Contact  from './components/about/Contact'
import Delivery  from './components/about/Delivery'
import History  from './components/about/History'
import OrderingGulde  from './components/about/OrderingGulde'


//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'
Vue.use(VueRouter)





const  routes = [
  {path:'/',name:'homeLink',component:Home},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About,children:[
      {path:'/about/contact',name:'contactLink',component:Contact,children: [
          {path:'/about/contact/phone',name:'phoneNumber',component:Phone,},
          {path:'/about/contact/personname',name:'personName',component:PersonName},
        ]},
      {path:'/about/delivery',name:'deliveryLink',component:Delivery},
      {path:'/about/history',name:'historyLink',component:History},
      {path:'/about/orderingGulde',name:'orderingGuldeLink',component:OrderingGulde}
    ]},
  {path:'/admin',name:'adminLink',component:Admin},
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  {path:'*',redirect:'/'},
]

const router = new VueRouter({
  routes,
  mode:'history'
  }
)



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
