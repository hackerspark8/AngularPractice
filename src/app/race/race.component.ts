import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ns-race",
  templateUrl: "./race.component.html",
  styleUrls: ["./race.component.css"]
})
export class RaceComponent implements OnInit {
  private races: any = [];
  constructor() {}

  ngOnInit() {}

  refreshRaces() {
    this.races = [
      {
        name: "London"
      },
      {
        name: "Lyon"
      }
    ];
  }

  showAlert() {
    alert(this.races.length);
  }
}
