import { Post } from 'src/app/_model/post.model';
import { PostsService } from 'src/app/post.services';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  @Input() isStartPostClicked :boolean=true;
  @Output() changeClicked = new EventEmitter<boolean>();
  post :Post={};
  constructor(private postService : PostsService) { }

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
    this.postService.addPost(this.post);
    this.postService.postAdded.next();
    console.log(this.post.postContent);
  }


}
