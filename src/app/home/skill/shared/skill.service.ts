import { Injectable } from '@angular/core';
import { ISkill, LevelType } from './skill.model';

@Injectable({
  providedIn: 'root'
})

/*
 * This service handles retrieving skills for other components.
 * Normally this service would handle calls to a db but this is just for a static
 * webpage so I can get away with hardcoding skills.
 */
export class SkillService {
  getSkills():ISkill[]{
    return SKILLS
  }

  constructor() { }
}

//Define all of the skill data
const SKILLS: ISkill[] = [
  {
    descript:"Strong Java experience achieved through coursework and work experience. Many courses at Carleton were Java specific. They focused on teaching the fundamentals of object oriented programing. Additionally other tools were explored such as the Spring framework to make web apps, HQL for ORM and JUnit for testing. All of these skills were further developed through my year long coop position at TravelClick.",
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
    descript:"Strong experience of C# achieved through daily development at AMA and Avanade. At AMA I worked with ASP.NET and the entity framework to build AMA's website backend. At Avanade I focused mainly on developing Dynamics 365 plugins utilizing the CRM SDK. Additionally my 4th year engineering project at Carleton utilized Xamarin for mobile development done in C#.",
    time:"SDF",
    title:"C#",
    level:LevelType.LEVEL_FOUR
  },
  {
    descript:"Skills developed with Angular through daily development at AMA, online courses and personal projects. AMA used Angular as a frontend framework to support their website. Additionally I have completed multiple courses on pluralsight teaching the fundamentals of Angular. With the knowledge gained from these courses I have developed this resume using Angular to put these skills into practice.    ",
    time:"SDF",
    title:"Angular",
    level:LevelType.LEVEL_THREE
  },
  {
    descript:"Experienced with Javascript and Typescript through 3+ years combined professional experience at AMA, Avanade and TravelClick. Courses at Carleton included front-end development with Javascript as well. Comfortable writing logic to process data, manuipulate the DOM, call external API's and using external libraries such as JQuery or RXJS.",
    time:"SDF",
    title:"JavaScript",
    level:LevelType.LEVEL_THREE
  },
  {
    descript:"I spent one year devloping a custom Dynamics CRM solution for an Avanade Project. Work included; creating custom plugins, actions and workflows in C#, developing custom form logic using primarily using Javascript and assisting with setting up environment infrastucture.",
    time:"SDF",
    title:"Dynamics 365",
    level:LevelType.LEVEL_THREE
  },
  {
    descript:"I am very familiar with Agile Development both in practice and in theory. In Carleton I attended a course dedicated to development processes with a large portion covering Agile Development. Additionally Agile development was the ideology used in both TravelClick, Avanade and AMA.",
    time:"SDF",
    title:"Agile Development",
    level:LevelType.LEVEL_THREE
  },
  {
    descript:"I am most familar and effecient using TFS and Git. I have used Git while at Carleton University for multiple projects. I have also used Git for all development done at Travelclick and AMA. Additionally I used TFS for source control while at Avanade.",
    time:"SDF",
    title:"Source Control",
    level:LevelType.LEVEL_THREE
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
    descript:"Strong experience writing complex SQL queries and statements. Experience through programming courses taken in carleton including a database specific course where I learned additional theory in database design. Additional experience using MySQL in TravelClick and SQL Server at Avanade and AMA. However I have not been put in a role of a dba in charge of maintaining or optimizing a database.",
    time:"SDF",
    title:"SQL",
    level:LevelType.LEVEL_THREE
  },
  {
    descript:"Utilized Linux shell in my coop positions giving me the ability to do basic shell operations. In my position at TravelClick I used the linux shell to traverse various remote servers and analyze log files. At Blackberry QNX the development environment was run on Ubuntu and scripts were executed and developed using the terminal. ",
    time:"SDF",
    title:"Linux Shell Scripting",
    level:LevelType.LEVEL_TWO
  },
  {
    descript:"I have experience developing for Android through my 4th year engineering project at Carleton. My 4th year engineering project was developed using Xamarin in Visual Studio. My development was done for Android devices and included developing backend communication, designing views and functionality using components such as forms, popups and navigation drawers. Additionally I have done some work on unfinished apps in traditional Android studio.",
    time:"SDF",
    title:"Android Mobile Dev",
    level:LevelType.LEVEL_TWO
  },
  {
    descript:"I have light experience with Python scripting in school. I completed a course dedicated to lightweight python scripting such as writing a script to apply filters on images and a script to do word counts on a text file using regression.",
    time:"SDF",
    title:"Python",
    level:LevelType.LEVEL_TWO
  }
]