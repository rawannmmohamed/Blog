import { Component, OnInit } from '@angular/core';
import { Post } from '../../core/models/post';
import { PostService } from '../../core/services/post.service';
import { PostItemComponent } from '../../components/post-item/post-item.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { LoadingIndicatorComponent } from '../../components/loading-indicator/loading-indicator.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    PostItemComponent,
    ErrorMessageComponent,
    LoadingIndicatorComponent,
    FormsModule,
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent implements OnInit {
  posts: Post[] = [];
  errorMessage: boolean = false;
  searchText: string = '';
  displayedPosts: Post[] = [];
  initialDisplayCount: number = 3;
  loadMoreCount: number = 3;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe({
      next: (response) => {
        this.posts = response;
        this.displayedPosts = this.posts.slice(0, this.initialDisplayCount);
      },
      error: () => {
        this.errorMessage = true;
      },
    });
  }

  loadMorePosts() {
    const currentDisplayCount = this.displayedPosts.length;
    const newDisplayCount = currentDisplayCount + this.loadMoreCount;
    this.displayedPosts = this.posts.slice(0, newDisplayCount);
  }
}
