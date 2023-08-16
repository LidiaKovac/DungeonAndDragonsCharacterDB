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

interface Throws {
  [field: string]: number
  str: number
  dex: number
  cos: number
  wis: number
  int: number
}

interface CharBody {
  [key: string]: any

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
  Class: Classes
  Race: RacialTrait
  description: string
  deathScore: number
  createdAt: Date;
  updatedAt: Date;

}


interface defaultInitialState {
  loading: boolean
  error: string | null
}

interface User {
  id: number
  full_name: string
  nickname: string
  email: string
}

interface userInitialState extends defaultInitialState {
  logged: User
}

interface passiveInitialState extends defaultInitialState {
  classes: Array<DNDClass>
  races: Array<DNDRace>
}

interface Skill {
  name: string
  ab: string
}

interface tokenInitialState extends defaultInitialState {
  token: string
}
interface charInitialState extends defaultInitialState {
  newChar: CharBody
  newThrows: Throws
  myChars: Array<CharBody>
  selectedChar: {
    char: CharBody,
    modifiers: Modifiers
    skills: Array<Skill>
  }
  editMode: boolean
  color: "blue" | "pink" | "orange" | "green"
}


interface SingleMod {
  mods: {
    amount: number
    source: "class" | "race" | "die" //???????????
  }[]
  total: number
}
interface Modifiers {
  [key: string]: SingleMod
  cha: SingleMod
  str: SingleMod
  con: SingleMod
  dex: SingleMod
  int: SingleMod
  wis: SingleMod
}