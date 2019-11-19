import { Component, OnInit } from "@angular/core";
import { SkillsService } from "../skills/skills.service";
import { Skill } from "../skills/skill.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private service: SkillsService) {}

  skills: Skill[];

  ngOnInit() {
    this.service.getSkills().subscribe(data => {
      this.skills = data;
      console.log("skills", data);
    });
  }

  selectSkill(s: Skill) {
    console.log("you selected", s);
  }
}
