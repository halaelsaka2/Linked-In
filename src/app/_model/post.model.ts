import { User } from './user.model';

export interface Post {
    postId?:number;
    user?:User
    userId?: number;
    postContent?: string;
    likes?: number;
    comments?: string[];
    imgUrl?: string;
    videoUrl?: string;
    documentUrl?: string;

}