export interface ability {
    base: number,
    modifier?: number,
    save?:number
}

interface abilities_int {
    str?: ability,
    dex?: ability,
    cos?: ability,
    wis?: ability,
    int?: ability
}
export interface character_sheet {
    name?: string
    lvl?: number
    race?:string
    class?:string
    abilities?: abilities_int
}
/* export class character_sheet {
    name?: string
    lvl?: number
    abilities?: abilities_int
    constructor(name:string, lvl:number,abilities:abilities_int ) {
        this.name =  name, 
        this.lvl = lvl,
        this.abilities = abilities
    }
    setAbility(ability_object:object) {
        //add check for "str" | "dex" | "cos" | "wis" | "int"
        console.log("here as well",ability_object)
    }
} */