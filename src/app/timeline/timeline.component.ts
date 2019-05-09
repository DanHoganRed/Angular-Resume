import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'
import { EventService } from '../event.service';
import { IEvent } from '../event.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  events:IEvent[]

  constructor(location: Location,private eventService:EventService,private route:ActivatedRoute, private modalService: NgbModal) { 
    
  } 

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  showRoute(){
    console.log(location.hash)
  }

  isEqualToHash(hashVal)
  {
    return hashVal == location.hash;
  }
}
