import { Routes } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';


export const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'blog-list', component: BlogListComponent },
  
];
