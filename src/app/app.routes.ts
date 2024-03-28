import { Routes } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { NotFoundComponent } from './pages/blog-list/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'blog-list', pathMatch: 'full' },
  { path: 'blog-list', component: BlogListComponent },
  { path: '**', component: NotFoundComponent },
];
