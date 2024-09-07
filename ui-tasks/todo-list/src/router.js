import { createRouter, createWebHistory } from 'vue-router'
import AllTasks from '@/views/AllTasks.vue'
import TodayTasks from '@/views/TodayTasks.vue'
import ImportantTasks from '@/views/ImportantTasks.vue'

const routes = [
  { path: '/', component: TodayTasks },
  { path: '/important', component: ImportantTasks },
  { path: '/all', component: AllTasks }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router