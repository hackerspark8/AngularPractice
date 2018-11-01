import { Injectable } from "@angular/core";
import { PonyModel } from "./typeahead/typeahead.component";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PonyService {
  ponies: Array<PonyModel> = [{ name: "first" }, { name: "second" }];
  constructor() {}

  search(input: string) {
    const results: Array<PonyModel> = this.ponies.filter(
      pony => pony.name.indexOf(input) !== -1
    );
    return of(results);
  }
}
