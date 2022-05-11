const initState = {};

export const startValueReducer = (state = initState, action: ActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};

export type ActionType = AddMinValueActionType;

type AddMinValueActionType = ReturnType<typeof addMinValueCounterAC>;

export const addMinValueCounterAC = () => {
  return {
    type: "ADD-MIN-VALUE",
  } as const;
};
