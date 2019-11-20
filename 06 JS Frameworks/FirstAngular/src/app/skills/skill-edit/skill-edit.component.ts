import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Skill } from "../skill.model";

@Component({
  selector: "app-skill-edit",
  templateUrl: "./skill-edit.component.html",
  styleUrls: ["./skill-edit.component.scss"]
})
export class SkillEditComponent implements OnInit {
  @Input() skill: Skill;
  @Output() onSkillSaved: EventEmitter<Skill> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  saveSkill() {
    this.onSkillSaved.emit(this.skill);
  }
}
