import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "irf-text",
  templateUrl: "./text.component.html"
})
export class TextComponent {
  /* transfert de l'événement input de l'input au component parent */
  @Output() input = new EventEmitter<Event>();
  @Input() name: string;
  @Input() label: string;
  @Input() control: FormControl;

  constructor() {}

  forward(event: Event) {
    this.input.emit(event);
  }
}
