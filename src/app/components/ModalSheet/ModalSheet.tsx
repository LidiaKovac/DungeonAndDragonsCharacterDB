import Input from "../Input/Input";
import React, { useState } from "react";
import "./ModalSheet.scss";
import Select from "../Select/Select";
import { useEffect } from "react";
import { getClasses, getRaces } from "../../../API/dnd_data";
import { Option } from "../../../interfaces";
import { ability, character_sheet } from "../../../interfaces/char_creation";
import { calcModifier, calcProf, getProfAbilities } from "../../../utils";
import { setClass, setRace, setLevel, setAbility } from "../../../utils/char";

const ModalSheet = () => {
  let abilities = ["str", "cos", "int", "wis", "cha", "dex"];
  const [charInfo, setCharInfo] = useState<character_sheet>({
    name: "",
    lvl: 0,
    abilities: {
      str: {
        base: 0,
        modifier: 0,
        save: 0,
      },
      dex: {
        base: 0,
        modifier: 0,
        save: 0,
      },
      cos: {
        base: 0,
        modifier: 0,
        save: 0,
      },
      wis: {
        base: 0,
        modifier: 0,
        save: 0,
      },
      int: {
        base: 0,
        modifier: 0,
        save: 0,
      },
      cha: {
        base: 0,
        modifier: 0,
        save: 0,
      },
    },
  });
  const callHook = (data: any) => {
    console.log(data);

    setCharInfo(data);
  };
  // const [proficiencies, setProficiencies] = useState<Array<string>>();
  // const [newPg, setClass] = useClass()
  const [classes, setClasses] = useState<Array<Option>>();
  const [races, setRaces] = useState<Array<Option>>();

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
          <Input
            name="LVL"
            type="number"
            handleEdit={(lvl: { lvl: number }) => callHook(setLevel(Number(lvl.lvl), charInfo))}
          />
          <Select
            options={classes!}
            selectedOpt={(selClass: Option) => callHook(setClass(selClass.val, charInfo))}
          />
          <Select
            options={races!}
            selectedOpt={(selRace: Option) =>
              callHook(setRace(selRace.val, getProfAbilities(charInfo?.class!), charInfo))
            }
          />
        </div>
        <div className="sheet__core">
          {charInfo?.lvl! > 0 && "Your proficiency bonus: +" + calcProf(charInfo?.lvl!)}
          <div className="sheet__valMod">
            STR
            <Input
              name="STR"
              type="number"
              handleEdit={(str: number) => callHook(setAbility("str", str, charInfo))}
            />
            {charInfo?.abilities?.str?.base &&
              (charInfo?.abilities?.str?.modifier! > 0
                ? "+" + charInfo?.abilities?.str?.modifier
                : charInfo?.abilities?.str?.modifier)}
          </div>
          <div className="sheet__valMod">
            DEX
            <Input
              name="DEX"
              type="number"
              handleEdit={(dex: number) => callHook(setAbility("dex", dex, charInfo))}
            />
            {charInfo?.abilities?.dex?.base &&
              (charInfo?.abilities?.dex?.modifier! > 0
                ? "+" + charInfo?.abilities?.dex?.modifier
                : charInfo?.abilities?.dex?.modifier)}
          </div>
          <div className="sheet__valMod">
            COS
            <Input
              name="COS"
              type="number"
              handleEdit={(cos: number) => callHook(setAbility("cos", cos, charInfo))}
            />
            {charInfo?.abilities?.cos?.base &&
              (charInfo?.abilities?.cos?.modifier! > 0
                ? "+" + charInfo?.abilities?.cos?.modifier
                : charInfo?.abilities?.cos?.modifier)}
          </div>
          <div className="sheet__valMod">
            WIS
            <Input
              name="WIS"
              type="number"
              handleEdit={(wis: number) => callHook(setAbility("wis", wis, charInfo))}
            />
            {charInfo?.abilities?.wis?.base &&
              (charInfo?.abilities?.wis?.modifier! > 0
                ? "+" + charInfo?.abilities?.wis?.modifier
                : charInfo?.abilities?.wis?.modifier)}
          </div>
          <div className="sheet__valMod">
            INT
            <Input
              name="INT"
              type="number"
              handleEdit={(int: number) => callHook(setAbility("int", int, charInfo))}
            />
            {charInfo?.abilities?.int?.base &&
              (charInfo?.abilities?.int?.modifier! > 0
                ? "+" + charInfo?.abilities?.int?.modifier
                : charInfo?.abilities?.int?.modifier)}
          </div>
          <div className="sheet__valMod">
            CHA
            <Input
              name="CHA"
              type="number"
              handleEdit={(cha: number) => callHook(setAbility("cha", cha, charInfo))}
            />
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
