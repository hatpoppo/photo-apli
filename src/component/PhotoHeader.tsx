import React from "react";
import { FilterTypes } from "../store";
import { Stack, Text, Pivot, PivotItem, TextField, PrimaryButton } from "office-ui-fabric-react";

import { actions, actionsWithService } from "../actions";
import { connect } from "react-redux";

interface PhotoHeaderProps {
  addPhoto: (label: string, id: string) => void;
  setFilter: (filter: FilterTypes) => void;
}
class PhotoHeader extends React.Component<PhotoHeaderProps, any> {
  private myFile;
  constructor(props) {
    super(props);
    this.state = { labelInput: "" };
    this.myFile = React.createRef();
  }
  render() {
    return (
      <Stack>
        <Stack>
          <Text variant="xxLarge">Photos</Text>
        </Stack>
        <Stack horizontal>
          <Stack.Item grow>
            <TextField value={this.state.labelInput} onChange={this._onChange} placeholder="タイトル"></TextField>
          </Stack.Item>
          <PrimaryButton onClick={this._onClick}>追加</PrimaryButton>
        </Stack>
        <input type="file" ref={this.myFile} />
      </Stack>
    );
  }
  _onChange = evt => {
    this.setState({ labelInput: evt.target.value });
  };
  _onClick = evt => {
    const el = this.myFile.current!;
    console.log(el);
    el.click();
    let formData = new FormData();
    formData.append("photo", el.files[0]);
  };
}
const PhotoHeaderConnect = connect(
  state => ({}),
  dispatch => ({
    addPhoto: (label, id) => dispatch(actions.addPhoto(label, id)),
    setFilter: filster => dispatch(actions.setFilter(filster))
  })
)(PhotoHeader);
export { PhotoHeaderConnect as PhotoHeader };
