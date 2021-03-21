import { Injectable } from '@angular/core';
import { SkillDetailedCardComponent } from '../skill-detailed-card/skill-detailed-card.component';

@Injectable({
  providedIn: 'root'
})
/*
 * This service is used for displaying for skill data in the 
 * expanded details row. It functions by expanding the last details pane 
 * in a row through some calculations.
 */
export class SkillDetailService {
  rowLength: number;
  detailPanes:Array<SkillDetailedCardComponent>;

  constructor() {
    this.rowLength = 0;
    this.detailPanes = new Array<SkillDetailedCardComponent>();
   }

  /*
   * All of the detail panes are added to the service.
   */
  public add(SkillDetailCard,index)
  {
    this.detailPanes.push(SkillDetailCard);
  }

  /*
   * The number of cards per row depending on the screen size.
   */
  public setRowLength(l: number)
  {
    this.rowLength = l;
  }

  /**
   * This method is called when the view experience button is clicked.
   * The index of the card and the skill data is passed and used to populate
   * the correct details pane.
   */
  public expand(index,skill)
  {
    let openIndex = 0;
    //Get the remaining positions until the end of the row.
    const offset = this.rowLength - ((index + 1) % this.rowLength);
    // if already the last position in the row.
    if(offset === this.rowLength)
    {
      openIndex = index;
    }
    else{
      openIndex = index + offset;
      // if you overshoot the last index.
      if(openIndex >= this.detailPanes.length)
      {
        openIndex = this.detailPanes.length-1;
      }
    }

    this.detailPanes[openIndex].skill = skill;
    this.detailPanes[openIndex].expandCollapse(index);
  }
}
