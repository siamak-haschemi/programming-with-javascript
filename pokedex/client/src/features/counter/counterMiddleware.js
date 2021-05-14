import {reset} from "./counterSlice";

const counterMiddleware = storeAPI => next => action => {
  if(action.type === reset.type) {
    return next(action);
  }

  let counter = storeAPI.getState().counter;

  if (counter.value > 100) {
    console.log("too high value ... will reset.");
    return storeAPI.dispatch(reset());
  }
  next(action);
}

export default counterMiddleware;