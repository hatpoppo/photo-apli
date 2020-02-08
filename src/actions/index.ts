import { Store } from "../store";
import * as service from "../service";
export const actions = {
  addPhoto: (label: string, id: string, kind: string, image: any) => ({ type: "addPhoto", id, label, kind, image }),
  setFilter: (filter: string) => ({ type: "setFilter", filter })
};
export const actionsWithService = {
  addPhoto: (photo: any) => {
    return async (dispatch: any, getState: () => Store) => {
      await service
        .add(photo)
        .then(response => response.json())
        .then(response => {
          dispatch(actions.addPhoto(response.title, response.id, response.kind, response.photo));
        })
        .catch(err => {
          console.log(err);
        });
    };
  }
};
