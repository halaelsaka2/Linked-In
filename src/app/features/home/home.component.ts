import { Component, OnInit } from "@angular/core";
import { PostService } from 'src/app/post.services';
import { Post } from 'src/app/_model/post.model';
import { UserSrevice } from 'src/app/users.services';
import { User } from 'src/app/_model/user.model';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isStartPostClicked = true;
  
  posts:Post[];
  user:User;
  // post:Post;
  users:User[]=[];
  numberOfLikes=0;
  constructor(private postService:PostService,private userService:UserSrevice) {}

  ngOnInit(): void {
  this.posts=this.postService.getAll();
  for (const post of this.posts) {
    this.user=this.userService.getById(post.userId);
    this.users.push(this.user)
    console.log(this.users);
    
  }
  }

  addLike(){
    
    
  }



  showPostForm() {
    this.isStartPostClicked = false;
  }
  hidePostContainer() {
    this.isStartPostClicked = true;
  
  }
}
