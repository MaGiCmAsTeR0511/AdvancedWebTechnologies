import { Component, OnInit } from "@angular/core";
import { SkillsService } from "../skills/skills.service";
import { Skill } from "../skills/skill.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
}
