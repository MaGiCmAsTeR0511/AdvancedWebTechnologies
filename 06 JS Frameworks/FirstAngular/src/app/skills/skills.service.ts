import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Skill } from "./skill.model";

@Injectable({
  providedIn: "root"
})
export class SkillsService {
  constructor(private http: HttpClient) {}

  url = "assets/skills.json";

  getSkills() {
    return this.http.get<Skill[]>(this.url);
  }
}
