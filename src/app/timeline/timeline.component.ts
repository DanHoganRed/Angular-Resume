import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  color: boolean = false;
  size: number = 40;
  alternate: boolean = true;
  toggle: boolean = true;
  
  entries = [
    {
      header: 'header',
      content: 'content',
      time:'time'
    }
  ]

  constructor(location: Location,private route:ActivatedRoute) { 
    this.addEntry('Hour of Code','Participated in teaching kids to code','Dec 2018');
    this.addEntry('Hackathon','Completed Realtor Hack','Oct 2018');
    this.addEntry('Employed at Avanade','Started Work at Avanade','June 2018-Present');
    this.addEntry('Graduated Carleton University','Graduated Carleton for Software Engineering','June 2018-Present');
    this.addEntry('Employed at Blackberry','Started Work at Blackberry','May 2017-August 2017');
  } 

  addEntry(header,content, time) {
    this.entries.push({
      header: header,
      content: content,
      time: time 
    })
  }

  onDotClick(event) {
    event.stopPropagation();
  }

  ngOnInit() {
  }

  showRoute(){
    console.log(location.hash)
  }

  isEqualToHash(hashVal)
  {
    return hashVal == location.hash;
  }

}
