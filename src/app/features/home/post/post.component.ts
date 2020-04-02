import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/_model/post.model";
import { PostsService } from "src/app/post.services";
import { User } from "src/app/_model/user.model";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() user: User;
  likesNum = 0;
  commentsNum = 0;
  isCommentHidden = true;
  isLiked = false;

         d:Date ;
         minutes:number;
         hours :number;
         rhours :number;
         rminutes :number;
  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    console.log(this.post);
    this.postService.postUpdated.subscribe(post => {
      if (post.postId === this.post.postId) {
        this.post = post;
      }
    });
  }
  addLike() {
    if (!this.isLiked) {
      const likesNum = this.post.likesNum + 1;
      const post = { ...this.post, likesNum };
      this.postService.Update(post);
      this.isLiked = !this.isLiked;
    } else {
      const likesNum = this.post.likesNum - 1;
      const post = { ...this.post, likesNum };
      this.postService.Update(post);
      this.isLiked = !this.isLiked;

    }
  }
  showComment() {
    this.isCommentHidden = false;
  }
  addNewComment(event, newComment) {
    if (event.key === "Enter") {
      if (newComment !== "") {
         this.d = new Date();
         this.minutes = this.d.getHours() * 60 + this.d.getMinutes();
         this.hours = this.minutes / 60;
         this.rhours = Math.floor(this.hours);
         this.minutes = (this.hours - this.rhours) * 60;
         this.rminutes = Math.round(this.minutes);
        console.log(this.rhours + ":" + this.rminutes);
        
        this.post.comments.push(newComment);
        event.target.value=""
      }
      // const post={...this.post,}
    }
  }
}
