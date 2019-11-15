import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "irf-message",
  templateUrl: "./message.component.html"
})
export class MessageComponent {
  @Input() control: FormControl;

  constructor() {}
}
