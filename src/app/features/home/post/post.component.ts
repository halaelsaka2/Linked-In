import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/_model/post.model';
import { PostsService } from 'src/app/post.services';
import { User } from 'src/app/_model/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
@Input() post:Post
@Input() user:User
likesNum = 0;
commentsNum = 0;
isCommentHidden=true;

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
  showComment(){
    this.isCommentHidden=false;
  }
  addNewComment(event,newComment){
    
    if(event.key==="Enter"){
      var d = new Date();
      var minutes = d.getHours() * 60 + d.getMinutes();
      // const time= Date.now();
      var hours = (minutes / 60);
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      console.log(  rhours + ":" + rminutes);
      
      // console.log(minutes);    
      this.post.comments.push(newComment);
      console.log(this.postService.postsList);
      // const post={...this.post,}
    }
  }
}
