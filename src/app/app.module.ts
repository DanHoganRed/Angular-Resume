import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { SkillDetailedCardComponent } from './skill-detailed-card/skill-detailed-card.component';
import { SkillComponent } from './skill/skill.component';
import { BrowserModule } from '@angular/platform-browser';

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
    NgbModule,
    RouterModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
