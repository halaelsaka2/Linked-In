import { User } from "./_model/user.model";
import { Injectable } from '@angular/core';
import { PostsService } from './post.services';
@Injectable()
export class UserSrevice {
  constructor(private postsService: PostsService) {

  }
  users: User[] = [
    {
      id: 1,
      name: { firstName: "ahmed", lastName: "abd elaziz" },
      profile: {
        headLine: "asdasda",
        education: ["faculty of computer science", "asdfasdf"],
        bkImgPath: "asdasd",
        about: "2aaamer",
        skills: []

      },
      address: "abo Rakaba",
      connetionIds: [2, 3, 4]
    },
    {
      id: 2,
      name: { firstName: "aya", lastName: "Elsaka" },
      profile: {
        headLine: "Front End",
        education: ["faculty of computer science", "Menofia"],
        bkImgPath: "asdasd",
        about: "2aaamer",
        skills: []
      },
      address: "abo Rakaba",
      connetionIds: [1, 3, 4]
    }


  ];
  getAll(): User[] {
    return this.users.slice();

  }

  getUserById(id: number): User {
    const user = this.users.find(user => user.id === id);
    user.posts = this.postsService.getById(user.id)
    return user
  }

  Update(user: User) {
    console.log(user);

    const index = this.users.findIndex(a => a.id === user.id);
    this.users[index] = {
      id: user.id, name: user.name,
      profile: user.profile, address: user.address
    };

  }

}
