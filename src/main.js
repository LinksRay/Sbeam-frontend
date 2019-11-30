import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/scaffolding.css'
import HomeContent from "@/components/HomeContent";
import VueRouter from "vue-router";
import axios from 'axios'
import VueAxios from "vue-axios";

Vue.use(BootstrapVue)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false
const routes=[
    {path:'/',component:HomeContent}
]
const router=new VueRouter({
    routes
})

Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
