import { Component, OnInit, Input } from "@angular/core";
import { SkillsService } from "../skills.service";
import { Skill } from "../skills.model";

@Component({
  selector: "app-skills-add",
  templateUrl: "./skills-add.component.html",
  styleUrls: ["./skills-add.component.scss"]
})
export class SkillsAddComponent implements OnInit {
  @Input() skill: Skill;
  constructor(private service: SkillsService) {}

  ngOnInit() {}

  saveSkill() {
    this.service.addSkill(this.skill);
  }
}
