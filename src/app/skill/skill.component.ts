import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';
import { ISkill, LevelType } from '../skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills:ISkill[]
  public levelType=LevelType
  
  constructor(private skillService:SkillService) { }

  ngOnInit() {
    this.skills = this.skillService.getSkills();
  }

}
