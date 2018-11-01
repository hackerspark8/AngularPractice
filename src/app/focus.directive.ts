import { Directive, AfterViewInit, ElementRef } from "@angular/core";

@Directive({
  selector: "[nsFocus]"
})
export class FocusDirective implements AfterViewInit {
  constructor(private element: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.element.nativeElement.focus();
  }
}
