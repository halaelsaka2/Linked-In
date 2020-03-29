import { Post } from './_model/post.model'

export class PostService {
    posts: Post[] = [
        {
            userId: 1,
            postContent: "hala manar aya",
            likes: 5,
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
}