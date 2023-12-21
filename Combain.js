import { combineReducers } from "redux";
import rootReducer from "./Reducer";
import getreducer from "./Reducer2";
const Combain = combineReducers(
    {
        reducer1:rootReducer,
        reducer2:getreducer,
    }
);
export default Combain;
