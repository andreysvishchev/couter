import { setConstantValue } from "typescript";

export type InitStateType = {
  setCounterValue: number;
};

const initState: InitStateType = {
  setCounterValue: 0,
};

export const counterValueReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
  switch (action.type) {
    case "INC-COUNTER-VALUE":
      return { ...state, setCounterValue: state.setCounterValue + 1 };
    case "RES-COUNTER-VALUE":
      return { ...state, setCounterValue: 0 };
    default:
      return state;
  }
};

export type ActionType = IncCounterValueAction | ResCounterValueAction;

type IncCounterValueAction = ReturnType<typeof incCounterValueAC>;
type ResCounterValueAction = ReturnType<typeof resCounterValueAC>;

export const incCounterValueAC = () => {
  return {
    type: "INC-COUNTER-VALUE",
  } as const;
};

export const resCounterValueAC = () => {
  return {
    type: "RES-COUNTER-VALUE",
  } as const;
};
