import { Injectable } from "@angular/core";
import { Post } from "./_model/post.model";
import { Subject } from "rxjs";
import { UserSrevice } from "./users.services";
@Injectable()
export class PostsService {
  constructor() { }
  postsList: Post[] = [
    {
      userId: 1,
      postId: 1,
      postContent: "Celebrating the launch of #whatsapp for business with Mr Eletreby, Mr Akef ,Mr hossam and banquemisr digital innovation team, banque misr was the first bank to launch whatsapp for business & For the first time in Egypt a Bank allows the purchase of the CD 15% annual certificate through WhatsApp ",
      likesNum: 1,
      commentsNum: 5,
      comments: ["well Done", "amazing"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 1,
      postId: 2,
      postContent: "We think you should follow your dreams. Join our internship challenge for the chance to win a 6-month paid global internship at JTI, Japan Tobacco International.",
      likesNum: 1,
      commentsNum: 5,
      comments: [],
      imgUrl: "asdasdasd"
    },
    {
      userId: 2,
      postId: 3,
      postContent: "It’s fantastic to see the creativity of students using Minecraft to maintain the sense of community and belonging that is so important in times like this.",
      likesNum: 1,
      commentsNum: 5,
      comments: ["wow"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 2,
      postId: 4,
      postContent: "ابويا طلق سماح وخطفني",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 3,
      postId: 5,
      postContent: "حظر مش مانعنا نخلص كورساتنا على خير في ال iti 🤷😻 يارب العوده سريعا",
      likesNum: 1,
      commentsNum: 5,
      comments: ["Okaaay"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 3,
      postId: 6,
      postContent: "دي خطتنا في الشغل للتعامل مع الوضع الحالي الصعب ",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 4,
      postId: 7,
      postContent: "How Are You ^_^ ",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 4,
      postId: 8,
      postContent: "Hellllllllllo Eveyone  ",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 5,
      postId: 9,
      postContent: "I have passed AWS Certified Solutions Architect - Associate certificate for the most power engine toward AWS Cloud.",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 5,
      postId: 10,
      postContent: "Today I return from a week of silence to lead a live mantra-based global meditation organized by Chopra Center for Wellbeing and The Well.",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 6,
      postId: 11,
      postContent: "This is a tough, tragic time. #Connectivity can help us get through it. Read a blog post by our Rajeev Suri. https://nokia.ly/2UCjFtD #COVID19 #coronavirus #TeamNokia #5G #healthcare #4IR #CSR",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 6,
      postId: 12,
      postContent: "say hey to my new achievement baby <3 <3 <3",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 7,
      postId: 13,
      postContent: "We have to find ways to recognize — every day — how our efforts have a positive influence on at least one other person.",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 7,
      postId: 14,
      postContent: "I’m inspired by the generosity of everyone who has contributed to this effort to help keep kids learning at home. Thank you to DonorsChoose and especially the educators who are doing amazing things for their students every day.",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 8,
      postId: 15,
      postContent: "Thank you to everyone who has supported #KeepKidsLearning so far! In just two days last week, over 7K people gave nearly $1M, which, thanks to a match from Bill Gates and Melinda Gates, will help thousands of teachers get supplies to their students at home.",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 8,
      postId: 16,
      postContent: "It’s fantastic to see the creativity of students using Minecraft to maintain the sense of community and belonging that is so important in times like this.",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 9,
      postId: 17,
      postContent: "my last work as freelancer, A fully responsive website for offers and coupons with control panel",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 9,
      postId: 18,
      postContent: "someday we created Blog as a project in Django course, now we make this blog in 'lab' time using laravel with more features in authentication, dealing with endpoints, integrate social media APIs to log in, etc..",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 10,
      postId: 19,
      postContent: " EVERYONE MUST DO THEIR PART TO SET THE WORLD RIGHT.IT’S A TIME FOR PEACE",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    {
      userId: 10,
      postId: 20,
      postContent: "An update on our grocery offerings in light of COVID-19. See how we’re caring for employees and keeping stores clean and safe",
      likesNum: 1,
      commentsNum: 5,
      comments: ["asda", "asda"],
      imgUrl: "asdasdasd"
    },
    
    
  ];
  postAdded = new Subject<Post[]>();
  postUpdated = new Subject<Post>();
  // onePostAdded = new Subject<Post>();

  getAll(): Post[] {
    return this.postsList.slice();
    
  }

  getById(id: number): Post[] {
    const UserPosts = this.postsList
      .filter(UserPosts => UserPosts.userId === id)
      .slice();
    return UserPosts;
  }
  Update(post: Post) {
    const index = this.postsList.findIndex(a => a.postId === post.postId);
    this.postsList[index] = post;
    this.postUpdated.next(post);
  }

  addPost(post: Post ,currentPosts:Post[]) {
    this.postsList.push(post);
    currentPosts.unshift(post)
    this.postAdded.next(currentPosts);
    //    this.onePostAdded.next(post)
  }

  getPostsOfConnections(connections: number[], userId: number) {
    let posts: Post[] = [];
    connections.forEach(connectionId => {
      posts.push(
        ...this.postsList.slice().filter(post => connectionId === post.userId)
      );
    });
    posts.push(...this.getById(userId))
    return posts
  }
}
