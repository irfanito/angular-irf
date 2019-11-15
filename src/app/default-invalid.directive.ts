import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer
} from "@angular/core";
import { FormControl } from "@angular/forms";

@Directive({
  selector: "[irfDefaultInvalid]"
})
export class DefaultInvalidDirective {
  @Input() irfDefaultInvalid: FormControl;

  constructor(private el: ElementRef, private renderer: Renderer) {}

  /* au déclenchement de l'événement input sur le component qui porte la directive */
  @HostListener("input") onInput() {
    if (this.irfDefaultInvalid.invalid && this.irfDefaultInvalid.dirty) {
      this.renderer.setElementClass(this.el.nativeElement, "has-error", true);
    } else {
      this.renderer.setElementClass(this.el.nativeElement, "has-error", false);
    }
  }
}
