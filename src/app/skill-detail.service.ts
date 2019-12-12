import { Injectable } from '@angular/core';
import { SkillDetailedCardComponent } from './skill-detailed-card/skill-detailed-card.component';

@Injectable({
  providedIn: 'root'
})
/*
 * This service is used for displaying for skill data in the 
 * expanded details row.
 */
export class SkillDetailService {
  endIndexs:Array<number>;
  detailPanes:Array<SkillDetailedCardComponent>;

  /*
   * In order to keep track of each card in the card group I
   * have keep their index in the card group in mind. The endIndexs
   * array keeps track of the indexes in the card group that would be
   * at the end of the row where the details will be. The detailsPanes
   * object is and instance of those details row.  
   */
  constructor() {
    this.endIndexs = new Array<number>();
    this.detailPanes = new Array<SkillDetailedCardComponent>();
   }

  /*
   * When the skill cards are being populated in the card group and
   * and the end of a row is found this method is called so that the
   * created skills detail card is added to the service for use.
   */
  public add(SkillDetailCard,index)
  {
    this.endIndexs.push(index);
    this.detailPanes.push(SkillDetailCard);
  }

  /**
   * This method is called when the view experience button is clicked.
   * The index of the card and the skill data is passed and used to populate
   * the correct details pane.
   */
  public expand(index,skill)
  {
    var count = 0;
    var stop = false;//Stop at the first suitable details pane found
    //Check each skill details pane position. Expand the details pane 
    //with an index that is the first to be greater than the selected card index.  
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
