import { Post } from './_model/post.model'

export class PostService {
    posts: Post[] = [
        {
            postId:1,
            userId: 1,
            postContent: "hala manar aya ahmed",
            likes: 0,
            comments: ["asda", "asda"],
            imgUrl: "asdasdasd"
        },
        {
            postId:2,
            userId: 2,
            postContent: "Hollooooooooo",
            likes: 0,
            comments: ["asda", "asda"],
            imgUrl: "asdasdasd"
        }
    ];


     getAll(): Post[] {
        return this.posts.slice();
    }

    getById(id: number): Post[] {
        return this.posts.filter(a => a.userId === id)
    }
    Update(post: Post) {
        console.log(post);
        
        const index = this.posts.findIndex(a => a.postId === post.postId);
        console.log(index)
        this.posts[index] = {
          postId: post.userId, userId: post.userId,
          postContent : post.postContent,
          likes:post.likes
        };
        
      }
}