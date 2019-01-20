import { Component, OnInit, Input } from '@angular/core';
import { CarouselComponent } from 'ngx-bootstrap/carousel';
import { SlideService } from '../slide.service';

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
