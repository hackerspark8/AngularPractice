import { Directive, Input } from "@angular/core";

@Directive({
  selector: "[nsLoggable]"
})
export class LoggableDirective {
  private _text;
  constructor() {
    console.log("hi");
  }
  set text(value) {
    this._text = value;
  }
  @Input("logText")
  get text() {
    return this._text;
  }
}
