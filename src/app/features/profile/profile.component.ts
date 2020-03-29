import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/users.services';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/_model/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isEditProfileClicked = true;
  isAboutFormClicked = true;
  isAddSkillClicked = true;
  isEditSkillClicked = true;
  isAddProfileClick = true;
  constructor(private users: Users) { }
  firstName: string = "";
  user: User[] = [];
  ngOnInit(): void {
  }
  displayEditForm() {
    this.isEditProfileClicked = !this.isEditProfileClicked
  }

  displayAboutForm() {
    this.isAboutFormClicked = !this.isAboutFormClicked
  }
  displayAddSkillForm() {
    this.isAddSkillClicked = !this.isAddSkillClicked
  }
  displayEditSkillForm() {
    this.isEditSkillClicked = !this.isEditSkillClicked
  }
  dispalyAddProfileForm() {
    this.isAddProfileClick = !this.isAddProfileClick
  }



}
