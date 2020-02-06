import React from "react";
import { FilterTypes } from "../store";
import { Stack, Text, Pivot, PivotItem, TextField, PrimaryButton } from "office-ui-fabric-react";

import { actions, actionsWithService } from "../actions";
import { connect } from "react-redux";

interface PhotoListItemProps {
  addPhoto: (label: string, id: string) => void;
  setFilter: (filter: FilterTypes) => void;
}
class PhotoListItem extends React.Component<PhotoListItemProps, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Stack>
        <Stack></Stack>
      </Stack>
    );
  }
}

export { PhotoListItem };
