import { Post } from './_model/post.model'

export class PostsService {
    postsList: Post[] = [
        {
            userId: 1, 
            postContent: "hala manar aya",
            likes: 5,
            comments: ["asda", "asda"],
            imgUrl: "asdasdasd"
        }
    ];
    getAll(): Post[] {
        return this.postsList.slice();
    }

    getById(id: number): Post[] {
        const UserPosts = this.postsList.filter(UserPosts=>UserPosts.userId === id).slice();
        return UserPosts;
    }
}