import { Component, OnInit } from "@angular/core";
import { SkillsService } from "../skills.service";

@Component({
  selector: "app-skills-edit",
  templateUrl: "./skills-edit.component.html",
  styleUrls: ["./skills-edit.component.scss"]
})
export class SkillsEditComponent implements OnInit {
  constructor(private service: SkillsService) {}

  ngOnInit() {}

  addSkill() {
    const skill = { id: 4, name: "essen", hours: 2 };
    this.service.addSkill(skill);
  }
}
