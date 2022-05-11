import { combineReducers, createStore } from "redux";
import { counterValueReducer } from "./counterValueReducer";
import { maxValueReducer } from "./maxValueReducer";
import { startValueReducer } from "./startValueReducer";

export const rootReducer = combineReducers({
  counterValue: counterValueReducer,
  startValue: startValueReducer,
  maxValue: maxValueReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
