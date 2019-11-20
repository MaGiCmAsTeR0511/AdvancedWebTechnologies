import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Skill } from "./skill.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class SkillsService {
  constructor(private http: HttpClient) {}

  url = environment.apiurl;

  getSkills() {
    return this.http.get<Skill[]>(this.url);
  }
}
