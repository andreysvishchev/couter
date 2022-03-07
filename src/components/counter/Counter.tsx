import s from './Counter.module.css'

type CounterType = {
    counter: number
}

export const Counter = (props: CounterType) => {

    return (
        <div className={s.wrap}>
           <h1 className={ props.counter === 5 ? `${s.red + ' ' + s.title}`: s.title}>{props.counter}</h1>
        </div>
    )
}