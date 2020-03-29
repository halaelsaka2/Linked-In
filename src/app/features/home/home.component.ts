import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isStartPostClicked = true;
  constructor() {}

  ngOnInit(): void {}
  showPostForm() {
    this.isStartPostClicked = false;
  }
  hidePostContainer() {
    this.isStartPostClicked = true;
  
  }
}
