import { Component, Input } from '@angular/core';
import { SkillDetailService } from '../shared/skill-detail.service';
import { ISkill, LevelType } from '../shared//skill.model';
import { SkillService } from '../shared/skill.service';

@Component({
  selector: 'skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
/**
 * Component for a skill card. When View Experience is clicked this class will call the
 * the skill details service with the it's index so the details
 * pane can expand.
 */
export class SkillCardComponent {
@Input() skill:ISkill;
@Input() index:Number;
public levelType=LevelType

  constructor(public skillService:SkillService,private skillDetailService:SkillDetailService) {
  
  }

  expandDetails()
  {
    this.skillDetailService.expand(this.index,this.skill);
  }

}
