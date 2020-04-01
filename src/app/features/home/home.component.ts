import { Component, OnInit, Output, Input } from "@angular/core";
import { PostsService } from "src/app/post.services";
import { Post } from "src/app/_model/post.model";
import { UserSrevice } from "src/app/users.services";
import { User } from "src/app/_model/user.model";
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @Input() isStartPostClicked = true;

  posts: Post[] = [];
    user:User
  constructor(
    private postService: PostsService,
    private userService: UserSrevice,
    private route:ActivatedRoute
    
  ) {}

  ngOnInit(): void {
this.userService.currenRouteId.next(parseInt( this.route.snapshot.params['id']));
    this.user = this.userService.getUserById(parseInt( this.route.snapshot.params['id']))

    const posts = this.postService.getPostsOfConnections(this.user.connetionIds,this.user.id);
    posts.forEach(post => {
      post.user = this.userService.getUserById(post.userId);
    });

    this.posts = posts;
    this.postService.postAdded.subscribe(posts => {
      this.posts = posts;
    });
    this.route.params.subscribe((params)=>{
      this.user = this.userService.getUserById(parseInt(params['id']) )
    })

    
  }

  showPostForm() {
    console.log("before in home" + this.isStartPostClicked);
    this.isStartPostClicked = false;
    console.log("after in home" + this.isStartPostClicked);
  }

  changeClick(isStartPostClicked) {
    this.isStartPostClicked = isStartPostClicked;
  }
}
