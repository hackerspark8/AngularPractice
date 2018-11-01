import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { PonyService } from "../pony.service";
import {
  switchMap,
  filter,
  debounceTime,
  distinctUntilChanged,
  catchError
} from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "ns-typeahead",
  templateUrl: "./typeahead.component.html",
  styleUrls: ["./typeahead.component.css"]
})
export class TypeaheadComponent implements OnInit {
  input = new FormControl();
  ponies: Array<PonyModel> = [];
  constructor(private ponyService: PonyService) {}

  ngOnInit() {
    // this.input.valueChanges.subscribe(value => {
    //   this.ponyService
    //     .search(value)
    //     .subscribe(results => (this.ponies = results));
    // });

    this.input.valueChanges
      .pipe(
        filter(input => input.length >= 3),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(value =>
          this.ponyService.search(value).pipe(catchError(error => of([])))
        )
      )
      .subscribe(results => (this.ponies = results));
  }
}

export class PonyModel {
  name: string;
}
