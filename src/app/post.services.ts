import { Post } from './_model/post.model'

export class Posts {
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

    getById(id: number): Post {
        return this.posts.find(a => a.userId === id)
    }
}