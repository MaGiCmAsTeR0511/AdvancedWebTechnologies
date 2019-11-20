import { Component, OnInit } from "@angular/core";
import { SkillsService } from "../skills.service";
import { Skill } from "../skill.model";

@Component({
  selector: "app-skills-container",
  templateUrl: "./skills-container.component.html",
  styleUrls: ["./skills-container.component.scss"]
})
export class SkillsContainerComponent implements OnInit {
  constructor(private service: SkillsService) {}
  displayedColumns: string[] = ["id", "name", "hours"];
  skills: Skill[];
  currentSkill: Skill;
  showHeading = false;

  ngOnInit() {
    this.service.getSkills().subscribe(data => {
      this.skills = data;
      console.log("skills", data);
    });
  }

  getGreeting() {
    return "Hello World";
  }

  selectSkill(s: Skill) {
    this.currentSkill = { ...s };
  }

  toggleHeading() {
    this.showHeading = !this.showHeading;
  }

  saveSkill(updated: Skill) {
    this.skills = this.skills.filter(s => s.id != updated.id);
    this.skills.push(updated);
  }
}
