import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth.service';
import { PostService } from './../../services/post.service';

import { User } from './../../models/User';
import { Post } from './../../models/Post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  userId: Pick<User, "id">;


  constructor(private postService: PostService, private authService: AuthService) { }

  ngOnInit(): void {
    this.posts$ = this.fetchAll();
    this.userId = this.authService.userId;
  }

  fetchAll(): Observable<Post[]> {
    return this.postService.fetchAll();
  }

  createPost(): void {
    this.posts$ = this.fetchAll();
  }

  delete(postId: Pick<Post, "id">) {
    this.postService.deletePost(postId).subscribe(() => (this.posts$ = this.fetchAll()))
  }


}
