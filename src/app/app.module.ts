import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { EvolutionComponent } from "./evolution/evolution.component";
import { PageComponent } from "./page/page.component";
import { PanelComponent } from "./panel/panel.component";
import { MessageComponent } from "./message/message.component";
import { TextComponent } from "./text/text.component";
import { DefaultInvalidDirective } from "./default-invalid.directive";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: "", component: EvolutionComponent }])
  ],
  declarations: [
    AppComponent,
    EvolutionComponent,
    PageComponent,
    PanelComponent,
    MessageComponent,
    TextComponent,
    DefaultInvalidDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
