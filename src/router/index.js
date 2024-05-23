import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import * as echarts from 'echarts/core'
// import {
//   TitleComponent,
//   TooltipComponent,
//   LegendComponent
// }from 'echarts/components'
// import {
//   PieChart
// }from 'echarts/charts'
// import{
//   CanvasRenderer
// }from 'echarts/rederers'

// echarts.use(
//   [TitleComponent,TooltipComponent,LegendComponent,PieChart,CanvasRenderer]
// )

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/vote/:item',
    //   name: 'vote',
    //   component: () => import('../views/vote.vue')
    // },

    ]
})

export default router
