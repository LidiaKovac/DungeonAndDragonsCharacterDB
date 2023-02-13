import "./NewCharForm.scss"
import { FormEvent, useState, useEffect, FC } from "react"
import Select, { OptionClass } from "../Select/Select"
interface FormProps {
  setCharInModal: Function
  setStageInModal: Function

}
export const NewCharForm: FC<FormProps> = ({ setCharInModal, setStageInModal }) => {
  const [char, setChar] = useState<CharBody>({ classes: [], name: "", level: 1, race: "" } as CharBody)

  const [classes, setClasses] = useState<DNDClass[]>([])
  const [loading, setLoading] = useState(true)

  const fetchClasses = async () => {
    let raw = await fetch("http://localhost:3001/passive/class?attributes=name,id&complete=false")
    let foundClasses = await raw.json()
    setClasses(foundClasses)
  }
  const [races, setRaces] = useState<DNDRace[]>([])
  const fetchRaces = async () => {
    let raw = await fetch("http://localhost:3001/passive/race")
    let foundRaces = await raw.json()
    setRaces(foundRaces)
  }
  useEffect(() => {

    Promise.all([fetchClasses(),
    fetchRaces()]).finally(() => setLoading(false))

  }, [])

  useEffect(() => {
    setCharInModal(char)
  }, [char])
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    let res = await fetch("http://localhost:3001/api/character", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(char)
    })
    let { id } = await res.json()
    let resGet = await fetch("http://localhost:3001/api/character/" + id)
    let newChar = await resGet.json()
    setChar(newChar)
  }
  const handleChangeSelect = (selected:OptionClass, field:string) => {
    if(field === "classes") {
      setChar((prev)=> {
        return {
          ...prev, 
          classes: [...prev.classes, classes.find(cl => cl.id === selected.val)!.id]
        }
      })
    } else {
      setChar((prev)=> {
        return {
          ...prev, 
          race: races.find(ra => ra.id === selected.val)!.id
        }
      })
    }
  }
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLFormElement

    setChar(prev => {
      return {
        ...prev,
        [target.id]: target.value
      }
    })
  }
  return (
    <>
      {loading || <div className="modal__input-wrap">
        <form onSubmit={handleSubmit}>
          <input onKeyUp={handleChange} type="text" id="name" />
          <input onKeyUp={handleChange} type="number" id="level" />
          <div className='modal__input-selects'>
            <Select selectedOpt={handleChangeSelect} field='classes' options={classes.map(cl => new OptionClass(cl.id, cl.name))} />
            <Select selectedOpt={handleChangeSelect} field='race' options={races.map(ra => new OptionClass(ra.id, ra.name))} />
          </div>

          <button onClick={() => setStageInModal(2)}>start</button>
        </form>
      </div>}
    </>
  )
}
