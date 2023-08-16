import { useRef, useEffect } from "react"
export const die = (max: number): number => {
    return Math.floor(Math.random() * (max - 1)) + 1
}

export const calculateProf = (lvl: number) => {
    console.log(lvl);

    if (lvl >= 1 && lvl <= 4) {
        return 2
    }
    if (lvl >= 5 && lvl <= 8) {
        return 3
    }
    if (lvl >= 9 && lvl <= 12) {
        return 4
    }
    if (lvl >= 13 && lvl <= 16) {
        return 5
    }
    if (lvl >= 17 && lvl <= 20) {
        return 6
    }
}

export const profs = (chosenClass: DNDClass, lvl: number) => {
    const profs = ["prof_1", "prof_2", "prof_3", "prof_4"]
    let profValues = {}
    for (const key in chosenClass) {
        if (
            Object.prototype.hasOwnProperty.call(chosenClass, key) &&
            profs.includes(key)
        ) {
            const value = chosenClass[key as keyof DNDClass]
            profValues = {
                ...profValues,
                [value as keyof DNDClass]: calculateProf(lvl),
            }
        }
    }
    return profValues
}

export function usePrevious(value: string) {
    const ref = useRef<string>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export const abs = ["str", "dex", "con", "int", "wis", "cha"]