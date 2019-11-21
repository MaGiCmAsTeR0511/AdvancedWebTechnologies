import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Skill } from "./skills.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SkillsService {
  constructor(private httpClient: HttpClient) {
    this.init();
  }

  private arrSkills: Skill[] = [];

  private skills: BehaviorSubject<Skill[]> = new BehaviorSubject<Skill[]>(
    this.arrSkills
  );

  private init() {
    this.httpClient.get<Skill[]>("assets/skills.json").subscribe(data => {
      this.arrSkills = data;
      this.skills.next(this.arrSkills);
    });
  }

  getSkills(): Observable<Skill[]> {
    return this.skills;
  }

  addSkill(s: Skill) {
    this.arrSkills.push(s);
    this.skills.next(this.arrSkills);
  }

  deleteSkill(s: Skill) {
    this.arrSkills = this.arrSkills.filter(item => item.id != s.id);
    this.skills.next(this.arrSkills);
  }
}
