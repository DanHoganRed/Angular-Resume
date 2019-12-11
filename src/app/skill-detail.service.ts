import { Injectable } from '@angular/core';
import { SkillDetailedCardComponent } from './skill-detailed-card/skill-detailed-card.component';

@Injectable({
  providedIn: 'root'
})
export class SkillDetailService {
  endIndexs:Array<number>;
  detailPanes:Array<SkillDetailedCardComponent>;

  constructor() {
    this.endIndexs = new Array<number>();
    this.detailPanes = new Array<SkillDetailedCardComponent>();
   }

  public add(SkillDetailService,index)
  {
    this.endIndexs.push(index);
    this.detailPanes.push(SkillDetailService);
  }

  public expand(index,skill)
  {
    var count = 0;
    var stop = false;
    this.endIndexs.forEach(function(i)
    {
      if(!stop && index <= i)
      {
        this.detailPanes[count].skill = skill;
        this.detailPanes[count].expandCollapse(index);
        stop=true;
      }
      count++;
      
    },this)
  }
}
