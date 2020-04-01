import { Component, OnInit } from '@angular/core';
import { UserSrevice } from './../../users.services';
import { User } from 'src/app/_model/user.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User = {};
  allUsers = [];
  tempUsers: User[];
  isSearchClicked = false;
  constructor(private userService: UserSrevice) { }

  ngOnInit(): void {
    this.allUsers = this.userService.getAll();
  }

  GetUser(item) {
    console.log(item);
    // this.user = this.userService.getUserById(parseInt(this.route.snapshot.params['id']));
    this.user = this.userService.getUserById(item.id)

  }
  onSearch(search) {
    this.tempUsers = []
    console.log(this.tempUsers);
    if (search.value !== "") {
      let searchedUser = search.value;
      for (let i = 0; i < this.allUsers.length; i++) {
        if (this.allUsers[i].name.firstName.toLocaleLowerCase().startsWith(searchedUser.toLocaleLowerCase())) {
          this.tempUsers.push(this.allUsers[i]);
          //searchedUser = this.allUsers[i];
          console.log(this.tempUsers);
          console.log(this.tempUsers.length);


        }
        else {
          console.log("notFound");

        }
      }

    } else {
      this.tempUsers = []
    }


  }
  // GetUserById(){

  // }
  displaySearchBox() {
    this.isSearchClicked = !this.isSearchClicked

  }
}
