import { Component, Input } from '@angular/core';

import { Post } from '../../core/models/post';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from '../../pages/blog-list/blog-list.component';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [BlogListComponent, CommonModule],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css',
})
export class PostItemComponent {
  @Input() post!: Post;
  
}
