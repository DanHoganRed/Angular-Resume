import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SkillDetailService } from '../skill-detail.service';
import { ISkill, LevelType } from '../skill.model';

@Component({
  selector: 'skill-detailed-card',
  templateUrl: './skill-detailed-card.component.html',
  styleUrls: ['./skill-detailed-card.component.css']
})
export class SkillDetailedCardComponent implements OnInit {
  @Input() index;
  @ViewChild('details') detailsRow: ElementRef;
  isCollapsed = true;
  skill:ISkill;
  current:number;
  public levelType=LevelType;

  constructor(private skillDetailService:SkillDetailService) {
   }

  ngOnInit() {
    this.skillDetailService.add(this, this.index);
  }

  expandCollapse(current)
  {
    if(this.current == current)
    {
      this.isCollapsed = !this.isCollapsed;
      if(!this.isCollapsed)
      {
        setTimeout(()=>{
          this.detailsRow.nativeElement.scrollIntoViewIfNeeded({behavior: 'smooth'});
        }
        ,200,this);
      }
    }
    else
    {
      this.isCollapsed = false;
      setTimeout(()=>{
        this.detailsRow.nativeElement.scrollIntoViewIfNeeded({behavior: 'smooth'});
      }
      ,200,this);
    }
    this.current = current;
  }

}
