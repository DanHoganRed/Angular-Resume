import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { BioComponent } from './bio/bio.component';
import { SkillModule } from './skill/skill.module';

@NgModule({
  declarations: [
    HomeComponent,
    BioComponent,
  ],
  exports: [
    HomeComponent,
    BioComponent,
  ],
  imports: [
    NgbModule,
    RouterModule,
    BrowserModule,
    SkillModule,
  ],
  providers: []
})
export class HomeModule {}
