import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SkillDetailService } from '../shared/skill-detail.service';
import { ISkill, LevelType } from '../shared/skill.model';

@Component({
  selector: 'skill-detailed-card',
  templateUrl: './skill-detailed-card.component.html',
  styleUrls: ['./skill-detailed-card.component.scss']
})
/**
 * This class controls the details pane for a selected skill.
 */
export class SkillDetailedCardComponent implements OnInit {
  @Input() index;//The index of this component.
  @ViewChild('details') detailsRow: ElementRef;//Get a reference to this components content so we can scroll to it.
  isCollapsed = true;//Keep track if this details pane is collapsed.
  skill:ISkill;//The current skill
  current:number;//Keeps track of the currently shown skill index
  public levelType=LevelType;

  constructor(private skillDetailService:SkillDetailService) {
   }

  ngOnInit() {
    this.skillDetailService.add(this, this.index);//Add this component to the service.
  }

  //This will control the expand and collapse functionality of the pane.
  expandCollapse(current)
  {
    if(this.current == current)//The view experience is double clicked for a skill.
    {
      this.isCollapsed = !this.isCollapsed;//close the pane if it is open or vice versa/
      if(!this.isCollapsed)//If you are opening it scroll to the details.
      {
        setTimeout(()=>{
          this.detailsRow.nativeElement.scrollIntoViewIfNeeded({behavior: 'smooth'});
        }
        ,200,this);
      }
    }
    else
    {
      this.isCollapsed = false;//when you click on a new view experience button you should open the pane no matter what.
      setTimeout(()=>{//scroll to the details.
        this.detailsRow.nativeElement.scrollIntoViewIfNeeded({behavior: 'smooth'});
      }
      ,200,this);
    }
    this.current = current;
  }

}
