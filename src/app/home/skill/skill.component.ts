import { Component, OnInit } from '@angular/core';
import { ISkill, LevelType } from './shared/skill.model';
import { SkillService } from './shared/skill.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { SkillDetailService } from './shared/skill-detail.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
/**
 * This class handles the population of the skill cards in the card group.
 */
export class SkillComponent implements OnInit {
  skills:ISkill[]//The skills in the card group 
  public levelType=LevelType
  index = 1;

  constructor(private skillService:SkillService, private breakpointObserver: BreakpointObserver, private skillDetailService: SkillDetailService) {
    // keep track of the screen size and adjust the row lengths accordingly.  
    breakpointObserver.observe([
        Breakpoints.XLarge,
        Breakpoints.Large,
        Breakpoints.Medium,
        Breakpoints.Small,
        Breakpoints.XSmall,
      ]).subscribe(result => {
        if(this.breakpointObserver.isMatched(Breakpoints.XLarge) || this.breakpointObserver.isMatched(Breakpoints.Large))
        {
          this.skillDetailService.setRowLength(3);
        }
        else if(this.breakpointObserver.isMatched(Breakpoints.Medium) || this.breakpointObserver.isMatched(Breakpoints.Small))
        {
          this.skillDetailService.setRowLength(2);
        }
        else if(this.breakpointObserver.isMatched(Breakpoints.XSmall))
        {
          this.skillDetailService.setRowLength(1);
        }
      });
   }

  ngOnInit() {
    this.skills = this.skillService.getSkills();
  }
}
