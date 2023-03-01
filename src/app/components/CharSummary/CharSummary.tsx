// import "./CharacterSummary.scss"
import { FC, useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { reduxState } from "../../redux"
export const CharacterSummary: FC<{ char: CharBody }> = () => { 
    // const char:CharBody = useSelector((state:reduxState) => state.character)
    // const fetchSingleClass = async() => {
    //     let res = await fetch(`${process.env.REACT_APP_API}passive/class/` + char.classes[0] + "?completed=true&attributes=name,id")
    //     let foundClass = await res.json()
    //     setClass(foundClass)
    // }
    // const fetchSingleRace = async() => {
    //     // let res = await fetch(`${process.env.REACT_APP_API}passive/race/` + race)
    //     // let foundRace = await res.json()
    //     // setRace(foundRace)
    // }

    // useEffect(()=> {
    //     fetchSingleClass()
    //     fetchSingleRace()
    // }, [name, level, classes, race]) 

    // const [pgClass, setClass] = useState<DNDClass>()
    // const [pgRace, setRace] = useState<DNDRace>()

    return (<>
    {/* // <h1>Name: {name || ""}</h1>
    // <h2>Level {level || ""} {pgRace ? pgRace.name : ""}</h2>
    // <h2>{pgClass ? pgClass.name : ""}</h2> */}
    
 </>
 
 ) }