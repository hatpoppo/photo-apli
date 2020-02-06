import { Store } from "../store";

export const actions = {
  addPhoto: (label: string, id: string) => ({ type: "addPhoto", id, label }),
  setFilter: (filter: string) => ({ type: "setFilter", filter })
};
export const actionsWithService = {};
