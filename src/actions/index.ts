import { Store } from "../store";
import * as service from "../service";
export const actions = {
  addPhoto: (title: string, id: string, kind: string, image: any) => ({ type: "addPhoto", id, title, kind, image }),
  complete: (id: string) => ({ type: "complete", id }),
  edit: (id: string, title: string) => ({ type: "edit", id, title }),
  remove: (id: string) => ({ type: "remove", id }),
  setFilter: (filter: string) => ({ type: "setFilter", filter })
};
export const actionsWithService = {
  addPhoto: (photo: any) => {
    return async (dispatch: any, getState: () => Store) => {
      await service
        .add(photo)
        .then(response => response.json())
        .then(response => {
          dispatch(actions.addPhoto(response.title, response.id, response.kind, response.base64));
        })
        .catch(err => {
          console.log(err);
        });
    };
  },
  complete: (id: string) => {
    return async (dispatch: any, getState: () => Store) => {
      dispatch(actions.complete(id));
      await service
        .update(id, getState().photos[id])
        .then(response => response.json())
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    };
  },
  remove: (id: string) => {
    return async (dispatch: any) => {
      dispatch(actions.remove(id));
      await service
        .remove(id)
        .then(response => response.json())
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    };
  },
  edit: (id: string, title: string) => {
    return async (dispatch: any, getState: () => Store) => {
      dispatch(actions.edit(id, title));
      await service
        .update(id, getState().photos[id])
        .then(response => response.json())
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    };
  }
};
