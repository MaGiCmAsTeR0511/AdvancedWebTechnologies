import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SkillsListComponent } from "./skills/skills-list/skills-list.component";
import { SkillsEditComponent } from "./skills/skills-edit/skills-edit.component";
import { KpiBarComponent } from "./kpi-bar/kpi-bar.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SkillsAddComponent } from "./skills/skills-add/skills-add.component";
import { MaterialModule } from "./material.modules";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SkillsListComponent,
    SkillsEditComponent,
    KpiBarComponent,
    SkillsAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
