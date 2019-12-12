import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*
 * This service keeps track of the current screen between the Bio
 * and Skill screens. They are nested in a bootstrap carousel so this
 * function keeps track of the current active slide and switching them.
 */
export class SlideService {
  currentSlide=0;//start with the Bio slide

  getCurrentSlide()
  {
    return this.currentSlide;
  }
  
  //0-Bio, 1-Skill
  setCurrentSlide(slideNum)
  {
    this.currentSlide=slideNum;
  }
}
