import store from "./customerStore";
import * as actions from "./actions";
store.subscribe(() => console.log("Calling Listeners"));
store.dispatch(actions.bugAdded("Bug 01"));
console.log(store.getState());
