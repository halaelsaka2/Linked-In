import { Component, OnInit,Output, Input } from "@angular/core";
import { PostsService } from 'src/app/post.services';
import { Post } from 'src/app/_model/post.model';
import { UserSrevice } from 'src/app/users.services';
import { User } from 'src/app/_model/user.model';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
 @Input() isStartPostClicked = true;
  
  posts:Post[] =[];
  userName:string;
  // post:Post;
  users:User[]=[];
  numberOfLikes=0;
  constructor(private postService:PostsService,private userService:UserSrevice) {}

  ngOnInit(): void {

this.posts = this.postService.getAll();

    this.users=this.userService.getAll();
   this.users.forEach((user)=>{
     for(let i ; i<user.posts.length;i++){
      this.posts.push(user.posts[i])
     }
   })
  
  this.postService.postAdded.subscribe(
    (posts)=>{
     this.posts = posts;
     console.log(this.posts);
    })
  }

  addLike(){
      
  }


  showPostForm() {
    console.log("before in home"+this.isStartPostClicked)
    this.isStartPostClicked = false;
    console.log("after in home"+this.isStartPostClicked);
  }
  
  changeClick(isStartPostClicked){
    this.isStartPostClicked = isStartPostClicked;
  }

  

}
