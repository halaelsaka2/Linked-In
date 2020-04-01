import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_model/user.model';
import { UserSrevice } from './../../users.services';



@Component({
  selector: 'app-others-profile',
  templateUrl: './others-profile.component.html',
  styleUrls: ['./others-profile.component.scss']
})
export class OthersProfileComponent implements OnInit {
  user: User = {};

  constructor(private userService: UserSrevice, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.userService.getUserById(parseInt(this.route.snapshot.params['id']));
    this.route.params.subscribe((params) => {
      this.user = this.userService.getUserById(parseInt(params['id']))
    })
    console.log(this.user);
  }


}
