import { User } from "./_model/user.model";
import { Injectable, OnInit } from '@angular/core';
import {  PostsService } from './post.services';
import { Subject } from 'rxjs';
import { Post } from './_model/post.model';
@Injectable()
export class UserSrevice implements OnInit {
  updatedUser = new Subject<User>()
  constructor(private postsService: PostsService) {

  }
  ngOnInit(): void {
// this.postsService.onePostAdded.subscribe((post)=>{
//  const userAddedPost =  this.users.findIndex((user)=>{user.id === post.userId})
//  this.users[userAddedPost].posts.push(post)
//  console.log(this.users)
// })
  }
  users: User[] = [
    {
      id: 1,
      name: { firstName: "ahmed", lastName: "abd elaziz" },
      profile: {
        headLine: "asdasda",
        education: ["faculty of computer science", "asdfasdf"],
        bkImgPath: "asdasd",
        about: "2aaamer"
      },
      address: "abo Rakaba",
      connetionIds: [2, 3, 4]
    },
    {
      id: 2,
      name: { firstName: "Hala", lastName: "Elsaka" },
      profile: {
        headLine: "Front End",
        education: ["faculty of computer science", "Menofia"],
        bkImgPath: "asdasd",
        about: "2aaamer"
      },
      address: "abo Rakaba",
      connetionIds: [1, 3, 4]
    }


  ];
  getAll(): User[] {
    const users = this.users.slice();
    users.forEach((user)=>{
    user.posts = this.postsService.getById(user.id)  
    }) 
    return users;

  }

  getUserById(id: number): User {
    const user = this.users.find(user => user.id === id);
    user.posts = this.postsService.getById(user.id)
    return user
  }

  updateUser(user: User) {
    const users = this.users.slice()
    const index = users.findIndex(a => a.id === user.id);
    users[index] = {
      id: user.id, name: user.name,
      profile: user.profile, address: user.address
    };
    this.updatedUser.next(user)

  }

  

}
