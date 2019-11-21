import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SkillsListComponent } from "./skills/skills-list/skills-list.component";
import { SkillsEditComponent } from "./skills/skills-edit/skills-edit.component";
import { KpiBarComponent } from "./kpi-bar/kpi-bar.component";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    SkillsListComponent,
    SkillsEditComponent,
    KpiBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClient,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
