import Vue from 'vue'
import VueRouter from 'vue-router'
import Usersb from 'E:/learnvue/test1/src/components/users.vue'
import Hello from '../components/HelloWorld'
Vue.use(VueRouter)

const Routes = [
    {
        path : "/users",
        component : Usersb
    },
    {
        path :"/",
        component : Hello
    }
    ]
const router = new VueRouter({
    //routes : routes
    routes : Routes,
    mode:'history'
});

export default router