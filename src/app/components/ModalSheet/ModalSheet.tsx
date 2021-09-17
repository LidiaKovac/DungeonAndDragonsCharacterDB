import Input from "../Input/Input";
import { useState } from "react";
import "./ModalSheet.scss";
import Select from "../Select/Select";
import { useEffect } from "react";
import { getClasses, getRaces } from "../../../API/dnd_data";
import { Option } from "../../../interfaces";
import { ability, character_sheet } from "../../../interfaces/char_creation";
import { calcModifier, calcProf, getProfAbilities } from "../../../utils/index";

const ModalSheet = () => {
  let abilities = ["str", "cos", "int", "wis", "cha", "dex"];
  const [charInfo, setCharInfo] = useState<character_sheet>();
  const [proficiencies, setProficiencies] = useState<Array<string>>();
  const [classes, setClasses] = useState<Array<Option>>();
  const [races, setRaces] = useState<Array<Option>>();
  const handleClass = (selected: Option) => {
	  abilities?.forEach((prof) => {
		  let base_value = Number((document.querySelector("input#" + prof) as HTMLInputElement).value);
		  setCharInfo((old) => ({
			  ...charInfo,
			  class: selected.val,
			  abilities: {
				  ...old?.abilities,
				  [prof]: {
					  base: base_value,
					  modifier: calcModifier(base_value),
					  save: proficiencies?.includes(prof)
					  ? base_value + calcProf(Number(charInfo?.lvl))!
					  : base_value,
					},
				},
			}));
		});
		setProficiencies(getProfAbilities(selected.val));
  };
  const handleLevel = (data: any) => {
    abilities.forEach((ability) => {
      let base_value = Number(
        (document.querySelector("input#" + ability) as HTMLInputElement).value
      );
      setCharInfo((old) => ({
        ...charInfo,
        lvl: data.lvl,
        abilities: {
          ...old?.abilities,
          [ability]: {
            base: base_value,
            modifier: calcModifier(base_value),
            save: proficiencies?.includes(ability.toLowerCase())
              ? base_value + calcProf(Number(data.lvl))!
              : base_value,
          },
        },
      }));
    });
  };
  const handleAbilities = (data: ability) => {
    let ability = String(Object.entries(data!)[0][0]); //Object.entries generates an array of key/value pairs
    console.log(ability);
    let value = Number(Object.entries(data)[0][1]);
    //saveToLocalStorage(data)
    setCharInfo({
      ...charInfo,
      abilities: {
        ...charInfo?.abilities,
        [ability.toLowerCase()]: {
          base: value,
          modifier: calcModifier(value),
          save: proficiencies?.includes(ability.toLowerCase())
            ? value + calcProf(Number(charInfo?.lvl))!
            : value,
        },
      },
    });
  };
  const handleRaces = (selected: Option) => {
    abilities.forEach((ab) => {
      let base = Number((document.querySelector("input#" + ab) as HTMLInputElement).value);
      setCharInfo(old =>({
        ...charInfo,
        abilities: {
			...old?.abilities,
          [ab]: {
            base: base,
            modifier: calcModifier(base),
            save: proficiencies?.includes(ab) ? base + calcProf(Number(charInfo?.lvl))! : base,
          },
        },
      }));
    });
    //needs modified human
    switch (selected.val) {
      case "dragonborn":
        setCharInfo((old) => ({
          ...charInfo,
          race: "dragonborn",
          abilities: {
            ...charInfo?.abilities,
            str: {
              base: old?.abilities?.str?.base! + 2,
              modifier: calcModifier(old?.abilities?.str?.base! + 2),
              save: proficiencies?.includes("str")
                ? old?.abilities?.str?.base! + 2 + calcProf(Number(charInfo?.lvl))!
                : old?.abilities?.str?.base! + 2,
            },
            cha: {
              base: old?.abilities?.cha?.base! + 1,
              modifier: calcModifier(old?.abilities?.cha?.base! + 1),
              save: proficiencies?.includes("str")
                ? old?.abilities?.cha?.base! + 1 + calcProf(Number(charInfo?.lvl))!
                : old?.abilities?.cha?.base! + 1,
            },
          },
        }));
        break;
      case "dwarf":
        setCharInfo((old) => ({
          ...charInfo,
          race: "dwarf",
        }));
        break;
      case "elf" || "halfling" || "gnome":
        setCharInfo((old) => ({
          ...charInfo,
          abilities: {
            ...charInfo?.abilities,
            dex: {
              base: old?.abilities?.dex?.base! + 2,
              modifier: calcModifier(old?.abilities?.dex?.base! + 2),
              save: proficiencies?.includes("dex")
                ? old?.abilities?.dex?.base! + 2 + calcProf(Number(charInfo?.lvl))!
                : old?.abilities?.dex?.base! + 2,
            },
          },
        }));
        break;
      case "human":
        setCharInfo((old) => ({
          ...charInfo,
          abilities: {
            ...charInfo?.abilities,
            dex: {
              base: old?.abilities?.dex?.base! + 1,
              modifier: calcModifier(old?.abilities?.dex?.base! + 1),
              save: proficiencies?.includes("dex")
                ? old?.abilities?.dex?.base! + 1 + calcProf(Number(charInfo?.lvl))!
                : old?.abilities?.dex?.base! + 1,
            },
            str: {
              base: old?.abilities?.str?.base! + 1,
              modifier: calcModifier(old?.abilities?.str?.base! + 1),
              save: proficiencies?.includes("str")
                ? old?.abilities?.str?.base! + 1 + calcProf(Number(charInfo?.lvl))!
                : old?.abilities?.str?.base! + 1,
            },
            cha: {
              base: old?.abilities?.cha?.base! + 1,
              modifier: calcModifier(old?.abilities?.cha?.base! + 1),
              save: proficiencies?.includes("cha")
                ? old?.abilities?.cha?.base! + 1 + calcProf(Number(charInfo?.lvl))!
                : old?.abilities?.cha?.base! + 1,
            },
            int: {
              base: old?.abilities?.int?.base! + 1,
              modifier: calcModifier(old?.abilities?.int?.base! + 1),
              save: proficiencies?.includes("int")
                ? old?.abilities?.int?.base! + 1 + calcProf(Number(charInfo?.lvl))!
                : old?.abilities?.int?.base! + 1,
            },
            wis: {
              base: old?.abilities?.wis?.base! + 1,
              modifier: calcModifier(old?.abilities?.wis?.base! + 1),
              save: proficiencies?.includes("wis")
                ? old?.abilities?.wis?.base! + 1 + calcProf(Number(charInfo?.lvl))!
                : old?.abilities?.wis?.base! + 1,
            },
            cos: {
              base: old?.abilities?.cos?.base! + 1,
              modifier: calcModifier(old?.abilities?.cos?.base! + 1),
              save: proficiencies?.includes("cos")
                ? old?.abilities?.cos?.base! + 1 + calcProf(Number(charInfo?.lvl))!
                : old?.abilities?.cos?.base! + 1,
            },
          },
        }));
        break;
      case "half-elf":
        setCharInfo((old) => ({
          ...charInfo,
          abilities: {
            ...charInfo?.abilities,
            cha: {
              base: old?.abilities?.cha?.base! + 2,
              modifier: calcModifier(old?.abilities?.cha?.base! + 2),
              save: proficiencies?.includes("cha")
                ? old?.abilities?.cha?.base! + 2 + calcProf(Number(charInfo?.lvl))!
                : old?.abilities?.cha?.base! + 2,
            },
          },
        }));
        break;
      case "half-orc":
        setCharInfo((old) => ({
          ...charInfo,
          abilities: {
            ...charInfo?.abilities,
            str: {
              base: old?.abilities?.str?.base! + 2,
              modifier: calcModifier(old?.abilities?.str?.base! + 2),
              save: proficiencies?.includes("str")
                ? old?.abilities?.str?.base! + 2 + calcProf(Number(charInfo?.lvl))!
                : old?.abilities?.str?.base! + 2,
            },
            cos: {
              base: old?.abilities?.cos?.base! + 1,
              modifier: calcModifier(old?.abilities?.cos?.base! + 1),
              save: proficiencies?.includes("cos")
                ? old?.abilities?.cos?.base! + 2 + calcProf(Number(charInfo?.lvl))!
                : old?.abilities?.cos?.base! + 1,
            },
          },
        }));
        break;
      case "tiefling":
        setCharInfo((old) => ({
          ...charInfo,
          abilities: {
            ...charInfo?.abilities,
            cha: {
              base: old?.abilities?.cha?.base! + 2,
              modifier: calcModifier(old?.abilities?.cha?.base! + 2),
              save: proficiencies?.includes("cha")
                ? old?.abilities?.cha?.base! + 2 + calcProf(Number(charInfo?.lvl))!
                : old?.abilities?.cha?.base! + 2,
            },
            int: {
              base: old?.abilities?.int?.base! + 1,
              modifier: calcModifier(old?.abilities?.int?.base! + 1),
              save: proficiencies?.includes("int")
                ? old?.abilities?.int?.base! + 2 + calcProf(Number(charInfo?.lvl))!
                : old?.abilities?.int?.base! + 1,
            },
          },
        }));
        break;
      default:
		  console.log("choose a race / invalid race")
        break;
    }
  };
  /* const saveToLocalStorage = (data: ability | any) => {
		setCharInfo({ ...charInfo, ...data })
		let stringifiedData = JSON.stringify(charInfo)
		localStorage.setItem("dnd_draft", stringifiedData)
	} */
  //add restore localStorage function here
  useEffect(() => {
    getClasses().then((rec_classes) => setClasses(rec_classes));
    getRaces().then((rec_races) => setRaces(rec_races));
    /* let lsData = localStorage.getItem("dnd_draft")
		if (lsData !== null) {
			let parsed = JSON.parse(lsData)
			let inputs = document.querySelectorAll("input")
			inputs.forEach((input) => (input.value = parsed[input.id]))
		} */
  }, []);
  return (
    <>
      <div className="sheet__wrap">
        <div className="sheet__info">
          <Input
            name="name"
            type="text"
            handleEdit={(data: any) => setCharInfo({ ...charInfo, ...data })}
          />
          <Input name="LVL" type="number" handleEdit={(data: any) => handleLevel(data)} />
          <Select options={classes!} selectedOpt={(opt: Option) => handleClass(opt)} />
          <Select options={races!} selectedOpt={(opt: Option) => handleRaces(opt)} />
        </div>
        <div className="sheet__core">
          {charInfo?.lvl! > 0 && "Your proficiency bonus: +" + calcProf(charInfo?.lvl!)}
          <div className="sheet__valMod">
            <Input name="STR" type="number" handleEdit={(data: any) => handleAbilities(data)} />
            {charInfo?.abilities?.str?.base &&
              (charInfo?.abilities?.str?.modifier! > 0
                ? "+" + charInfo?.abilities?.str?.modifier
                : charInfo?.abilities?.str?.modifier)}
          </div>
          <div className="sheet__valMod">
            <Input name="DEX" type="number" handleEdit={(data: any) => handleAbilities(data)} />
            {charInfo?.abilities?.dex?.base &&
              (charInfo?.abilities?.dex?.modifier! > 0
                ? "+" + charInfo?.abilities?.dex?.modifier
                : charInfo?.abilities?.dex?.modifier)}
          </div>
          <div className="sheet__valMod">
            <Input name="COS" type="number" handleEdit={(data: any) => handleAbilities(data)} />
            {charInfo?.abilities?.cos?.base &&
              (charInfo?.abilities?.cos?.modifier! > 0
                ? "+" + charInfo?.abilities?.cos?.modifier
                : charInfo?.abilities?.cos?.modifier)}
          </div>
          <div className="sheet__valMod">
            <Input name="WIS" type="number" handleEdit={(data: any) => handleAbilities(data)} />
            {charInfo?.abilities?.wis?.base &&
              (charInfo?.abilities?.wis?.modifier! > 0
                ? "+" + charInfo?.abilities?.wis?.modifier
                : charInfo?.abilities?.wis?.modifier)}
          </div>
          <div className="sheet__valMod">
            <Input name="INT" type="number" handleEdit={(data: any) => handleAbilities(data)} />
            {charInfo?.abilities?.int?.base &&
              (charInfo?.abilities?.int?.modifier! > 0
                ? "+" + charInfo?.abilities?.int?.modifier
                : charInfo?.abilities?.int?.modifier)}
          </div>
          <div className="sheet__valMod">
            <Input name="CHA" type="number" handleEdit={(data: any) => handleAbilities(data)} />
            {charInfo?.abilities?.cha?.base &&
              (charInfo?.abilities?.cha?.modifier! > 0
                ? "+" + charInfo?.abilities?.cha?.modifier
                : charInfo?.abilities?.cha?.modifier)}
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalSheet;
