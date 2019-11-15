import { NgModule, LOCALE_ID } from "@angular/core";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { EvolutionComponent } from "./components/evolution/evolution.component";
import { PageComponent } from "./core/page/page.component";
import { PanelComponent } from "./core/panel/panel.component";
import { MessageComponent } from "./core/message/message.component";
import { TextComponent } from "./core/text/text.component";
import { DefaultInvalidDirective } from "./core/default-invalid.directive";

registerLocaleData(localeFr, 'fr');

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: "", component: EvolutionComponent }])
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr" }
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
