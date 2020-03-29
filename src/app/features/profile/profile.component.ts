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
  firstName: string = " ";
  user: User[] = [];
  
  
  constructor(private usersService: Users) { }
  ngOnInit(): void {
    this.user=this.usersService.getAll();
  }
  
  
  
  
  onSubmit(myForm:HTMLFormElement){
    console.log(myForm);
    this.usersService.users[0].name.firstName=myForm.value.userFirstName;
    console.log(this.usersService.users[0].name.firstName);
    
    // this.usersService.users[0].name.firstName=firstName.value;
    // console.log(this.usersService.users[0].name.firstName);
    
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
