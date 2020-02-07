import { PhotoItem, Store } from "../store";
const HOST = "http://localhost:4000";

export const add = async (photo: any) => {
  await fetch(`${HOST}/photos`, {
    method: "post",
    body: photo
  });
};
