import "./NewCharForm.scss"
import { FormEvent, useEffect, FC } from "react"
import Select, { OptionClass } from "../Select/Select"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../redux"

import { fetchClasses, fetchRaces, setLoading } from "../../redux/slices/passiveSlice"
import { useNavigate } from "react-router-dom"
import { setChar } from "../../redux/slices/charSlice"
interface FormProps {
  setStageInModal: Function
}
export const NewCharForm: FC<FormProps> = ({ setStageInModal }) => {
  // const [char, setChar] = useState<CharBody>({ classes: [], name: "", level: 1, race: "" } as CharBody)
  const { classes, races, loading } = useSelector((state: RootState) => state.passive)
  const me = useSelector((state: RootState) => state.user.logged)
  const token = useSelector((state: RootState) => state.token.token)
  const dispatch = useAppDispatch()
  const moveTo= useNavigate()


  useEffect(() => {
    if (classes.length === 0 && races.length === 0) {
      Promise.all([dispatch(fetchClasses()), dispatch(fetchRaces())])
    } else dispatch(setLoading(false))
  }, [])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const char = new FormData(event.target as HTMLFormElement)

    let res = await fetch(`${process.env.REACT_APP_API}api/character`, {
      method: "POST",
      headers: new Headers({
        "authorization": `Bearer ${token}`
      }),
      body: char,
    })
    if(res.ok) {
      let char = await res.json()
      dispatch(setChar(char))
      setStageInModal(2)
    } else {
      let err = await res.text()
      if(err.includes("token expired")) moveTo("/login")
    }
    // let resGet = await fetch(`${process.env.REACT_APP_API}api/character` + id)
    // let newChar = await resGet.json()
    // dispatch({ type: CHANGE_CHAR, payload: newChar })
  }


  return (
    <>
      {loading || (
        <div className="modal__input-wrap">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name='name'
            />
            <input
              type="number"
              id="level"
              name='level'
            />
              <div className="warning">! multiclassing not supported !</div>
            <div className="modal__input-selects">
              <Select
                
                field="classes"
                options={classes.map((cl: DNDClass) => new OptionClass(cl.id, cl.name))}
              />
              <Select
               
                field="race"
                options={races.map((ra: DNDRace) => new OptionClass(ra.id, ra.name))}
              />
            </div>

            <button type='submit'>start</button>
          </form>
        </div>
      )}
    </>
  )
}
