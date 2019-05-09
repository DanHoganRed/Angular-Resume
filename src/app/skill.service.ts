import { Injectable } from '@angular/core';
import { ISkill,LevelType } from './skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  getSkills():ISkill[]{
    return SKILLS
  }

public GetTrimmedSkillDescription(skill:ISkill):String
{
  return skill.descript.substring(0,skill.descript.indexOf("."))+"..."
}

  constructor() { }
}

const SKILLS: ISkill[] = [
  {
    descript:"Strong Java experience achieved through coursework and work experience. Many courses at Carleton were Java specific teaching the fundamentals of object oriented programing. Additionally other tools were explored such as the Spring framework to make web apps, HQL for ORM and JUnit for testing. All of these skills were further developed through my year long coop position at TravelClick.",
    time:"SDF",
    title:"JAVA",
    level:LevelType.LEVEL_FOUR
  },
  {
    descript:"Well experienced with using C through various courses at Carleton and coop positions. Many of my courses at Carleton focused on low level programming to teach fundamentals of computing which involved using C. This included using C to interact directly with external microcontroller boards. Furthermore coop positions at Edgewater and Blackberry QNX involved testing of C code that allowed me to gain a strong knowledge of the language.",
    time:"SDF",
    title:"C",
    level:LevelType.LEVEL_FOUR
  },
  {
    descript:"Strong experience of C# achieved through coursework and my position at Avanade. Avanade is a company that specializes in .Net experience. Because of this I have been heavily exposed to C# throughout my work. Tools used while at Avanade include the ASP.Net Framework, Entity Framework and Identity Framework. Additionally my 4th year engineering project at Carleton utilized Xamarin for mobile development done in C#.",
    time:"SDF",
    title:"C#",
    level:LevelType.LEVEL_FOUR
  },
  {
    descript:"Experienced with Javascript through basic DOM manipulation with JQuery as well as interfacing with backend services through AJAX calls. Courses at Carleton included light front-end development including Javascript. Additionally my work at Travelclick Abandonment Services was strictly using Javascript to further bolster my understanding.",
    time:"SDF",
    title:"JavaScript",
    level:LevelType.LEVEL_THREE
  },
  {
    descript:"Skills developed with Angular through online courses and personal projects. I have completed multiple courses on pluralsight teaching the fundamentals of Angular. With the knowledge gained from these courses I have developed this resume to put these skills into practice.    ",
    time:"SDF",
    title:"Angular",
    level:LevelType.LEVEL_TWO
  },
  {
    descript:"Powershell experienced gained through development of infrastructure setup scripts while at Avanade. This includes OU manipulation, certificate enrolment and IIS configuration through script.",
    time:"SDF",
    title:"PowerShell",
    level:LevelType.LEVEL_TWO
  },
  {
    descript:"Assembly was a focus for many of my courses focused on computers at a low-level. Assembly was done with the x86 chip through an emulator and with HCS12 Motorola Microcontroller board.",
    time:"SDF",
    title:"Assembly",
    level:LevelType.LEVEL_TWO
  },
  {
    descript:"Machine Learning is an exciting and interesting subject for me. However I have not yet gotten any hands-on experience doing it. I am currently in the process of working through an online course focused on teaching Machine Learning through TensorFlow. Additionally I have light experience with technology leveraging machine learning such as Azure Machine Learning Studio and Azure Computer Vision.",
    time:"SDF",
    title:"Machine Learning",
    level:LevelType.LEVEL_ONE
  },
  {
    descript:"Strong experience writing complex SQL queries and statement. Experience through programming courses taken in carleton including a database specific course where I learned additional theory in database design. Additional experience using MySQL in TravelClick and SQL Server at Avanade. However I have not been put in a role of a dba in charge of maintaining or optimizing a database.",
    time:"SDF",
    title:"SQL",
    level:LevelType.LEVEL_THREE
  },
  {
    descript:"Utilized Linux shell in my coop positions giving me the ability to be able to do basic shell operations. In my position at TravelClick I used the linux shell to traverse various remote servers and analyze log files. At Blackberry QNX the development environment was run on Ubuntu and scripts were executed and developed using the terminal. Additionally I developed a script to run tests on an isolated emulator of a specific architecture.",
    time:"SDF",
    title:"Linux Shell Scripting",
    level:LevelType.LEVEL_TWO
  },
  {
    descript:"I have experience developing for Android through my 4th year engineering project at Carleton. My 4th year engineering project was developed using Xamarin in Visual Studio. My development done for Android devices and included developing backend communication, designing views and functionality using components such as forms, popups and navigation drawers. Additionally I have done some work on unfinished apps in traditional Android studio.",
    time:"SDF",
    title:"Android Mobile Development",
    level:LevelType.LEVEL_TWO
  },
  {
    descript:"I have light experience with Python scripting in school. I completed a course dedicated to lightweight python scripting such as writing a script to apply filters on images and a script to do word counts on a text file using regression. Additionally I am working on a Machine learning course that utilizes Python.",
    time:"SDF",
    title:"Python",
    level:LevelType.LEVEL_TWO
  },
  {
    descript:"I am very familiar with Agile Development both in practice and in theory. In Carleton I attended a course dedicated to development processes with a large portion covering Agile Development. Additionally Agile development was the ideology used in both TravelClick and Avanade.",
    time:"SDF",
    title:"Agile Development",
    level:LevelType.LEVEL_THREE
  }
]