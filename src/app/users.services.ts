import { User } from "./_model/user.model";
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { PostService } from './post.services';

=======
import {  PostsService } from './post.services';
>>>>>>> 4980a9ca2d75b0bf24ad253c6554d81ec69f7fa0
@Injectable()
export class UserSrevice {
  constructor(private postsService: PostsService) {

  }
  users: User[] = [
    {
      id: 1,
      name: { firstName: "ahmed", lastName: "abd elaziz" },
<<<<<<< HEAD
      posts: this.postss.getById(1)
      // {
      //   postContent: "hala manar aya",
      //   likes: 5,
      //   comments: ["asda", "asda"],
      //   imgUrl: "asdasdasd"
      // }
      ,
      profile: {
        headLine: "BackEnd Developer",
        education: ["faculty of computer science", "Secondry School"],
        bkImgPath: "",
        about: "Iti trainee in ismailia"
      }
      , address: "PortSaied"
    },
    {
      id: 2,
      name: { firstName: "Hala", lastName: "ElSakka" },
      posts: this.postss.getById(2)
      // {
      //   postContent: "hala manar aya",
      //   likes: 5,
      //   comments: ["asda", "asda"],
      //   imgUrl: "asdasdasd"
      // }
      ,
      profile: {
        headLine: "BackEnd Developer",
        education: ["faculty of computer science", "Secondry School"],
        bkImgPath: "",
        about: ""
      }
      , address: "abo Rakaba"
    },
    {
      id: 3,
      name: { firstName: "Manar", lastName: "Karam" },
      posts: this.postss.getById(3)
      // {
      //   postContent: "hala manar aya",
      //   likes: 5,
      //   comments: ["asda", "asda"],
      //   imgUrl: "asdasdasd"
      // }
      ,
      profile: {
        headLine: "FrontEnd Developer",
        education: ["faculty of computers and Artificial Intelligence", "Secondry School"],
        bkImgPath: "",
        about: ""
      }
      , address: "Benha"
    },
    {
      id: 4,
      name: { firstName: "Aya", lastName: "Rabie" },
      posts: this.postss.getById(4)
      // {
      //   postContent: "hala manar aya",
      //   likes: 5,
      //   comments: ["asda", "asda"],
      //   imgUrl: "asdasdasd"
      // }
      ,
      profile: {
        headLine: "UI Developer",
        education: ["faculty of computer science", "Secondry School"],
        bkImgPath: "",
        about: ""
      }
      , address: "Alexandria"
=======
      profile: {
        headLine: "asdasda",
        education: ["faculty of computer science", "asdfasdf"],
        bkImgPath: "asdasd",
        about:"2aaamer"
      },
      address:"abo Rakaba",
      connetionIds :[2,3,4]
    },
    {
      id: 2,
      name: { firstName: "Hala", lastName: "Elsaka" },
      profile: {
        headLine: "Front End",
        education: ["faculty of computer science", "Menofia"],
        bkImgPath: "asdasd",
        about:"2aaamer"
      },
      address:"abo Rakaba",
      connetionIds :[1,3,4]
>>>>>>> 4980a9ca2d75b0bf24ad253c6554d81ec69f7fa0
    }


  ];
  getAll(): User[] {
    return this.users.slice();

  }

  getUserById(id: number): User {
    const user =this.users.find(user => user.id === id); 
    user.posts = this.postsService.getById(user.id)
    return user
  }

  Update(user: User) {
    console.log(user);

    const index = this.users.findIndex(a => a.id === user.id);
    this.users[index] = {
      id: user.id, name: user.name,
<<<<<<< HEAD
      posts: user.posts, profile: user.profile, address: user.address
=======
      profile: user.profile,address:user.address
>>>>>>> 4980a9ca2d75b0bf24ad253c6554d81ec69f7fa0
    };

  }

}
