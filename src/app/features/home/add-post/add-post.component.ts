import { Post } from 'src/app/_model/post.model';
import { PostsService } from 'src/app/post.services';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserSrevice } from 'src/app/users.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  @Input() isStartPostClicked :boolean=true;
  @Output() changeClicked = new EventEmitter<boolean>();
  post :Post={likesNum:0,commentsNum:0};
  constructor(private postService : PostsService,private userService:UserSrevice ,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  hidePostContainer() {
    this.isStartPostClicked = true;
    this.changeClicked.next(this.isStartPostClicked);
  }

  addpost(content){
    //close
    this.isStartPostClicked = true;
    this.changeClicked.next(this.isStartPostClicked);

    this.post.postContent=content.value;
    this.post.user = this.userService.getUserById(parseInt(this.route.snapshot.params['id']) )
    this.postService.addPost(this.post);
  }


}
