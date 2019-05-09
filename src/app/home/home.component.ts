import { Component, OnInit, Input } from '@angular/core';
import { SlideService } from '../slide.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slider:SlideService

  constructor(slider:SlideService) { 
    this.slider = slider;

  }

  

  ngOnInit() {
    
  }

}
