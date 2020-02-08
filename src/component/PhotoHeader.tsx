import React from "react";
import { FilterTypes } from "../store";
import { Stack, Text, Pivot, PivotItem, TextField, PrimaryButton, Label, ILabel, IButton } from "office-ui-fabric-react";

import { actions, actionsWithService } from "../actions";
import { connect } from "react-redux";

interface PhotoHeaderProps {
  addPhoto: (label: any) => void;
  setFilter: (filter: FilterTypes) => void;
}
class PhotoHeader extends React.Component<PhotoHeaderProps, any> {
  private _myFile;
  private _defaultLabelFile = "ファイル名";
  constructor(props) {
    super(props);
    this.state = { labelInput: "", labelFile: this._defaultLabelFile };
    this._myFile = React.createRef();
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
        </Stack>
        <Stack horizontal>
          <Stack.Item grow>
            <TextField value={this.state.labelFile} disabled></TextField>
          </Stack.Item>
          <PrimaryButton onClick={this._onPhotoClick}>写真選択</PrimaryButton>
        </Stack>
        <PrimaryButton onClick={this._onClick} text="追加"></PrimaryButton>
        <input type="file" ref={this._myFile} onChange={this._onPhotoChange} />
      </Stack>
    );
  }
  _onChange = evt => {
    this.setState({ labelInput: evt.target.value });
  };
  _onPhotoClick = evt => {
    let el = this._myFile.current;
    el.click();
  };
  _onPhotoChange = evt => {
    const el = this._myFile.current;
    if (el.files.length > 0) {
      this.setState({ labelFile: el.files[0].name });
    } else {
      this.setState({ labelFile: this._defaultLabelFile });
    }
  };
  _onClick = evt => {
    const el = this._myFile.current;
    if (el.files.length > 0) {
      let formData = new FormData();
      formData.append("photo", el.files[0]);
      formData.append("title", this.state.labelInput);
      this.props.addPhoto(formData);
    } else {
      console.log("not file");
    }
  };
}
const PhotoHeaderConnect = connect(
  state => ({}),
  (dispatch: any) => ({
    addPhoto: photo => dispatch(actionsWithService.addPhoto(photo)),
    setFilter: filster => dispatch(actions.setFilter(filster))
  })
)(PhotoHeader);
export { PhotoHeaderConnect as PhotoHeader };
