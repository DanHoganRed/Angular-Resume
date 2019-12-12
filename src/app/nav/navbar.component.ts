import { Component } from "@angular/core";
import { SlideService } from "../slide.service";

@Component({
    selector: 'nav-bar',
    template: `
    <nav class="navbar navbar-default border" style="background:#4c849985">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Dan Hogan</a>
      </div>
      <ul class="nav nav-pills">
        <li class="nav-item" (click)='slider.setCurrentSlide(0)'><button class="nav-link" [ngClass]="slider.getCurrentSlide() === 0 ? 'active':'' ">Bio</button></li>
        <li class="nav-item" (click)='slider.setCurrentSlide(1)'><button class="nav-link" [ngClass]="slider.getCurrentSlide() === 1 ? 'active':'' ">Skills</button></li>
      </ul>
    </div>
  </nav>
    `,
    styles:[`
    .navbar-default {
      
    }
    button.nav-link { 
      background:none;
      border:none; 
    }
    .navbar-brand {
      color:white
    }
    .nav-link.active {
      background-color:#a7b1b1b8
    }
    `]
    
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