import { Component, Input } from '@angular/core';
import { BlogListComponent } from '../blog-list/blog-list.component';
import { Post } from '../../core/models/post';
import { CommonModule } from '@angular/common';

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
