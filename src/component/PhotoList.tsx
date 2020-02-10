import React from "react";
import { Store, FilterTypes } from "../store";
import { Stack } from "office-ui-fabric-react";
import { connect } from "react-redux";
import { PhotoListItem } from "./PhotoListItem";

interface PhotoListProps {
  photos: Store["photos"];
  filter: FilterTypes;
}
const PhotoList = (props: PhotoListProps) => {
  const { photos, filter } = props;
  const filterdPhotos = Object.keys(photos).filter(id => {
    return filter === "all" || (filter === "completed" && photos[id].complete) || (filter === "active" && !photos[id].complete);
  });
  return (
    <Stack>
      {filterdPhotos.map(id => (
        <PhotoListItem key={id} id={id} />
      ))}
    </Stack>
  );
};
const ConnectedPhotoList = connect((state: Store) => ({ ...state }))(PhotoList);
export { ConnectedPhotoList as PhotoList };
// export { PhotoList };
