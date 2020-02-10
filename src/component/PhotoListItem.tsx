import React from "react";
import { Store } from "../store";
import { Stack, Checkbox, Image, IStackItemStyles, IconButton } from "office-ui-fabric-react";

import { actionsWithService } from "../actions";
import { connect } from "react-redux";
import { act } from "react-dom/test-utils";

interface PhotoListItemProps {
  id: string;
  photos: Store["photos"];
  complete: (id: string) => void;
  remove: (id: string) => void;
}
const stackItemStyles: IStackItemStyles = {
  root: {
    padding: 5,
    width: 100
  }
};
class PhotoListItem extends React.Component<PhotoListItemProps, any> {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }
  render() {
    const { id, photos, complete, remove } = this.props;
    return (
      <Stack horizontal horizontalAlign="space-between">
        {!this.state.editing && (
          <>
            <Stack.Item align="center" styles={stackItemStyles}>
              <Checkbox label={photos[id].title} checked={photos[id].complete} onChange={() => complete(id)} />
            </Stack.Item>
            <Stack.Item styles={stackItemStyles}>
              <Image alt={photos[id].title} src={"data:" + photos[id].kind + ";base64," + photos[id].image} width={100} />
            </Stack.Item>
            <Stack.Item align="center">
              <IconButton iconProps={{ iconName: "Delete" }} onClick={() => remove(id)}></IconButton>
            </Stack.Item>
          </>
        )}
      </Stack>
    );
  }
}
const ConnectedPhotoListItem = connect(
  (state: Store) => ({ photos: state.photos }),
  (dispatch: any) => ({
    complete: (id: string) => dispatch(actionsWithService.complete(id)),
    remove: (id: string) => dispatch(actionsWithService.remove(id))
  })
)(PhotoListItem);
export { ConnectedPhotoListItem as PhotoListItem };
