import { Component, OnInit } from "@angular/core";
import { SkillsService } from "../skills/skills.service";

@Component({
  selector: "app-kpi-bar",
  templateUrl: "./kpi-bar.component.html",
  styleUrls: ["./kpi-bar.component.scss"]
})
export class KpiBarComponent implements OnInit {
  constructor(private service: SkillsService) {}

  sum: number = 0;

  ngOnInit() {
    this.service.getSkills().subscribe(skills => {
      this.sum = skills.reduce((runningSum, Skill) => {
        return runningSum + Skill.hours;
      }, 0);
    });
  }
}
