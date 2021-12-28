import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
const store = configureStore();

store.subscribe(() => console.log("Calling Listeners"));
store.dispatch(actions.bugAdded({ description: "Bug 01" }));
store.dispatch(actions.bugAdded({ description: "Bug 02" }));
store.dispatch(actions.bugAdded({ description: "Bug 03" }));
store.dispatch(actions.bugResolved({ id: 1 }));
console.log(store.getState());
