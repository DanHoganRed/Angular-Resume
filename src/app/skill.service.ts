import { Injectable } from '@angular/core';
import { ISkill,LevelType } from './skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  getSkills():ISkill[]{
    return SKILLS
  }

  constructor() { }
}

const SKILLS: ISkill[] = [
  {
    descript:"STRONG KNOWLEDGE OF",
    title:"JAVA",
    level:LevelType.LEVEL_FOUR
  },
  {
    descript:"STRONG KNOWLEDGE OF",
    title:"C",
    level:LevelType.LEVEL_FOUR
  },
  {
    descript:"STRONG KNOWLEDGE OF",
    title:"C#",
    level:LevelType.LEVEL_FOUR
  },
  {
    descript:"STRONG KNOWLEDGE OF",
    title:"JavaScript",
    level:LevelType.LEVEL_THREE
  },
  {
    descript:"PowerShell",
    title:"PowerShell",
    level:LevelType.LEVEL_FOUR
  },
  {
    descript:"Assembly",
    title:"Assembly",
    level:LevelType.LEVEL_FOUR
  },
  {
    descript:"Angular",
    title:"Angular",
    level:LevelType.LEVEL_TWO
  },
  {
    descript:"Machine Learning",
    title:"Machine Learning",
    level:LevelType.LEVEL_ONE
  }
]