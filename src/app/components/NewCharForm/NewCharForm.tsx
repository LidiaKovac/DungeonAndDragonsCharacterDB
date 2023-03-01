import "./NewCharForm.scss"
import { FormEvent, useState, useEffect, FC } from "react"
import Select, { OptionClass } from "../Select/Select"
import { useDispatch, useSelector } from "react-redux"
import { reduxState } from "../../redux"
import { CHANGE_CHAR, SET_CLASSES, SET_PROFS, SET_RACES } from "../../redux/actions"
import { profs } from "../../../utils"
interface FormProps {
  setCharInModal: Function
  setStageInModal: Function

}
export const NewCharForm: FC<FormProps> = ({ setStageInModal }) => {
  // const [char, setChar] = useState<CharBody>({ classes: [], name: "", level: 1, race: "" } as CharBody)
  const char: CharBody = useSelector((state: reduxState) => state.character)
  const { classes, races }: { classes: DNDClass[], races: DNDRace[] } = useSelector((state: reduxState) => state.passive)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  const fetchClasses = async () => {
    let raw = await fetch(`${process.env.REACT_APP_API}passive/class?attributes=name,id&complete=false`)
    let foundClasses = await raw.json()
    dispatch({ type: SET_CLASSES, payload: foundClasses })

  }
  const fetchRaces = async () => {
    let raw = await fetch(`${process.env.REACT_APP_API}passive/race`)
    let foundRaces = await raw.json()
    dispatch({ type: SET_RACES, payload: foundRaces })
  }
  useEffect(() => {

    Promise.all([fetchClasses(), fetchRaces()]).finally(() => setLoading(false))

  }, [])

  useEffect(()=> {
    dispatch({type: SET_PROFS, payload: profs(classes.find(cl => cl.id === char.classes[0])!, char.level || 1)})
  }, [char.classes, char.race])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    let res = await fetch(`${process.env.REACT_APP_API}api/character`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(char)
    })
    let { id } = await res.json()
    let resGet = await fetch(`${process.env.REACT_APP_API}api/character` + id)
    let newChar = await resGet.json()
    dispatch({ type: CHANGE_CHAR, payload: newChar })
  }
  const handleChangeSelect = (selected: OptionClass, field: string) => {
    if (field === "classes") {
      dispatch({
        type: CHANGE_CHAR, payload: {
          classes: [...char.classes, classes.find(cl => cl.id === selected.val)!.id]
        }
      })

    } else {
      dispatch({
        type: CHANGE_CHAR, payload: {
          race: races.find(ra => ra.id === selected.val)!.id
        }
      })
    }
  }
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLFormElement
    dispatch({
      type: CHANGE_CHAR, payload: {
        [target.id]: target.value
      }
    })
  }
  return (
    <>
      {loading || <div className="modal__input-wrap">
        <form onSubmit={handleSubmit}>
          <input value={char.name} onChange={handleChange} type="text" id="name" />
          <input value={char.level} onChange={handleChange} type="number" id="level" />
          <div className='modal__input-selects'>
            <Select value={new OptionClass(classes.find(cl => char.classes[0] === cl.id)?.id!, classes.find(cl => char.classes[0] === cl.id)?.name!)} selectedOpt={handleChangeSelect} field='classes' options={classes.map(cl => new OptionClass(cl.id, cl.name))} />
            <Select value={new OptionClass(races.find(ra => char.race === ra.id)?.id!, races.find(ra => char.race === ra.id)?.name!)} selectedOpt={handleChangeSelect} field='race' options={races.map(ra => new OptionClass(ra.id, ra.name))} />
          </div>

          <button onClick={() => setStageInModal(2)}>start</button>
        </form>
      </div>}
    </>
  )
}
