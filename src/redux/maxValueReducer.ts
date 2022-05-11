const initState = {};

export const maxValueReducer = (state = initState, action: ActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};

export type ActionType = AddMaxValueCounterAction;

type AddMaxValueCounterAction = ReturnType<typeof addMaxValueCounterAC>;

export const addMaxValueCounterAC = () => {
  return {
    type: "ADD-MAX-VALUE",
  } as const;
};
