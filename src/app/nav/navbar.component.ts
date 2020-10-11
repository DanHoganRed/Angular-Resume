import { Component } from "@angular/core";
import { SlideService } from "../slide.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls:['./navbar.component.scss']
    
  })
  /**
   * This component uses the slider service to figure out which screen to show.
   */
  export class NavBarComponent {
    slider:SlideService

    constructor(slider:SlideService)
    {
      this.slider=slider;
    }

  }