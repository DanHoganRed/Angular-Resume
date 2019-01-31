import { Injectable } from '@angular/core';
import { IEvent } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }
  
  getEvents():IEvent[] 
  {
    return SKILLS;
  }
}

const SKILLS: IEvent[] = [
  {
    descript:"Participated in teaching kids to code",
    title:"Hour of Code",
    DateStarted:new Date('2018-12-06'),
    DateEnded:new Date('2018-12-06')
  },
  {
    descript:"Completed Realtor Hack",
    title:"Hackathon",
    DateStarted:new Date('2018-10-16'),
    DateEnded:new Date('2018-10-18')
  },
  {
    descript:"Started Work at Avanade",
    title:"Employed at Avanade",
    DateStarted:new Date('2018-06-17'),
    DateEnded:null
  },
  {
    descript:"Graduated Carleton for Software Engineering",
    title:"Graduated Carleton University",
    DateStarted:new Date('2013-09-01'),
    DateEnded:new Date('2018-06-17')
  },
  {
    descript:"Started Work at BlackberryShell",
    title:"Employed at Blackberry",
    DateStarted:new Date('2017-06-01'),
    DateEnded:new Date('2017-08-01')
  }
]
