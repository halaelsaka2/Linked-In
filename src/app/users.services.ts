import { User } from "./_model/user.model";
import { Injectable } from '@angular/core';
import {  PostService } from './post.services';

export class UserSrevice {
  
  users: User[] = [
    {
      id: 1,
      name: { firstName: "ahmed", lastName: "abd elaziz" },

      profile: {
        headLine: "asdasda",
        education: ["faculty of computer science", "asdfasdf"],
        bkImgPath: "asdasd",
        about:"2aaamer"
      }

      ,address:"abo Rakaba",
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
      }

      ,address:"abo Rakaba",
      connetionIds :[1,3,4]
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
      profile: user.profile,address:user.address
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
