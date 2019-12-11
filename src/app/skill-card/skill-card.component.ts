import { Component, OnInit, Input } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';
import { ISkill, LevelType } from '../skill.model';
import { SkillService } from '../skill.service';
import { SkillDetailService } from '../skill-detail.service';

@Component({
  selector: 'skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {
@Input() skill:ISkill;
@Input() index:Number;

isCollapsed=true;
public levelType=LevelType

  constructor(public skillService:SkillService,private skillDetailService:SkillDetailService) {
  
  }

  ngOnInit() {
  }

  expandDetails()
  {
    this.skillDetailService.expand(this.index,this.skill);
    //data-toggle="collapse" data-target="#cardCollapse"  aria-expanded="false" aria-label="View Experience" (click)="isCollapsed = !isCollapsed" [attr.aria-expanded]="!isCollapsed" aria-controls="cardCollapse"
  }

}
