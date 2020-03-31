import { Post } from 'src/app/_model/post.model';
import { PostService } from 'src/app/post.services';
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
  constructor(private postService : PostService) { }

  ngOnInit(): void {
  }
  
  hidePostContainer() {
    this.isStartPostClicked = !this.isStartPostClicked;
    this.changeClicked.next(this.isStartPostClicked);
  }




  addpost(content){

    this.post.postContent=content.value;
    this.postService.postAdded.next(this.post);
    console.log(this.post.postContent);
  }
}
