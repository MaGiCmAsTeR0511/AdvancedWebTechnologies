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
  displayedColumns: string[] = ["id", "name", "hours", "actions"];
  skills: Skill[];
  currentSkill: Skill = { id: 0, name: "", hours: 0 };
  showFormAdd = false;
  dataSource = this.service.getSkills();

  ngOnInit() {
    this.service.getSkills().subscribe(data => {
      this.skills = data;
    });
  }

  deleteSkill(s: Skill) {
    this.service.deleteSkill(s);
  }

  selectSkill(s: Skill) {
    console.log(s);
    this.currentSkill = { ...s };
  }

  /*toggleHeadingNewSkill() {
    this.showFormAdd = !this.showFormAdd;
  }*/

  addSkill() {
    this.currentSkill = { id: 0, name: "", hours: 0 };
  }

  saveSkill(updated: Skill) {
    this.skills = this.skills.filter(s => s.id != updated.id);
    this.skills.push(updated);
  }
}
