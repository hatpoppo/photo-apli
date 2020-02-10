import React from "react";
import { Store } from "../store";
import { Stack, Checkbox, Image, IStackItemStyles, IconButton, TextField, PrimaryButton } from "office-ui-fabric-react";

import { actionsWithService } from "../actions";
import { connect } from "react-redux";

interface PhotoListItemProps {
  id: string;
  photos: Store["photos"];
  complete: (id: string) => void;
  remove: (id: string) => void;
  edit: (id: string, title: string) => void;
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
    this.state = { editing: false, editTitle: "" };
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
              <IconButton iconProps={{ iconName: "Edit" }} onClick={this._onEdit}></IconButton>
              <IconButton iconProps={{ iconName: "Delete" }} onClick={() => remove(id)}></IconButton>
            </Stack.Item>
          </>
        )}
        {this.state.editing && (
          <>
            <Stack.Item grow>
              <TextField value={this.state.editTitle} onChange={this._onChange}></TextField>
            </Stack.Item>
            <PrimaryButton onClick={this._onEndEdit}>更新</PrimaryButton>
          </>
        )}
      </Stack>
    );
  }
  _onEdit = evt => {
    const { id, photos } = this.props;
    this.setState({ editing: true, editTitle: photos[id].title });
  };
  _onEndEdit = evt => {
    const { id } = this.props;
    this.props.edit(id, this.state.editTitle);
    this.setState({ editing: false, editTitle: "" });
  };
  _onChange = evt => {
    this.setState({ editTitle: evt.target.value });
  };
}
const ConnectedPhotoListItem = connect(
  (state: Store) => ({ photos: state.photos }),
  (dispatch: any) => ({
    complete: (id: string) => dispatch(actionsWithService.complete(id)),
    remove: (id: string) => dispatch(actionsWithService.remove(id)),
    edit: (id: string, title: string) => dispatch(actionsWithService.edit(id, title))
  })
)(PhotoListItem);
export { ConnectedPhotoListItem as PhotoListItem };
