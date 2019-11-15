import { Component, Input } from "@angular/core";

@Component({
  selector: "irf-page",
  templateUrl: "./page.component.html"
})
export class PageComponent {
  /* passage de paramètre depuis le component parent */
  @Input() titre: string;

  constructor() {}
}
