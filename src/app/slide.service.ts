import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  currentSlide=0;

  getCurrentSlide()
  {
    return this.currentSlide;
  }
  
  setCurrentSlide(slideNum)
  {
    this.currentSlide=slideNum;
  }
}
