import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';
import { ISkill, LevelType } from '../skill.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills:ISkill[]
  public levelType=LevelType
  
  constructor(private skillService:SkillService,  private modalService: NgbModal) { }

  ngOnInit() {
    this.skills = this.skillService.getSkills();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
