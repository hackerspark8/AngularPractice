import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor() {}

  get(path) {
    return path;
  }
}
