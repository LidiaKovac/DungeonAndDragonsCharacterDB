import React, { useEffect, useState } from "react"
import styles from "./Input.module.scss"
import { MdAddAPhoto } from "react-icons/md"
import { RootState, useAppSelector } from "../../redux"
import { RootStateOrAny } from "react-redux"
interface InputProps {
    name: string
    type: string | false
    defaultVal?: string
    disabled?: boolean
    className?: string
    style?: Object
    color: "pink" | "green" | "blue"
}
const Input: React.FunctionComponent<InputProps> = ({
    name,
    defaultVal,
    type,
    disabled,
    className,
    style,
    color
}) => {
    const edit = useAppSelector((state: RootState) => state.character.editMode)

    const [classes, setClasses] = useState(`custom--input ${className?.split(" ").join("") || ""}`)
    useEffect(() => {
        console.log("state classes", className?.split(" ").join(""));

        if (edit) {
            setClasses(prev => `${prev} ${styles["input--edit"]}`)
        } else {
            setClasses(prev => prev.replaceAll(styles["input--edit"], ""))
        }
        if (type === "file") {
            setClasses(prev => `${styles["hide"]}`)
        }
        if (!classes.includes(styles[`char__banner--${color}`])) {
            setClasses(prev => `${prev} ${styles[`char__banner--${color}`]}`)
        }

    }, [edit])

    return (
        <>
            <input
                style={style}
                defaultValue={defaultVal}
                disabled={disabled}
                className={
                    classes
                }
                type={type || "text"}
                placeholder={name}
                id={name}
                name={name}
            />
            {type === "file" && (
                <label htmlFor={name}>
                    <MdAddAPhoto />
                </label>
            )}
        </>
    )
}
export default Input
