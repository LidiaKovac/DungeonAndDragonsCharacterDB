interface Option {
    val: string;
    display: string;
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
    str: number;
    cos: number;
    dex: number;
    int: number;
    cha: number;
    wis: number;
    speed: number;
    type: "race" | "subrace"
}

interface Throws {
    str: number,
    dex: number,
    cos: number,
    wis: number,
    int: number
  }

class CharBody {

    name?: string;
    id?: string

    str?: number;
    cos?: number;
    dex?: number;
    int?: number;
    cha?: number;
    wis?: number;
    ab_prof_1?: string
    ab_prof_2?: string
    ab_prof_3?: string
    ab_prof_4?: string
    hit_points?: number

    level?: number
    classes: string[]
    race: string
    constructor(name, id, str, cos, dex, int, cha, wis, ab_prof_1, ab_prof_2, ab_prof_3, ab_prof_4, hit_points, level, classes, race,) {
        this.name = name;
        this.id = id

        this.str = str;
        this.cos = cos;
        this.dex = dex;
        this.int = int;
        this.cha = cha;
        this.wis = wis;
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