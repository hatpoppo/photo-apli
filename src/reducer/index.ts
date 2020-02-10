import { Store } from "../store";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

export const photoReducer = createReducer<Store["photos"]>(
  {},
  {
    addPhoto(state, action) {
      state[action.id] = { title: action.title, image: action.image, kind: action.kind, complete: false };
    },

    complete(state, action) {
      state[action.id].complete = !state[action.id].complete;
    },
    remove(state, action) {
      delete state[action.id];
    },
    edit(state, action) {
      state[action.id].title = action.title;
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
