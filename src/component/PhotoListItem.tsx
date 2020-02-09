import React from "react";
import { Store } from "../store";
import { Stack, Checkbox, Image, IStackItemStyles } from "office-ui-fabric-react";

import { actions, actionsWithService } from "../actions";
import { connect } from "react-redux";

interface PhotoListItemProps {
  id: string;
  photos: Store["photos"];
}
const stackItemStyles: IStackItemStyles = {
  root: {
    padding: 5
  }
};
class PhotoListItem extends React.Component<PhotoListItemProps, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { id, photos } = this.props;
    return (
      <Stack horizontal horizontalAlign="space-between">
        <Stack.Item align="center" styles={stackItemStyles}>
          <Checkbox label={photos[id].title} checked={photos[id].complete} />
        </Stack.Item>
        <Stack.Item styles={stackItemStyles}>
          <Image alt={photos[id].title} src={"data:" + photos[id].kind + ";base64," + photos[id].image} width={100} />
        </Stack.Item>
      </Stack>
    );
  }
}
const ConnectedPhotoListItem = connect((state: Store) => ({ photos: state.photos }))(PhotoListItem);
export { ConnectedPhotoListItem as PhotoListItem };
