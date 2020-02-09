import React from "react";
import { Store } from "../store";
import { Stack } from "office-ui-fabric-react";
import { connect } from "react-redux";
import { PhotoListItem } from "./PhotoListItem";

interface PhotoListProps {
  photos: Store["photos"];
}
const PhotoList = (props: PhotoListProps) => {
  const { photos } = props;
  const filterdPhotos = Object.keys(photos);
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
