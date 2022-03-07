import s from './Button.module.css'

type ButtonType = {
    name: string
    callBack: ()=> void
    disabled: boolean
}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button className={s.button}  disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
    )
}