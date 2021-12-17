import VueRouter from 'vue-router'
import routes from './router'

const router = new VueRouter({
    base: 'app/',
    routes,
    mode: 'history'
})

export default router