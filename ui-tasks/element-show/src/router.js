import { createRouter, createWebHistory } from 'vue-router'

import Table from './components/Table.vue'
import Calendar from './components/Calendar.vue'
import Progress from './components/Progress.vue'


const routes = [
    { path: '/', component: Table},
    { path: '/1-1', component: Table},
    { path: '/1-2', component: Calendar},
    { path: '/1-3', component: Progress},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router