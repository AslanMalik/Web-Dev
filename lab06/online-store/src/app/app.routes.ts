import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about';
import { AlbumDetailComponent } from './components/album-detail/album-detail';
import { AlbumPhotosComponent } from './components/album-photos/album-photos';
import { AlbumsComponent } from './components/albums/albums';
import { HomeComponent } from './components/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'albums',
    children: [
      { path: '', component: AlbumsComponent },
      { path: ':id/photos', component: AlbumPhotosComponent },
      { path: ':id', component: AlbumDetailComponent },
    ],
  },
  { path: '**', redirectTo: 'home' },
];
