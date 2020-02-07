import { PhotoItem, Store } from "../store";
const HOST = "http://localhost:4000";

export const add = async (photo: any) => {
  const response = await fetch(`${HOST}/photos`, {
    method: "post",
    body: photo
  });
  return response;
};
