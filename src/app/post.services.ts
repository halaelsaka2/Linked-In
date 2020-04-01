import { Injectable } from '@angular/core';
import { Post } from './_model/post.model'
import { Subject } from 'rxjs';
import { UserSrevice } from './users.services';
@Injectable()
export class PostsService {
    constructor(){}
    postsList: Post[] = [
        {
            userId: 1,
            postId:1,
            postContent: "hala manar aya ahmed",
            likesNum: 1,
            commentsNum:5,
            comments: ["asda", "asda"],
            imgUrl: "asdasdasd"
        },
        {
           postId:2,
            userId: 2,
            postContent: "Hollooooooooo",
            likesNum: 3,
            commentsNum:7,
            comments: ["asda", "asda"],
            imgUrl: "asdasdasd"
        }
    ];
    postAdded = new Subject< Post[]>();
    postUpdated = new Subject< Post>();
    // onePostAdded = new Subject<Post>();

    getAll(): Post[] {
        return this.postsList.slice();
    }

    getById(id: number): Post[] {
        const UserPosts = this.postsList.filter(UserPosts=>UserPosts.userId === id).slice();
        return UserPosts;
    }
    Update(post: Post) {
        const index = this.postsList.findIndex(a => a.postId === post.postId);
        this.postsList[index] = post;
       this.postUpdated.next(post)
        
    }

    addPost(post:Post){
        this.postsList.unshift(post);
       this.postAdded.next(this.postsList)
    //    this.onePostAdded.next(post)
    }



}