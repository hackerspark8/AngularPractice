import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ns-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  user: UserModel = {
    username: "",
    password: ""
  };
  constructor() {}

  ngOnInit() {}

  register(user) {
    console.log(this.user);
  }
}

export interface UserModel {
  username: string;
  password: string;
}
