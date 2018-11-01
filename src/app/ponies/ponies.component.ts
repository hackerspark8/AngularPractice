import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "ns-ponies",
  templateUrl: "./ponies.component.html",
  styleUrls: ["./ponies.component.css"]
})
export class PoniesComponent implements OnInit {
  ponies: Array<any> = [
    {
      name: "Rainbow dash"
    },
    {
      name: "Pinkie pie"
    }
  ];
  newPonies = new Map<number, any>();
  @Output()
  emitter = new EventEmitter();
  subscription = this.emitter.subscribe(
    value => console.log(value),
    error => console.log(error),
    () => console.log("done")
  );
  constructor() {
    this.newPonies.set(1, { value: "SomeValue" });
    this.newPonies.set(2, { value: "SomeOtherValue" });
  }

  ngOnInit() {}

  refreshPonies() {
    this.ponies = [
      {
        name: "Fluttershy"
      },
      {
        name: "Rarity"
      }
    ];
  }

  emitEvent() {
    this.emitter.emit("Test");
  }
}
