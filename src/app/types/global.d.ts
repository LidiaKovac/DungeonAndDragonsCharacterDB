interface Option {
  val: string
  display: string
}

interface DNDClass {
  id: string
  name: string
  parent_class: string
  source_name: string
  hit_die: number
  prof_1: string
  prof_2: string
  prof_3: string
  prof_4: string
  spellProgression: string
  spellAbility: string
  armorProf: string
  weaponProf: string
  toolsProf: string
  skillProfNum: number
  skillProf: string
  startEquip: string
}

interface DNDRace {
  id: string
  name: string
  source_id: string
  source_name: string
  str: number
  cos: number
  dex: number
  int: number
  cha: number
  wis: number
  speed: number
  type: "race" | "subrace"
}

interface Throws extends Record<string, number> {
  str: number
  dex: number
  cos: number
  wis: number
  int: number
}

interface ApiResp<T> {
  char:T
  skills: Skill[]
  modifiers: Modifiers
}

interface Character extends Record<string, string | number | DNDClass | DNDRace | Date> {

  id: string;
  name: string;

  str: number;
  con: number;
  dex: number;
  int: number;
  cha: number;
  wis: number;
  initiativeMod: number;
  currentInitiative: number;
  skillProfLeft: number
  hit_points: number
  level: string
  Class: DNDClass
  Race: DNDRace
  description: string
  deathScore: number
  createdAt: Date;
  updatedAt: Date;

}



interface User {
  id: number
  full_name: string
  nickname: string
  email: string
}


interface Skill {
  name: string
  ab: string
}


interface SingleMod {
  mods: {
    amount: number
    source: "class" | "race" | "die" //???????????
  }[]
  total: number
}
interface Modifiers extends Record<string, SingleMod> {
  cha: SingleMod
  str: SingleMod
  con: SingleMod
  dex: SingleMod
  int: SingleMod
  wis: SingleMod
}
