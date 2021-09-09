import Input from "../Input/Input"
import { useState } from "react"
import "./ModalSheet.scss"
import Select from "../Select/Select"
import { useEffect } from "react"
import { getClasses, getRaces } from "../../../API/dnd_data"
import { Option } from "../../../interfaces"
import { ability, character_sheet } from "../../../interfaces/char_creation"
import { calcModifier, calcProf, getProfAbilities } from "../../../utils"

const ModalSheet = () => {
	let abilities = ["str", "cos", "int", "wis", "cha", "dex"]
	const [charInfo, setCharInfo] = useState<character_sheet>()
	const [proficiencies, setProficiencies] = useState<Array<string>>()
	const [classes, setClasses] = useState<Array<Option>>()
	const [races, setRaces] = useState<Array<Option>>()
	const handleClass = (selected: Option) => {
		setCharInfo({ ...charInfo, class: selected.val })
		setProficiencies(getProfAbilities(selected.val))
		abilities?.forEach((prof) => {
			let base_value = Number((document.querySelector("input#" + prof) as HTMLInputElement).value)
			setCharInfo((old)=> ({
				...charInfo,
				abilities: {
					...old?.abilities,
					[prof]: {
						base: base_value,
						modifier: calcModifier(base_value),
						save: proficiencies?.includes(prof) ? base_value + calcProf(Number(charInfo?.lvl))! : base_value,
					},
				},
			}))
		})
		
	}
	const handleLevel = (data:any) => {
		abilities.forEach(ability => {
			let base_value = Number((document.querySelector("input#" + ability) as HTMLInputElement).value)
			setCharInfo(old => ({
				...charInfo,
				lvl: data.lvl,
				abilities: {
					...old?.abilities,
					[ability]: {
						base: base_value,
						modifier: calcModifier(base_value),
						save: proficiencies?.includes(ability.toLowerCase()) ? base_value + calcProf(Number(data.lvl))! : base_value,
					},
				},
			}))
		})
	}
	const handleAbilities = (data: ability) => {
		let ability = String(Object.entries(data!)[0][0]) //Object.entries generates an array of key/value pairs
		console.log(ability)
		let value = Number(Object.entries(data)[0][1])
		//saveToLocalStorage(data)
		setCharInfo({
			...charInfo,
			abilities: {
				...charInfo?.abilities,
				[ability.toLowerCase()]: {
					base: value,
					modifier: calcModifier(value),
					save: proficiencies?.includes(ability.toLowerCase()) ? value + calcProf(Number(charInfo?.lvl))! : value,
				},
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
						handleEdit={(data: any) => handleLevel(data)}
					/>
					<Select
						options={classes!}
						selectedOpt={(opt: Option) => handleClass(opt)}
					/>
					<Select
						options={races!}
						selectedOpt={(opt: Option) =>
							setCharInfo({ ...charInfo, race: opt.val })
						}
					/>
				</div>
				<div className="sheet__core">
					{charInfo?.lvl! > 0 &&
						"Your proficiency bonus: +" + calcProf(charInfo?.lvl!)}
					<div className="sheet__valMod">
						<Input
							name="STR"
							type="number"
							handleEdit={(data: any) => handleAbilities(data)}
						/>
						{charInfo?.abilities?.str?.base &&
							(charInfo?.abilities?.str?.modifier! > 0
								? "+" + charInfo?.abilities?.str?.modifier
								: charInfo?.abilities?.str?.modifier)}
					</div>
					<div className="sheet__valMod">
						<Input
							name="DEX"
							type="number"
							handleEdit={(data: any) => handleAbilities(data)}
						/>
						{charInfo?.abilities?.dex?.base &&
							(charInfo?.abilities?.dex?.modifier! > 0
								? "+" + charInfo?.abilities?.dex?.modifier
								: charInfo?.abilities?.dex?.modifier)}
					</div>
					<div className="sheet__valMod">
						<Input
							name="COS"
							type="number"
							handleEdit={(data: any) => handleAbilities(data)}
						/>
						{charInfo?.abilities?.cos?.base &&
							(charInfo?.abilities?.cos?.modifier! > 0
								? "+" + charInfo?.abilities?.cos?.modifier
								: charInfo?.abilities?.cos?.modifier)}
					</div>
					<div className="sheet__valMod">
						<Input
							name="WIS"
							type="number"
							handleEdit={(data: any) => handleAbilities(data)}
						/>
						{charInfo?.abilities?.wis?.base &&
							(charInfo?.abilities?.wis?.modifier! > 0
								? "+" + charInfo?.abilities?.wis?.modifier
								: charInfo?.abilities?.wis?.modifier)}
					</div>
					<div className="sheet__valMod">
						<Input
							name="INT"
							type="number"
							handleEdit={(data: any) => handleAbilities(data)}
						/>
						{charInfo?.abilities?.int?.base &&
							(charInfo?.abilities?.int?.modifier! > 0
								? "+" + charInfo?.abilities?.int?.modifier
								: charInfo?.abilities?.int?.modifier)}
					</div>
					<div className="sheet__valMod">
						<Input
							name="CHA"
							type="number"
							handleEdit={(data: any) => handleAbilities(data)}
						/>
						{charInfo?.abilities?.cha?.base &&
							(charInfo?.abilities?.cha?.modifier! > 0
								? "+" + charInfo?.abilities?.cha?.modifier
								: charInfo?.abilities?.cha?.modifier)}
					</div>
				</div>
			</div>
		</>
	)
}
export default ModalSheet
