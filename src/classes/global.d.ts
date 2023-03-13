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

class CharBody {
  [key: string]: any

  name?: string
  id?: string

  str?: number
  cos?: number
  dex?: number
  int?: number
  cha?: number
  wis?: number
  ab_prof_1?: string
  ab_prof_2?: string
  ab_prof_3?: string
  ab_prof_4?: string
  hit_points?: number

  level?: number
  Class: DNDClass
  Race: DNDRace
  constructor(
    name,
    id,
    str,
    cos,
    dex,
    int,
    cha,
    wis,
    ab_prof_1,
    ab_prof_2,
    ab_prof_3,
    ab_prof_4,
    hit_points,
    level,
    classes,
    race
  ) {
    this.name = name
    this.id = id

    this.str = str
    this.cos = cos
    this.dex = dex
    this.int = int
    this.cha = cha
    this.wis = wis
    this.ab_prof_1 = ab_prof_1
    this.ab_prof_2 = ab_prof_2
    this.ab_prof_3 = ab_prof_3
    this.ab_prof_4 = ab_prof_4
    this.hit_points = hit_points

    this.level = level
    this.classes = classes
    this.race = race
  }
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

interface tokenInitialState extends defaultInitialState {
  token: string
}
interface charInitialState extends defaultInitialState {
  newChar: CharBody
  newThrows: Throws
  myChars: Array<CharBody>
  selectedChar:CharBody
}
