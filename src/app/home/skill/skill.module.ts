import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { SkillDetailedCardComponent } from './skill-detailed-card/skill-detailed-card.component';
import { SkillComponent } from './skill.component';
import { BrowserModule } from '@angular/platform-browser';
import { SkillDetailService } from './shared/skill-detail.service';
import { SkillService } from './shared/skill.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SkillComponent,
    SkillCardComponent,
    SkillDetailedCardComponent
  ],
  exports: [
    SkillComponent,
    SkillCardComponent,
    SkillDetailedCardComponent
  ],
  imports: [
    NgbModule,
    RouterModule,
    BrowserModule,
    SharedModule
  ],
  providers: [SkillDetailService,SkillService],
})
export class SkillModule {}
