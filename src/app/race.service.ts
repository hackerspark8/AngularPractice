import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root"
})
export class RaceService {
  constructor(private apiService: ApiService) {}

  list() {
    return this.apiService.get("/races");
  }
}
