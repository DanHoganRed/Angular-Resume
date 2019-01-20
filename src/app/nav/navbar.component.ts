import { Component, Input } from "@angular/core";
import {CarouselComponent} from "ngx-bootstrap/carousel"
import { SlideService } from "../slide.service";

@Component({
    selector: 'nav-bar',
    template: `
    <nav class="navbar navbar-default border border-dark">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Dan Hogan</a>
      </div>
      <ul class="nav nav-pills">
        <li class="nav-item" (click)='slider.setCurrentSlide(0)'><button class="nav-link" [ngClass]="slider.getCurrentSlide() === 0 ? 'active':'' ">Bio</button></li>
        <li class="nav-item" (click)='slider.setCurrentSlide(1)'><button class="nav-link" [ngClass]="slider.getCurrentSlide() === 1 ? 'active':'' ">Work Experience</button></li>
        <li class="nav-item" (click)='slider.setCurrentSlide(2)'><button class="nav-link" [ngClass]="slider.getCurrentSlide() === 2 ? 'active':'' ">TimeLine</button></li>
      </ul>
    </div>
  </nav>
    `,
    styles:[`
    .navbar-default {
      border-color: darkblue;
    }
    button.nav-link { 
      background:none;
      border:none; 
    }
    `]
    
  })
  export class NavBarComponent {
    slider:SlideService

    constructor(slider:SlideService)
    {
      this.slider=slider;
    }

  }