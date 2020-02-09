import { Store } from "../store";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

export const photoReducer = createReducer<Store["photos"]>(
  {},
  {
    addPhoto(state, action) {
      state[action.id] = { label: action.label, image: action.image, kind: action.kind, completed: false };
    }
  }
);

export const filterReducer = createReducer<Store["filter"]>("all", {
  setFilter(state, action) {
    return action.filter;
  }
});

export const reducer = combineReducers({
  photos: photoReducer,
  filter: filterReducer
});
