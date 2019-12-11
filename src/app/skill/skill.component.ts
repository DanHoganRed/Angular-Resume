import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';
import { ISkill, LevelType } from '../skill.model';
import { $ } from 'protractor';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills:ISkill[]
  public levelType=LevelType
  index = 1;

  constructor(private skillService:SkillService) { }

  ngOnInit() {
    this.skills = this.skillService.getSkills();
    var cardRow = window.screen.width - document.getElementsByClassName('col-3')[0].clientWidth
    var cardW = 250;
    this.index = cardRow / cardW;
    this.index = Math.trunc(this.index);
    for(var i=0;i<this.skills.length;i++)
    {
      if(this.addBreak(i))
      {
        this.skills.splice(i, 0, null);
        i++;
      }
    }
    this.skills.splice(this.skills.length,0,null);
  }

  addBreak(i)
  {
    return ((i+1)%(this.index+1) == 0); 
  }
}
