import { RootState, useAppDispatch, useAppSelector } from "../../../redux"
import Input from "../Input"
import styles from "../Input.module.scss"
interface InputProps {
    side: "left" | "right"
    name: string
    type: string | false
    defaultVal?: string
    disabled?: boolean
    className?: string
    style?: Object
    hasSubBubble?: boolean
    color: "pink" | "green" | "blue"
    labelVal?: string
    subBubbleVal?: string
}

export const BubbleInput: React.FC<InputProps> = ({
    side,
    name,
    defaultVal,
    type,
    disabled,
    className,
    style,
    hasSubBubble = false,
    labelVal = name,
    subBubbleVal,
    color,
}) => {
    const asyncDispatch = useAppDispatch()
    const edit = useAppSelector((state: RootState) => state.character.editMode)

    return (
        <div className="bubble__form">
            <Input
                color={color}
                name={name}
                type={type}
                defaultVal={defaultVal}
                disabled={disabled}
                style={{ [side]: "0px" }}
                className={`${styles["bubble__input"]}`}
            />

            <div
                className={`${styles["bubble__text"]} ${styles[`char__banner--${color}`]
                    }`}
                style={{ textAlign: side === "left" ? "center" : "start" }}
            >
                {labelVal}
            </div>

            {(!edit && hasSubBubble) && (
                <div className={`${styles["sub__bubble"]} ${styles[`char__banner--${color}`]}`}>
                    {subBubbleVal}
                </div>
            )}
        </div>
    )
}
