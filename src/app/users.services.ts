import { User } from "./_model/user.model";
import { Injectable, OnInit } from '@angular/core';
import { PostsService } from './post.services';
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
      name: { firstName: "ahmed abd-elaziz", lastName: "abd elaziz" },
      profile: {
        headLine: "Front End developer ",
        education: ["faculty of computer science"],
        profileImgPath: "../../../assets/images/ManUser.jpeg",
        about: "work for big company beo beo "
      },
      address: "bort said",
      connetionIds: [2, 3, 4]
    },
    {
      id: 2,
      name: { firstName: "Hala Elsaka", lastName: "Elsaka" },
      profile: {
        headLine: "Full stack developer",
        education: ["faculty of computer science Menofia university"],
        profileImgPath: "../../../assets/images/user.jpg",
        about: "worked for microsoft for three years "
      },
      address: "Menoifa",
      connetionIds: [1, 3, 4]
    },
    {
      id: 3,
      name: { firstName: "Manar Karam", lastName: "Karam" },
      profile: {
        headLine: "Mean stack developer",
        education: ["faculty of computer science Banha university"],
        profileImgPath: "../../../assets/images/user.jpg",
        about: "worked for Google for three years "
      },
      address: "Banha",
      connetionIds: [1, 2, 4]
    },
    {
      id: 4,
      name: { firstName: "Aya Rabee", lastName: "Karam" },
      profile: {
        headLine: "UI developer",
        education: ["faculty of computer science Mansoura university"],
        profileImgPath: "../../../assets/images/user.jpg",
        about: "worked for Andela for three years "
      },
      address: "Behera",
      connetionIds: [3, 2, 5]
    },
    {
      id: 5,
      name: { firstName: "Farah Mahmoud", lastName: "Mahmoud" },
      profile: {
        headLine: "Tester developer",
        education: ["faculty of computer science Ismalia university"],
        profileImgPath: "../../../assets/images/user.jpg",
        about: "worked for microsoft for three years "
      },
      address: "Ismalia",
      connetionIds: [1, 2, 4]
    },
    {
      id: 6,
      name: { firstName: "Eman Elsayed", lastName: "Elsayed" },
      profile: {
        headLine: "Manager at Google",
        education: ["faculty of science Cairo university"],
        profileImgPath: "../../../assets/images/user.jpg",
        about: "worked Now at Google "
      },
      address: "Cairo",
      connetionIds: [3, 5, 4]
    },
    {
      id: 7,
      name: { firstName: "Eslam Taha", lastName: "Taha" },
      profile: {
        headLine: "UI/Ux developer",
        education: ["faculty of Commerce Port said university"],
        profileImgPath: "../../../assets/images/ManUser.jpeg",
        about: "worked for Vodafon For two years "
      },
      address: "Port said",
      connetionIds: [3, 5, 4]
    },
    {
      id: 8,
      name: { firstName: "Nada Ahmed", lastName: "Ahmed" },
      profile: {
        headLine: "Hr Manager",
        education: ["faculty of scince Ismalia university"],
        profileImgPath: "../../../assets/images/user.jpg",
        about: "worked for Google For two years "
      },
      address: "El swees",
      connetionIds: [3, 7, 6]
    },
    {
      id: 9,
      name: { firstName: "Mai Eltayeb", lastName: "Ahmed" },
      profile: {
        headLine: "CEO at Vodafon",
        education: ["faculty of Computer scince Ismalia university"],
        profileImgPath: "../../../assets/images/user.jpg",
        about: "worked for Microsoft For ten years "
      },
      address: "Al xour",
      connetionIds: [8, 7, 5]
    },
    {
      id: 9,
      name: { firstName: "Bola Magdy", lastName: "Magdy" },
      profile: {
        headLine: "Photo shop",
        education: ["faculty of Computer scince Ismalia university"],
        profileImgPath: "../../../assets/images/ManUser.jpeg",
        about: "worked for Microsoft For ten years "
      },
      address: "Ismalia",
      connetionIds: [4, 1, 5]
    },
    {
      id: 10,
      name: { firstName: "Mariam Magdy", lastName: "Magdy" },
      profile: {
        headLine: "3la bab allah",
        education: ["faculty of Computer scince Ismalia university"],
        profileImgPath: "../../../assets/images/user.jpg",
        about: "worked for Microsoft For ten years "
      },
      address: "Ismalia",
      connetionIds: [8, 1, 4]
    }




  ];
  getAll(): User[] {
    const users = this.users.slice();
    users.forEach((user) => {
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
