import { RootState, useAppDispatch, useAppSelector } from "../../../redux"
import styles from "../Character.module.scss"
export const CharRoundProp = ({ value, name }: { value: string | number  | JSX.Element, name: string }) => {
    const color = useAppSelector((state: RootState) => state.character.color)

    return (
        <div className={`${styles["char__round-wrap"]}`}>
            <div
                className={`${styles["char__round-prop"]} ${styles[`bg--${color}-lighter`]
                    } ${styles[`outline--${color}-medium`]}`}
            >
                {value}

            </div>
            <small>{name}</small>
        </div>
    )
}
