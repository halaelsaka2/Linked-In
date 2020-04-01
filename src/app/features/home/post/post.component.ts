import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/_model/post.model';
import { PostsService } from 'src/app/post.services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
@Input() post:Post
likesNum = 0;
commentsNum = 0;

  constructor(private postService:PostsService) { }

  ngOnInit(): void {
this.postService.postUpdated.subscribe((post)=>{
  if(post.postId===this.post.postId){
    this.post=post;
  }
})
  }
  addLike() {
    const likesNum = this.post.likesNum +1
    const post = {...this.post,likesNum}
    this.postService.Update(post)
  }
}
