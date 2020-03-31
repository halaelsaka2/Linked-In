import { User } from "./_model/user.model";
import { Injectable } from '@angular/core';
import { PostService } from './post.services';

@Injectable()
export class UserSrevice {
  constructor(private postss: PostService) {

  }
  users: User[] = [
    {
      id: 1,
      name: { firstName: "ahmed", lastName: "abd elaziz" },
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
    }


  ];
  getAll(): User[] {
    return this.users.slice();

  }

  getById(id: number): User {
    return this.users.find(a => a.id === id)
  }

  Update(user: User) {
    console.log(user);

    const index = this.users.findIndex(a => a.id === user.id);
    this.users[index] = {
      id: user.id, name: user.name,
      posts: user.posts, profile: user.profile, address: user.address
    };

  }

}
