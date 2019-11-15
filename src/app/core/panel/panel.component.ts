import { Component, Input } from "@angular/core";

@Component({
  selector: "irf-panel",
  templateUrl: "./panel.component.html"
})
export class PanelComponent {
  @Input() titre: string;

  constructor() {}
}
