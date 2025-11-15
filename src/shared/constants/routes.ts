export enum AppRouteNames {
  Root = 'root',
  Game = 'game-sysname',

  NotFound = 'not-found',
}

export const AppRoutePaths = {
  Root: '/',
  Game: (sysname: string) => `/game/${sysname}`,

  NotFound: '/:catchAll(.*)?',
}
