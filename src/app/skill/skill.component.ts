import { Component, OnInit } from '@angular/core';
import { ISkill, LevelType } from '../skill.model';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
/**
 * This class handles the population of the skill cards in the card group.
 */
export class SkillComponent implements OnInit {
  skills:ISkill[]//The skills in the card group 
  public levelType=LevelType
  index = 1;

  constructor(private skillService:SkillService) { }

  ngOnInit() {
    this.skills = this.skillService.getSkills();//Populate the skills with the skills from the skill service.

    /**
     * I have to do some calculations to figure out where to put the
     * details pane. The idea is to look at the screen size, side info size
     * and card size to figure out how many cards can fit on the screen in
     * a row before a break. 
     */
    var cardRow = window.screen.width - document.getElementsByClassName('col-3')[0].clientWidth
    var cardW = 250;
    this.index = cardRow / cardW;
    this.index = Math.trunc(this.index);//On this index add a skill details row.
    for(var i=0;i<this.skills.length;i++)
    {
      if(this.addBreak(i))
      {
        this.skills.splice(i, 0, null);//Add a null skill at the break indexes. Once the template is evaluated it will check for a null skill to populate with the skill details component
        i++;
      }
    }
    this.skills.splice(this.skills.length,0,null);//Add final break
  }

  addBreak(i)
  {
    return ((i+1)%(this.index+1) == 0); //if that index is a multiple of the row length
  }
}
