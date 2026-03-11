import { Routes } from '@angular/router';

export const albumRoute: Routes = [
  {
    path: 'album/:slug',
    loadComponent: () => import('./song-list/song-list'),
  },
  {
    path: 'album/:slug:/:songSlug',
    loadComponent: () => import('./song-list/lyrics-of-song/lyrics-of-song'),
  }
]

export default albumRoute;
