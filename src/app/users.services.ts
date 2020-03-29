import { User } from "./_model/user.model";
import { Post } from "./_model/post.model";
import { Profile } from "./_model/profile.model";
export class Users {
  users: User[] = [
    {
      name: { firstName: "ahmed", lastName: "abd elaziz" },
      posts: [
        {
          postContent: "hala manar aya",
          likes: 5,
          comments: ["asda", "asda"],
          imgUrl: "asdasdasd"
        }
      ],
      profile: {
        headLine: "asdasda",
        education: ["faculty of computer science", "asdfasdf"],
        bkImgPath: "asdasd"
      }
    },
    
    {
      name: { firstName: "aya", lastName: "abd elaziz" },
      posts: [
        {
          postContent: "hala manar aya",
          likes: 5,
          comments: ["asda", "asda"],
          imgUrl: "asdasdasd"
        }
      ],
      profile: {
        headLine: "asdasda",
        education: ["faculty of computer science", "asdfasdf"],
        bkImgPath: "asdasd"
      }
    },
    {
      name: { firstName: "hala", lastName: "abd elaziz" },
      posts: [
        {
          postContent: "hala manar aya",
          likes: 5,
          comments: ["asda", "asda"],
          imgUrl: "asdasdasd"
        }
      ],
      profile: {
        headLine: "asdasda",
        education: ["faculty of computer science", "asdfasdf"],
        bkImgPath: "asdasd"
      }
    },
    {
      name: { firstName: "manar", lastName: "abd elaziz" },
      posts: [
        {
          postContent: "hala manar aya",
          likes: 5,
          comments: ["asda", "asda"],
          imgUrl: "asdasdasd"
        }
      ],
      profile: {
        headLine: "asdasda",
        education: ["faculty of computer science", "asdfasdf"],
        bkImgPath: "asdasd"
      }
    }
  ];
}
