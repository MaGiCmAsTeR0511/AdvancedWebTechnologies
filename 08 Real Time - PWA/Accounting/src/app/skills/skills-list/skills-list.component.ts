import { Component, OnInit } from "@angular/core";
import { SkillsService } from "../skills.service";
import { Skill } from "../skills.model";

@Component({
  selector: "app-skills-list",
  templateUrl: "./skills-list.component.html",
  styleUrls: ["./skills-list.component.scss"]
})
export class SkillsListComponent implements OnInit {
  constructor(private service: SkillsService) {}
  skills: Skill[];

  ngOnInit() {
    this.service.getSkills().subscribe(data => {
      this.skills = data;
    });
  }

  deleteSkill(s: Skill) {
    this.service.deleteSkill(s);
  }
}
