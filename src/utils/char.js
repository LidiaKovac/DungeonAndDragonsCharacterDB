import { calcModifier, calcProf, getProfAbilities, getBonus } from './index'
//let abilities = ["str", "cos", "int", "wis", "cha", "dex"];
export const setClass = (chosenClass, pg) => {
    console.log(chosenClass);
        const profs = getProfAbilities(chosenClass)
        let char = pg
        console.log(profs);
        profs.forEach(pr => {
            console.log(pr, char);
            char = {
                ...char, 
                class: chosenClass,
                abilities: {
                    ...char.abilities,
                    [pr]: {
                        ...char.abilities[pr],
                        save: char.abilities[pr].base + calcProf(Number(char.lvl))
                    }
                }
            }
        })
        console.log(char);
    return char
}

export const setRace = (chosenRace, profs, pg) => {
    const bonus = getBonus(chosenRace)
    console.log(bonus);
    console.log(pg);
    let char = pg
    if (bonus.length > 0) {
        bonus.forEach(b => {
            console.log(b);
            char = {
                ...char,
                abilities: {
                    ...char?.abilities,
                    [b.ab]: {
                        base: char.abilities[b.ab]?.base + b.mod,
                        modifier: calcModifier(char.abilities[b.ab].base + b.mod),
                        save: profs?.includes(b.ab) ? char.abilities[b.ab].base + calcProf(Number(pg.lvl)) : pg.abilities[b.ab].base
                    }
                }
            }
        })
    }
    if (char.class !== "") {
        char = setClass(char.class, char)
    }
    console.log(char);
    return char
}

export const setLevel = (lvl, pg) => {
    return {...pg, lvl}
}

export const setAbility = (abName, value, pg) => {
    let char = pg
    char = {
        ...char, 
        abilities: {
            ...char.abilities,
            [abName]: {
                base: Number(value[abName]),
                modifier: calcModifier(Number(value[abName])),
                save: Number(value[abName]) //tbd
            }
        }
    }
    if (char?.class?.length > 0) char = setClass(char.class, char)
    if (char?.race?.length > 0)  char = setRace(char.race, getProfAbilities(char.class), char)
    console.log(char);
    return char
}