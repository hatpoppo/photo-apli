import React from "react";
import { FilterTypes } from "../store";
import { Stack, Text, Pivot, PivotItem, TextField, PrimaryButton } from "office-ui-fabric-react";

import { actions, actionsWithService } from "../actions";
import { connect } from "react-redux";

interface PhotoListProps {
  addPhoto: (label: string, id: string) => void;
  setFilter: (filter: FilterTypes) => void;
}
const PhotoList = (props: PhotoListProps) => {
  return (
    <Stack>
      <Stack></Stack>
    </Stack>
  );
};

export { PhotoList };
