import { UserSrevice } from './../../users.services';
import { Component, OnInit } from '@angular/core';

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
  user: User[] = [];


  constructor(private usersService: UserSrevice) { }
  ngOnInit(): void {
    this.user = this.usersService.getAll();
    this.user[0].profile.skills = []
  }




  onSubmit(myForm) {
    console.log(myForm);
    
    const user: User = {
      id: 1,
      name:
      {
        firstName: myForm.value.userFirstName,
        lastName: myForm.value.userLastName
      },
      profile: { headLine: myForm.value.headLine },
      address: myForm.value.address
    }
    this.usersService.Update(user)
    console.log(this.usersService.users);

  }

  onSubmitAbout(myForm2) {
    console.log(myForm2);

    const user2: User = {
      id: 1,
      profile: { about: myForm2.value.aboutUser }
    }
    this.usersService.Update(user2)
    console.log(this.usersService.users);

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

  onSkillAdded(skill) {
    this.user[0].profile.skills.push(skill.value)
    skill.value = ""
    console.log(this.user[0].profile.skills);

  }
  OnSkillDeleted(itm) {
    for (let i = 0; i < this.user[0].profile.skills.length; i++) {

      this.user[0].profile.skills = this.user[0].profile.skills.filter(ele => {
        return ele !== itm;
      })
    }
  }
  // onTagAdded(tagName: HTMLInputElement) {
  //   this.product.tags.push({ name: tagName.value });
  //   tagName.value = "";
  //   //console.log(this.product.tags);
  // }

}
