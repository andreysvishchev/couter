export type CounterStateType = {
    counterValue: number
    startValue: number
    maxValue: number
    error: boolean,
    errorText: boolean
};

const counterState: CounterStateType = {
    counterValue: 0,
    startValue: 0,
    maxValue: 5,
    error: false,
    errorText: false
};

export const counterReducer = (state: CounterStateType = counterState, action: ActionType): CounterStateType => {
    switch (action.type) {
        case "INC-COUNTER-VALUE":
            return {...state, counterValue: state.counterValue + 1};
        case "RES-COUNTER-VALUE":
            return {...state, counterValue: state.startValue};
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.maxValue}
        case "SET-START-VALUE":
            return {...state, startValue: action.startValue}
        case "SET-VALUES":
            return {...state, counterValue: state.startValue}
        case "CHANGE-ERROR":
            return {...state, error: action.error}
        case "CHANGE-ERROR-TEXT":
            return {...state, errorText: action.error}
        default:
            return state;
    }
};

export type ActionType =
    IncCounterValueAction
    | ResCounterValueAction
    | AddMaxValueCounterAction
    | AddStartValueActionType
    | SetValuesActionType
    | changeErrorActionType
    | changeErrorTextActionType

type IncCounterValueAction = ReturnType<typeof incCounterValueAC>;
type ResCounterValueAction = ReturnType<typeof resCounterValueAC>;
type AddMaxValueCounterAction = ReturnType<typeof addMaxValueCounterAC>;
type AddStartValueActionType = ReturnType<typeof addStartValueCounterAC>;
type SetValuesActionType = ReturnType<typeof setValuesAC>
type changeErrorActionType = ReturnType<typeof changeErrorAC>
type changeErrorTextActionType = ReturnType<typeof changeErrorTextAC>

export const incCounterValueAC = () => {
    return {type: "INC-COUNTER-VALUE",} as const;
};

export const resCounterValueAC = () => {
    return {type: "RES-COUNTER-VALUE",} as const;
};

export const addMaxValueCounterAC = (maxValue: number) => {
    return {type: "SET-MAX-VALUE", maxValue} as const;
};

export const addStartValueCounterAC = (startValue: number) => {
    return {type: "SET-START-VALUE", startValue} as const;
};

export const setValuesAC = () => {
    return {type: 'SET-VALUES'} as const
}

export const changeErrorAC = (error: boolean) => {
    return {type: 'CHANGE-ERROR', error} as const
}

export const changeErrorTextAC = (error: boolean) => {
    return {type: 'CHANGE-ERROR-TEXT', error} as const
}





