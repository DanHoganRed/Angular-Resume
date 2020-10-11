//Define the skill data model
export interface ISkill {
    descript:String
    time:String
    title:String
    level:LevelType
}

//Define an enum for leveltype because it's nicer to deal with.
export enum LevelType{
    LEVEL_ONE,
    LEVEL_TWO,
    LEVEL_THREE,
    LEVEL_FOUR
  }
