import { Routes } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { PostItemComponent } from './pages/post-item/post-item.component';

export const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'blog-list', component: BlogListComponent },
  { path: 'post', component: PostItemComponent },
];
