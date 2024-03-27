import { Component, EventEmitter, OnInit, output } from '@angular/core';
import { Post } from '../../core/models/post';
import { PostService } from '../../core/services/post.service';
import { PostItemComponent } from '../../components/post-item/post-item.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [PostItemComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((response) => {
      this.posts = response;
    });
  }
}
