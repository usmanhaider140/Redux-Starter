import { createAction } from "@reduxjs/toolkit";

// Topic: Action Creators
export const bugAdded = createAction("bugAdded");

export const bugRemoved = createAction("bugRemoved");

export const bugResolved = createAction("bugResolved");

// Topic: Reducers

let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case bugRemoved.type:
      return state.filter((bug) => bug.id !== action.payload.id);
    case bugResolved.type:
      const states = state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
      return states;

    default:
      return state;
  }
}
