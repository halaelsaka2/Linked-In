import { UserSrevice } from "./../../users.services";
import { Component, OnInit } from "@angular/core";

import { User } from "src/app/_model/user.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  isEditProfileClicked = true;
  isAboutFormClicked = true;
  isAddSkillClicked = true;
  isEditSkillClicked = true;
  isAddProfileClick = true;
  user: User = {};
  constructor(
    private userService: UserSrevice,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.user = this.userService.getUserById(
      parseInt(this.route.snapshot.params["id"])
    );
    this.userService.updatedUser.subscribe(updatedUser => {
      this.user = updatedUser;
    });
  }

  onSubmit(myForm) {
    const user: User = {
      id: 1,
      name: {
        firstName: myForm.value.userFirstName,
        lastName: myForm.value.userLastName
      },
      profile: { headLine: myForm.value.headLine },
      address: myForm.value.address
    };
    this.userService.updateUser(user);
    this.isEditProfileClicked = true;
  }

  onSubmitAbout(myForm2) {
    const user2: User = {
      ...this.user,
      profile: { about: myForm2.value.aboutUser }
    };
    this.userService.updateUser(user2);
    this.isAboutFormClicked = true;
  }

  displayEditForm() {
    this.isEditProfileClicked = !this.isEditProfileClicked;
  }

  displayAboutForm() {
    this.isAboutFormClicked = !this.isAboutFormClicked;
  }
  displayAddSkillForm() {
    this.isAddSkillClicked = !this.isAddSkillClicked;
  }
  displayEditSkillForm() {
    this.isEditSkillClicked = !this.isEditSkillClicked;
  }
  dispalyAddProfileForm() {
    this.isAddProfileClick = !this.isAddProfileClick;
  }

  onSkillAdded(skill) {
    this.user[0].profile.skills.push(skill.value);
    skill.value = "";
    console.log(this.user[0].profile.skills);
  }
  OnSkillDeleted(itm) {
    for (let i = 0; i < this.user[0].profile.skills.length; i++) {
      this.user[0].profile.skills = this.user[0].profile.skills.filter(ele => {
        return ele !== itm;
      });
    }
  }
}
