import { User } from "./_model/user.model";
import { Injectable } from '@angular/core';
import { Posts } from './post.services';

@Injectable()
export class Users {
  constructor(private postss: Posts) {

  }
  users: User[] = [
    {
      id: 1,
      name: { firstName: "ahmed", lastName: "abd elaziz" },
      posts: [this.postss.getById(1)]      // {
      //   postContent: "hala manar aya",
      //   likes: 5,
      //   comments: ["asda", "asda"],
      //   imgUrl: "asdasdasd"
      // }
      ,
      profile: {
        headLine: "asdasda",
        education: ["faculty of computer science", "asdfasdf"],
        bkImgPath: "asdasd"
      }
    }


  ];
  getAll(): User[] {
    return this.users.slice();

  }

  getById(id: number): User {
    return this.users.find(a => a.id === id)
  }

  Update(user: User) {
    const index = this.users.findIndex(a => a.id === user.id);
    this.users[index] = {
      id: user.id, name: user.name,
      posts: user.posts, profile: user.profile
    };
  }


  //  add (user: User){
  //      const productItem : product = {id : this.products.length, data: product.data,
  //          price: product.price, discound:product.discound, imgsUrl:product.imgsUrl,
  //           category:product.category,
  //          paymentTypes:product.paymentTypes, tags: product.tags};
  //      this.products.push(productItem);
  //  }

  //  delete (id: number){
  //      const index = this.products.findIndex(a => a.id === id);
  //      this.products.splice(index, 1);
  //  }
}
