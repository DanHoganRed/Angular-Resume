import { Component, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import * as $  from 'jquery';
import { fromEvent, Observable, Subscription } from "rxjs";
import {debounceTime} from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'angular-resume';
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription

  //coords:string;
  ngOnInit()
  {
    this.setClickableArrow()
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.pipe(debounceTime(1000)).subscribe( evt => {
      this.setClickableArrow()
    })
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }

  setClickableArrow()
  {
    var width:number = (Number)($('.down')[0]["width"]);
    var height:number = (Number)($('.down')[0]["height"]);
    /* Set the area for the clickable arrow. */
    var point1 = width*0.1+","+height*0.53;
    var point2 = width*0.245+","+height*0.53;
    var point3 = width*0.173+","+height*0.77;
    //"60,180,150,180,105,265"
    $('#ArrowArea')[0]["coords"] = point1+","+point2+","+point3;//I have to temporarily set the coordinates through jQuery. I should have put more of the index.html content in app.component.html
    //this.coords = point1+","+point2+","+point3;
  }
}
