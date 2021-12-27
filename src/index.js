import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});
store.dispatch(bugAdded("bug1"));

store.dispatch(bugResolved(1));
console.log(store.getState());

store.dispatch(bugRemoved(1));
console.log(store.getState());
