import { Component } from '@angular/core';
import { SlideService } from '../slide.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
/**
 * This component control the home page layout. Uses the slider service 
 * to figure out the active slide to show. 
 */
export class HomeComponent  {

  slider:SlideService

  constructor(slider:SlideService) { 
    this.slider = slider;

  }
}
