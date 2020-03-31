import { EventEmitter } from '@angular/core';
import { Post } from './_model/post.model'

export class PostsService {
    postsList: Post[] = [
        {
           
            userId: 1,
            postContent: "hala manar aya ahmed",
            likes: 0,
            comments: ["asda", "asda"],
            imgUrl: "asdasdasd"
        },
        {
           
            userId: 2,
            postContent: "Hollooooooooo",
            likes: 0,
            comments: ["asda", "asda"],
            imgUrl: "asdasdasd"
        }
    ];
    postAdded = new EventEmitter < Post>();

    getAll(): Post[] {
        return this.postsList.slice();
    }

    getById(id: number): Post[] {
        const UserPosts = this.postsList.filter(UserPosts=>UserPosts.userId === id).slice();
        return UserPosts;
    }
    Update(post: Post) {
        console.log(post);
        
        const index = this.postsList.findIndex(a => a.postId === post.postId);
        this.postsList[index] = {
          postId: post.userId, userId: post.userId,
          postContent : post.postContent,
          likes:post.likes
        };
        
    }

    addPost(post:Post):Post[]{
        this.postsList.push(post);
        return this.postsList;
    }



}