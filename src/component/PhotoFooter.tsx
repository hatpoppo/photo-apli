import React from "react";
import { Store } from "../store";
import { Stack, Text } from "office-ui-fabric-react";

import { connect } from "react-redux";

interface PhotoFooterProps {
  photos: Store["photos"];
}
const PhotoFooter = (props: PhotoFooterProps) => {
  const { photos } = props;
  const itemCount = Object.keys(photos).filter(id => !photos[id].complete).length;
  const itemAllCount = Object.keys(photos).length;
  return (
    <Stack>
      <Text>
        {itemCount} item{itemCount <= 1 ? "" : "s"} / {itemAllCount}
      </Text>
    </Stack>
  );
};
const ConnectedPhotoFooter = connect(
  (state: Store) => ({ photos: state.photos }),
  dispatch => ({})
)(PhotoFooter);

export { ConnectedPhotoFooter as PhotoFooter };
