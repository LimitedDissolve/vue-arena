import type { Router, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { AppRouteNames, AppRoutePaths } from '~/shared/constants/routes'

// --- Компоненты страниц ---
const Root = () => import('~/pages/root.vue')
const NotFound = () => import('~/pages/not-found.vue')
const Game = () => import('~/pages/game/[sysname].vue')

const routes: RouteRecordRaw[] = [
  {
    path: AppRoutePaths.Root,
    name: AppRouteNames.Root,
    component: Root,
  },
  {
    path: AppRoutePaths.Game(':sysname'),
    name: AppRouteNames.Game,
    component: Game,
  },

  // --- Системные маршруты ---
  {
    path: AppRoutePaths.NotFound,
    name: AppRouteNames.NotFound,
    component: NotFound,
    meta: { layout: 'default' },
  },
]

const router: Router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
