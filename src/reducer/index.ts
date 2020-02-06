import { Store } from "../store";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

export const photoReducer = createReducer<Store["photo"]>(
  {},
  {
    addPhoto(state, action) {
      state[action.id] = { label: action.label, completed: false };
    }
  }
);

export const filterReducer = createReducer<Store["filter"]>("all", {
  setFilter(state, action) {
    return action.filter;
  }
});

export const reducer = combineReducers({
  photo: photoReducer,
  filter: filterReducer
});
