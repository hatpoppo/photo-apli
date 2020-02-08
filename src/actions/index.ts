import { Store } from "../store";
import * as service from "../service";
export const actions = {
  addPhoto: (label: string, id: string) => ({ type: "addPhoto", id, label }),
  setFilter: (filter: string) => ({ type: "setFilter", filter })
};
export const actionsWithService = {
  addPhoto: (photo: any) => {
    return async (dispatch: any, getState: () => Store) => {
      await service
        .add(photo)
        .then(response => response.json())
        .then(response => {
          console.log("addPhoto", response.id, " ", response.title);
          console.log("image", response.photo);
        })
        .catch(err => {
          console.log(err);
        });
    };
  }
};
