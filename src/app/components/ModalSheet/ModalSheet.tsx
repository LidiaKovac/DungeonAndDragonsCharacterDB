import Input from "../Input/Input"
import { useState } from "react"
import "./ModalSheet.scss"
import Select from "../Select/Select"
import { useEffect } from "react"
import { getClasses, getRaces } from "../../../API/dnd_data"
import { Option } from "../../../interfaces"
import { ability, character_sheet } from "../../../interfaces/char_creation"
import { calcModifier } from "../../../utils"

const ModalSheet = () => {
	const [charInfo, setCharInfo] = useState<character_sheet>()
	const [classes, setClasses] = useState<Array<Option>>()
	const [races, setRaces] = useState<Array<Option>>()
	const handleAbilities = (data: ability) => {
		let ability = String(Object.entries(data!)[0][0]) //Object.entries generates an array of key/value pairs
    console.log(ability)
    let value = Number(Object.entries(data)[0][1])

		//saveToLocalStorage(data)
		setCharInfo({
			...charInfo,
			abilities: {
				...charInfo?.abilities,
				[ability.toLowerCase()]: { base: value, modifier: calcModifier(value), save: value },
			},
		})
	}
	/* const saveToLocalStorage = (data: ability | any) => {
		setCharInfo({ ...charInfo, ...data })
		let stringifiedData = JSON.stringify(charInfo)
		localStorage.setItem("dnd_draft", stringifiedData)
	} */
  //add restore localStorage function here
	useEffect(() => {
		getClasses().then((rec_classes) => setClasses(rec_classes))
		getRaces().then((rec_races) => setRaces(rec_races))
		/* let lsData = localStorage.getItem("dnd_draft")
		if (lsData !== null) {
			let parsed = JSON.parse(lsData)
			let inputs = document.querySelectorAll("input")
			inputs.forEach((input) => (input.value = parsed[input.id]))
		} */
	}, [])
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
						handleEdit={(data: any) => setCharInfo({ ...charInfo, ...data })}
					/>
					<Select
						options={classes!}
						selectedOpt={(opt: Option) =>
							setCharInfo({...charInfo, class: opt.val })
						}
					/>
					<Select
						options={races!}
						selectedOpt={(opt: Option) => setCharInfo({...charInfo, race: opt.val })}
					/>
				</div>
				<div className="sheet__core">
          <div className="sheet__valMod">
					<Input
						name="STR"
						type="number"
						handleEdit={(data: any) => handleAbilities(data)}
            />
            {charInfo?.abilities?.str?.base && (charInfo?.abilities?.str?.modifier! > 0 ? "+" + charInfo?.abilities?.str?.modifier : charInfo?.abilities?.str?.modifier )}
            </div>
            <div className="sheet__valMod">
					<Input
						name="DEX"
						type="number"
						handleEdit={(data: any) => handleAbilities(data)}
            />
            {charInfo?.abilities?.dex?.base && (charInfo?.abilities?.dex?.modifier! > 0 ? "+" + charInfo?.abilities?.dex?.modifier : charInfo?.abilities?.dex?.modifier )}
            </div>
            <div className="sheet__valMod">
					<Input
						name="COS"
						type="number"
						handleEdit={(data: any) => handleAbilities(data)}
            />
            {charInfo?.abilities?.cos?.base && (charInfo?.abilities?.cos?.modifier! > 0 ? "+" + charInfo?.abilities?.cos?.modifier : charInfo?.abilities?.cos?.modifier )}
            </div>
            <div className="sheet__valMod">
					<Input
						name="WIS"
						type="number"
						handleEdit={(data: any) => handleAbilities(data)}
            />
            {charInfo?.abilities?.wis?.base && (charInfo?.abilities?.wis?.modifier! > 0 ? "+" + charInfo?.abilities?.wis?.modifier : charInfo?.abilities?.wis?.modifier )}
            </div>
            <div className="sheet__valMod">
					<Input
						name="INT"
						type="number"
						handleEdit={(data: any) => handleAbilities(data)}
            />
            {charInfo?.abilities?.int?.base && (charInfo?.abilities?.int?.modifier! > 0 ? "+" + charInfo?.abilities?.int?.modifier : charInfo?.abilities?.int?.modifier )}
            </div>
					
				</div>
			</div>
		</>
	)
}
export default ModalSheet
