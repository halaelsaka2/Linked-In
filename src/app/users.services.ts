import { User } from "./_model/user.model";
import { Injectable, OnInit } from '@angular/core';
import { PostsService } from './post.services';
import { Subject } from 'rxjs';
import { Post } from './_model/post.model';
@Injectable()
export class UserSrevice implements OnInit {
  updatedUser = new Subject<User>()
  currenRouteId = new Subject<number>()
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
        education:"Information Technology Institute",
        profileImgPath: "../../../assets/images/ahmed.jpeg",
        about: "work for big company - ITI trainee - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
        skills: ["C#", "OOP", "Java Script", "Angular", "React"]
      },
      email: "AhmedAbdelaziz@gmail.com",
      address: "bort said",
      connetionIds: [2, 3, 4]
    },
    {
      id: 2,
      name: { firstName: "Hala Elsaka", lastName: "Elsaka" },
      profile: {
        headLine: "Full stack developer",
        education:"Information Technology Institute",
        profileImgPath: "../../../assets/images/hala.jpg",

        about: "worked for microsoft for three years - ITI trainee - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        skills: ["C#", "OOP", "Java Script", "Angular", "React"]
      },
      email: "HalaElsakka@gmail.com",
      address: "Menoifa",
      connetionIds: [1, 3, 4]
    },
    {
      id: 3,
      name: { firstName: "Manar Karam", lastName: "Karam" },
      profile: {
        headLine: "FrontEnd Web developer",
        education:"Information Technology Institute",
        profileImgPath: "../../../assets/images/Manar2.jpg",
        about: "Graduated From Benha University - Computer Science Faculty 2019 - ITI trainee - Willing to work as a frontend developer Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        skills: ["HTML", "CSS3", "SASS", "Java Script", "Angular", "React"]
      },
      address: "Banha",
      email: "manarkaram16@gmail.com",
      connetionIds: [1, 2, 4]
    },
    {
      id: 4,
      name: { firstName: "Aya Rabee", lastName: "Karam" },
      profile: {
        headLine: "UI developer",
        education:"Information Technology Institute",
        profileImgPath: "../../../assets/images/aya.png",
        about: "worked for Andela for three years - ITI trainee - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        skills: ["Drawing", "PhotoShop", "Illustrator", "Frontend technologies"]
      },
      email: "ayaRabee@hotmail.com",
      address: "Behera",
      connetionIds: [3, 2, 5]
    },
    {
      id: 5,
      name: { firstName: "Farah Mahmoud", lastName: "Mahmoud" },
      profile: {
        headLine: "Tester developer",
        education:"Information Technology Institute",
        profileImgPath: "../../../assets/images/farah.jpg",
        about: "worked for microsoft for three years - ITI trainee - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        skills: ["Frontend", "Angular", "JS", "ES6", "UI Design"]
      },
      address: "Ismalia",
      email: "farahfaroha@gmail.com",
      connetionIds: [1, 2, 4]
    },
    {
      id: 6,
      name: { firstName: "Eman Elsayed", lastName: "Elsayed" },
      profile: {
        headLine: "Manager at Google",
        education:"Information Technology Institute",
        profileImgPath: "../../../assets/images/eman.jpeg",
        about: "worked Now at Google - ITI trainee - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        skills: ["C#", "Backend", "OOP", "React"]
      },
      email: "Eman156@gmail.com",
      address: "Cairo",
      connetionIds: [3, 5, 4]
    },
    {
      id: 7,
      name: { firstName: "Eslam Taha", lastName: "Taha" },
      profile: {
        headLine: "UI/Ux developer",
        education:"Information Technology Institute",
        profileImgPath: "../../../assets/images/islam.jpeg",
        about: "worked for Vodafon For two years - ITI trainee - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        skills: ["OOP", "DataBase", "C#", "Frontend"]
      },
      email: "Eslamtaha@gmail.com",
      address: "Port said",
      connetionIds: [3, 5, 4]
    },
    {
      id: 8,
      name: { firstName: "Nada Ahmed", lastName: "Ahmed" },
      profile: {
        headLine: "Hr Manager",
        education:"Information Technology Institute",
        profileImgPath: "../../../assets/images/nada.jpg",
        about: "worked for Google For two years - ITI trainee - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
        skills: ["UI Development", "Angular", "JS", "HTML"]
      },
      email: "NadaAhmed@gmail.com",
      address: "El swees",
      connetionIds: [3, 7, 6]
    },
    {
      id: 9,
      name: { firstName: "Mai Eltayeb", lastName: "Ahmed" },
      profile: {
        headLine: "CEO at Vodafon",
        education:"Information Technology Institute",
        profileImgPath: "../../../assets/images/user.jpg",
        about: "worked for Microsoft For ten years - ITI trainee - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        skills: ["JavaScript", "Windows Forms", "Database", "FrontEnd"]
      },
      email: "MaiLuxor@gmail.com",
      address: "Luxor",
      connetionIds: [8, 7, 5]
    },
    {
      id: 10,
      name: { firstName: "Bola Magdy", lastName: "Magdy" },
      profile: {
        headLine: "Photo shop",
        education:"Information Technology Institute",
        profileImgPath: "../../../assets/images/bola.jpeg",
        about: "worked for Microsoft For ten years - ITI trainee - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        skills: ["PhotoShop", "Illustrator", "XD", "HTML", "CSS"]
      },
      email: "BolaLeader@gmail.com",
      address: "Ismalia",
      connetionIds: [4, 1, 5]
    },
    {
      id: 11,
      name: { firstName: "Salma Wagdy", lastName: "Wagdy" },
      profile: {
        headLine: "UI Developer",
        education:"Information Technology Institute",
        profileImgPath: "../../../assets/images/salma.jpeg",
        about: "worked for Microsoft For ten years - ITI trainee - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        skills: ["FrontEnd", "BackEnd", "C#", "OOP"]
      },
      email: "Salmiction122@hotmail.com",
      address: "Tanta",
      connetionIds: [8, 1, 4]
    },
    {
      id: 12,
      name: { firstName: "Youstina Lamie", lastName: "Lamie" },
      profile: {
        headLine: "3la bab allah",
        education:"Information Technology Institute",
        profileImgPath: "../../../assets/images/yl.jpg",
        about: "worked for Microsoft For ten years - ITI trainee - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        skills: ["FrontEnd", "UI", "Js", "XMl"]
      },
      email: "YoustinaLamie166@hotmail.com",
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
