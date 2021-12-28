import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
const store = configureStore();

store.subscribe(() => console.log("Calling Listeners"));
store.dispatch(actions.bugAdded("Bug 01"));
store.dispatch(actions.bugAdded("Bug 02"));
store.dispatch(actions.bugAdded("Bug 03"));
store.dispatch(actions.bugResolved(1));
console.log(store.getState());
