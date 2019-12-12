import { Component, OnDestroy, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { fromEvent, Observable, Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'angular-resume';
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription

  /**
   * This function will setup the clickable area for the 
   * arrow on the homepage and setup an subscription to the window resize
   * event that will resize the clickable area when the window is resized.
   */
  ngOnInit()
  {
    this.setClickableArrow()
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.pipe(debounceTime(1000)).subscribe( evt => { //have to debounce or else this will get called way too much.
      this.setClickableArrow()
    })
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }

  /**
   * This function will do some math to check the dimensions of the
   * arrow picture and set the clickable arrow based on a found ratio.
   */
  setClickableArrow()
  {
    var width:number = (Number)($('.down')[0]["width"]);
    var height:number = (Number)($('.down')[0]["height"]);
    /* Set the area for the clickable arrow. */
    var point1 = width*0.1+","+height*0.53;
    var point2 = width*0.245+","+height*0.53;
    var point3 = width*0.173+","+height*0.77;
    $('#ArrowArea')[0]["coords"] = point1+","+point2+","+point3;//I have to temporarily set the coordinates through jQuery. I should have put more of the index.html content in app.component.html
  }
}
