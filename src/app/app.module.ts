import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import {NgbModule, NgbCarousel, NgbCarouselConfig, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { RouterModule } from '@angular/router';
import {appRoutes} from './routes'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillComponent } from './skill/skill.component';
import { $ } from 'protractor';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { SkillDetailedCardComponent } from './skill-detailed-card/skill-detailed-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BioComponent,
    SkillComponent,
    SkillCardComponent,
    SkillDetailedCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
