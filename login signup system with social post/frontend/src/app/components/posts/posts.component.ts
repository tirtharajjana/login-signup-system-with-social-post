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
  userId: Pick<User, 'id'>;


  constructor(private postServices: PostService, private authServices: AuthService) { }

  ngOnInit(): void {
    this.posts$=this.fetchAll();
    this.userId=this.authServices.userId;
  }

  fetchAll():Observable<Post[]>{
    return this.postServices.fetchAll();
  }

  createPost(): void {
    console.log("printed from parent postconponent /page");
 
  }


}
