import { PhotoItem } from "../store";
const HOST = "http://localhost:4000";

export const add = async (photo: any) => {
  const response = await fetch(`${HOST}/photos`, {
    method: "post",
    body: photo
  });
  return response;
};
export const getAll = async () => {
  const response = await fetch(`${HOST}/photos`, {
    method: "get"
  });
  return response.json();
};
export const update = async (id: string, photo: PhotoItem) => {
  const response = await fetch(`${HOST}/photos/${id}`, {
    method: "put",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(photo)
  });
  return response;
};
