import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "ns-dynamicregister",
  templateUrl: "./dynamicregister.component.html",
  styleUrls: ["./dynamicregister.component.css"]
})
export class DynamicregisterComponent implements OnInit {
  userForm: FormGroup;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  constructor(fb: FormBuilder) {
    this.usernameCtrl = fb.control("", [
      Validators.required,
      Validators.minLength(3)
    ]);
    this.passwordCtrl = fb.control("", [Validators.required]);
    this.userForm = fb.group(
      {
        username: this.usernameCtrl,
        password: this.passwordCtrl
      },
      Validators.required
    );
    this.passwordCtrl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(val => console.log(val));
  }

  register() {
    console.log(this.userForm.value, this.userForm.valid);
  }

  reset() {
    this.usernameCtrl.setValue("");
    this.passwordCtrl.setValue("");
  }

  ngOnInit() {}
}
