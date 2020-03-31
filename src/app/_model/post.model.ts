export interface Post {
    postId?:number;
    userId?: number;
    postContent?: string;
    likes?: number;
    comments?: string[];
    imgUrl?: string;
    videoUrl?: string;
    documentUrl?: string;

}