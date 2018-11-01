import { Component } from "@angular/core";
import { RaceService } from "./race.service";

@Component({
  selector: "ns-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private raceService: RaceService) {}

  list() {
    return this.raceService.list();
  }
  checkEmitter(val) {
    console.log("received", val);
  }
}
